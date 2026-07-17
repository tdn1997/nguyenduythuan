import type { CSSProperties, PointerEvent } from "react";
import { useRef, useState } from "react";
import { skills } from "../data/skills";
import type { SkillIcon, SkillItem } from "../data/skills";

const sizeClass: Record<SkillItem["size"], string> = {
  sm: "skills-node-sm",
  md: "skills-node-md",
  lg: "skills-node-lg",
};

function GlobeHintIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 12h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 3c2.4 2.4 3.6 5.4 3.6 9s-1.2 6.6-3.6 9c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function SkillIconMark({ icon }: { icon: SkillIcon }) {
  switch (icon) {
    case "javascript":
      return <span className="skills-logo-text skills-logo-js">JS</span>;
    case "python":
      return (
        <svg aria-hidden="true" viewBox="0 0 64 64" className="skills-logo-svg">
          <path d="M31 5c-10 0-15 4-15 12v8h18v4H10C4 29 2 34 2 40c0 8 5 14 13 14h7v-9c0-7 5-12 13-12h15c7 0 12-5 12-12 0-9-6-16-15-16H31Zm-7 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" fill="currentColor" opacity=".92" />
          <path d="M33 59c10 0 15-4 15-12v-8H30v-4h24c6 0 8-5 8-11 0-8-5-14-13-14h-7v9c0 7-5 12-13 12H14C7 31 2 36 2 43c0 9 6 16 15 16h16Zm7-8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="currentColor" opacity=".72" />
        </svg>
      );
    case "react":
      return (
        <svg aria-hidden="true" viewBox="0 0 64 64" className="skills-logo-svg">
          <circle cx="32" cy="32" r="5" fill="currentColor" />
          <ellipse cx="32" cy="32" rx="25" ry="10" fill="none" stroke="currentColor" strokeWidth="3" />
          <ellipse cx="32" cy="32" rx="25" ry="10" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="32" rx="25" ry="10" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(120 32 32)" />
        </svg>
      );
    case "tailwind":
      return (
        <svg aria-hidden="true" viewBox="0 0 64 64" className="skills-logo-svg">
          <path d="M16 29c4-10 10-15 19-15 6 0 10 2 14 6 3 3 5 4 8 4 3 0 6-2 9-5-4 10-10 15-19 15-6 0-10-2-14-6-3-3-5-4-8-4-3 0-6 2-9 5Zm-16 16c4-10 10-15 19-15 6 0 10 2 14 6 3 3 5 4 8 4 3 0 6-2 9-5-4 10-10 15-19 15-6 0-10-2-14-6-3-3-5-4-8-4-3 0-6 2-9 5Z" fill="currentColor" />
        </svg>
      );
    case "three":
      return (
        <svg aria-hidden="true" viewBox="0 0 64 64" className="skills-logo-svg">
          <path d="M13 8 52 22 24 56 13 8Z" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M23 20 44 27 30 45 23 20Zm7 4v21m0 0 14-18m-14 18-7-25" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "rust":
      return <span className="skills-logo-text">R</span>;
    case "cpp":
      return <span className="skills-logo-text">C++</span>;
    case "k8s":
      return (
        <svg aria-hidden="true" viewBox="0 0 64 64" className="skills-logo-svg">
          <path d="M32 4 56 18v28L32 60 8 46V18L32 4Z" fill="currentColor" opacity=".95" />
          <circle cx="32" cy="32" r="10" fill="none" stroke="#121212" strokeWidth="4" />
          {[0, 45, 90, 135].map((rotation) => (
            <path key={rotation} d="M32 16v32" stroke="#121212" strokeWidth="4" strokeLinecap="round" transform={`rotate(${rotation} 32 32)`} />
          ))}
        </svg>
      );
    case "firebase":
      return (
        <svg aria-hidden="true" viewBox="0 0 64 64" className="skills-logo-svg">
          <path d="M12 52 22 8l12 23 7-14 11 35-20 9-20-9Z" fill="currentColor" />
          <path d="M22 8 34 31 12 52Z" fill="#ff8f00" opacity=".75" />
        </svg>
      );
    case "terraform":
      return (
        <svg aria-hidden="true" viewBox="0 0 64 64" className="skills-logo-svg">
          <path d="M9 10 27 20v20L9 30V10Zm22 12 18-10v20L31 42V22Zm0 25 18-10v17L31 64V47Z" fill="currentColor" />
        </svg>
      );
    case "azure":
      return (
        <svg aria-hidden="true" viewBox="0 0 64 64" className="skills-logo-svg">
          <path d="M29 6 9 54h18l4-12 15 12H61L39 6H29Zm4 15 7 21-10-7 3-14Z" fill="currentColor" />
        </svg>
      );
    case "linux":
      return <span className="skills-logo-text">LX</span>;
    case "aws":
      return <span className="skills-logo-text skills-logo-aws">aws</span>;
    case "graphql":
      return (
        <svg aria-hidden="true" viewBox="0 0 64 64" className="skills-logo-svg">
          <path d="M32 7 54 20v25L32 57 10 45V20L32 7Z" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="32" cy="7" r="5" fill="currentColor" />
          <circle cx="54" cy="20" r="5" fill="currentColor" />
          <circle cx="54" cy="45" r="5" fill="currentColor" />
          <circle cx="32" cy="57" r="5" fill="currentColor" />
          <circle cx="10" cy="45" r="5" fill="currentColor" />
          <circle cx="10" cy="20" r="5" fill="currentColor" />
        </svg>
      );
    case "redux":
      return (
        <svg aria-hidden="true" viewBox="0 0 64 64" className="skills-logo-svg">
          <path d="M45 39c-6 8-18 8-25 1-5-5-4-12 2-15 5-3 11 1 9 6-1 4-7 4-9 1m22 7c5-9 2-19-6-24-7-5-15-2-16 5-1 6 6 9 10 5 3-3 0-8-4-8m16 22c5 1 10-1 12-5 3-5 0-11-6-12-5-1-10 3-9 8 1 4 6 5 9 2" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "prisma":
      return (
        <svg aria-hidden="true" viewBox="0 0 64 64" className="skills-logo-svg">
          <path d="M31 6 55 51 21 59 9 43 31 6Zm1 14L22 49l21-5-11-24Z" fill="currentColor" />
        </svg>
      );
    case "mysql":
      return <span className="skills-logo-text">My</span>;
    case "bash":
      return <span className="skills-logo-text">$</span>;
    case "go":
      return <span className="skills-logo-text">Go</span>;
    default:
      return null;
  }
}

function WireframeGlobe() {
  return (
    <div className="skills-globe" aria-hidden="true">
      <div className="skills-globe-shell">
        <div className="skills-globe-equator skills-globe-equator-a" />
        <div className="skills-globe-equator skills-globe-equator-b" />
        <div className="skills-globe-equator skills-globe-equator-c" />
        {[0, 24, 48, 72, 96, 120, 144].map((rotation) => (
          <span key={rotation} className="skills-globe-meridian" style={{ "--meridian-rotation": `${rotation}deg` } as CSSProperties} />
        ))}
        <svg viewBox="0 0 256 256" className="skills-globe-network">
          <path d="M42 96 111 45 211 75 221 160 150 222 49 194 25 124Z" />
          <path d="M42 96 221 160M111 45 150 222M211 75 49 194M25 124 211 75M49 194 111 45" />
          <path d="M42 96 150 222M111 45 221 160M25 124 150 222" />
        </svg>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [rotation, setRotation] = useState({ x: -6, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({
    pointerId: -1,
    startX: 0,
    startY: 0,
    rotationX: -6,
    rotationY: 0,
  });

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      rotationX: rotation.x,
      rotationY: rotation.y,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragState.current.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - dragState.current.startX;
    const deltaY = event.clientY - dragState.current.startY;

    setRotation({
      x: Math.max(-34, Math.min(34, dragState.current.rotationX - deltaY * 0.18)),
      y: dragState.current.rotationY + deltaX * 0.24,
    });
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragState.current.pointerId === event.pointerId) {
      setIsDragging(false);
      dragState.current.pointerId = -1;
    }
  };

  const universeStyle = {
    "--skills-rotate-x": `${rotation.x}deg`,
    "--skills-rotate-y": `${rotation.y}deg`,
  } as CSSProperties;

  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative isolate overflow-hidden border-y border-[#ff5b2e]/15 bg-[#292929] py-20 text-[#e4e8ef] md:py-28">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,91,46,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(255,91,46,0.11)_1px,transparent_1px)] bg-[size:54px_54px] md:bg-[size:72px_72px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,91,46,0.16),transparent_30%),linear-gradient(180deg,rgba(10,10,15,0.2),rgba(10,10,15,0.6))]" />

      <div className="container">
        <header className="reveal mb-10 flex items-center gap-4 md:mb-4" data-reveal>
          <span className="grid h-9 w-9 place-items-center text-[#ff5b2e]">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none">
              <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="2" />
              <path d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <h2 id="skills-heading" className="font-mono text-4xl font-black tracking-normal text-[#e8edf5] md:text-5xl">
            # Skills.json
          </h2>
        </header>

        <div
          className={`skills-universe ${isDragging ? "is-dragging" : ""}`}
          role="application"
          aria-label="Draggable skills universe"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={universeStyle}
        >
          <div className="skills-universe-plane">
            <div className={`skills-universe-stage ${isDragging ? "skills-universe-spin-paused" : ""}`}>
              <WireframeGlobe />

              {skills.map((skill) => (
                <button
                  key={skill.name}
                  type="button"
                  className={`skills-node ${sizeClass[skill.size]}`}
                  title={`${skill.label} - ${skill.level}`}
                  style={
                    {
                      "--skill-x": `${skill.x}%`,
                      "--skill-y": `${skill.y}%`,
                      "--skill-color": skill.accentColor,
                    } as CSSProperties
                  }
                >
                  <span className="skills-node-icon">
                    <SkillIconMark icon={skill.icon} />
                  </span>
                  <span className="skills-node-label">{skill.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="skills-drag-hint">
            <GlobeHintIcon />
            <span>Drag to explore skills universe</span>
          </div>
        </div>
      </div>
    </section>
  );
}
