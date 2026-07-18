import { Canvas, useFrame } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import { CameraControls, Html, Line } from "@react-three/drei";
import type CameraControlsImpl from "camera-controls";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { skills } from "../data/skills";
import type { SkillItem } from "../data/skills";

const SPHERE_RADIUS = 3.2;
const DEFAULT_CAM = new THREE.Vector3(0, 0, 8);
const FOCUS_GAP = 2.6; // camera distance beyond the focused node, radially

const NODE_RADIUS: Record<SkillItem["size"], number> = {
  sm: 0.15,
  md: 0.2,
  lg: 0.26,
};

function usePrefersReducedMotion() {
  // Client-only component (loaded with ssr:false), so window is available here.
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

// Even, deterministic distribution of points on a sphere (golden-angle spiral).
function fibonacciSphere(count: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i += 1) {
    const y = count === 1 ? 0 : 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    points.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius));
  }
  return points;
}

interface SkillNodeProps {
  skill: SkillItem;
  position: THREE.Vector3;
  radius: number;
  focused: boolean;
  dimmed: boolean;
  onFocus: (worldPosition: THREE.Vector3) => void;
}

function SkillNode({ skill, position, radius, focused, dimmed, onFocus }: SkillNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const scratch = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    if (!meshRef.current) return;
    const target = focused ? 1.9 : hovered ? 1.35 : 1;
    meshRef.current.scale.lerp(scratch.setScalar(target), 0.15);
  });

  const emissive = focused ? 1.2 : hovered ? 0.8 : 0.4;
  const labelOpacity = focused ? 1 : dimmed ? 0.35 : hovered ? 1 : 0.82;

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          if (meshRef.current) {
            onFocus(meshRef.current.getWorldPosition(new THREE.Vector3()));
          }
        }}
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color={skill.accentColor}
          emissive={skill.accentColor}
          emissiveIntensity={emissive}
          roughness={0.35}
          metalness={0.15}
        />
      </mesh>

      <Html center distanceFactor={9} position={[0, radius + 0.28, 0]} zIndexRange={[10, 0]} pointerEvents="none">
        <div
          style={{
            transform: `scale(${focused ? 1.35 : 1})`,
            opacity: labelOpacity,
            transition: "opacity 160ms ease, transform 160ms ease",
            whiteSpace: "nowrap",
            fontFamily: "'Space Grotesk', Inter, system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.02em",
            color: "#e8edf5",
            textShadow: "0 2px 10px rgba(0,0,0,0.85)",
            userSelect: "none",
          }}
        >
          {skill.label}
          {focused ? (
            <span
              style={{
                display: "block",
                marginTop: 2,
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: skill.accentColor,
              }}
            >
              {skill.level}
            </span>
          ) : null}
        </div>
      </Html>
    </group>
  );
}

interface GraphProps {
  onFocusChange: (focused: boolean) => void;
  registerReset: (reset: () => void) => void;
}

function Graph({ onFocusChange, registerReset }: GraphProps) {
  const controls = useRef<CameraControlsImpl>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const reduced = usePrefersReducedMotion();

  const positions = useMemo(() => fibonacciSphere(skills.length, SPHERE_RADIUS), []);

  // Connect each node to its two nearest neighbours → a graph mesh.
  const edges = useMemo(() => {
    const seen = new Set<string>();
    const list: Array<[number, number]> = [];
    positions.forEach((p, i) => {
      const nearest = positions
        .map((q, j) => ({ j, d: p.distanceTo(q) }))
        .filter((o) => o.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      nearest.forEach(({ j }) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (!seen.has(key)) {
          seen.add(key);
          list.push([i, j]);
        }
      });
    });
    return list;
  }, [positions]);

  useFrame((_, delta) => {
    if (groupRef.current && focused === null && !reduced) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  const focusNode = (index: number, worldPosition: THREE.Vector3) => {
    setFocused(index);
    onFocusChange(true);
    const camPos = worldPosition
      .clone()
      .normalize()
      .multiplyScalar(SPHERE_RADIUS + FOCUS_GAP);
    controls.current?.setLookAt(
      camPos.x,
      camPos.y,
      camPos.z,
      worldPosition.x,
      worldPosition.y,
      worldPosition.z,
      !reduced
    );
  };

  const reset = useCallback(() => {
    setFocused(null);
    onFocusChange(false);
    controls.current?.setLookAt(DEFAULT_CAM.x, DEFAULT_CAM.y, DEFAULT_CAM.z, 0, 0, 0, !reduced);
  }, [onFocusChange, reduced]);

  useEffect(() => {
    registerReset(reset);
  }, [registerReset, reset]);

  return (
    <>
      <ambientLight intensity={0.9} />
      <pointLight position={[6, 6, 8]} intensity={60} />
      <pointLight position={[-6, -4, -6]} intensity={25} color="#4f91ff" />

      <CameraControls ref={controls} makeDefault smoothTime={reduced ? 0 : 0.45} minDistance={4.5} maxDistance={14} />

      <group ref={groupRef}>
        {edges.map(([a, b]) => {
          const active = focused === a || focused === b;
          return (
            <Line
              key={`${a}-${b}`}
              points={[positions[a], positions[b]]}
              color={active ? "#ff8b2a" : "#ff5b2e"}
              lineWidth={active ? 2 : 1}
              transparent
              opacity={active ? 0.9 : focused === null ? 0.22 : 0.08}
            />
          );
        })}

        {skills.map((skill, i) => (
          <SkillNode
            key={skill.name}
            skill={skill}
            position={positions[i]}
            radius={NODE_RADIUS[skill.size]}
            focused={focused === i}
            dimmed={focused !== null && focused !== i}
            onFocus={(worldPosition) => focusNode(i, worldPosition)}
          />
        ))}
      </group>
    </>
  );
}

export default function SkillsGraph3D() {
  const [hasFocus, setHasFocus] = useState(false);
  const resetRef = useRef<(() => void) | null>(null);

  return (
    <div className="relative h-[clamp(460px,70vw,640px)] w-full">
      <Canvas
        camera={{ position: [DEFAULT_CAM.x, DEFAULT_CAM.y, DEFAULT_CAM.z], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
        onPointerMissed={() => resetRef.current?.()}
      >
        <Graph
          onFocusChange={setHasFocus}
          registerReset={(reset) => {
            resetRef.current = reset;
          }}
        />
      </Canvas>

      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#181818]/70 px-5 py-2.5 font-mono text-sm text-[#e8edf5]/90 shadow-[0_14px_30px_rgba(0,0,0,0.25)] backdrop-blur">
        {hasFocus ? "Click empty space to reset · drag to orbit" : "Drag to orbit · click a skill to focus"}
      </div>
    </div>
  );
}
