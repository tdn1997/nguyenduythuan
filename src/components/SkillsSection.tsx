import dynamic from "next/dynamic";
import { skills } from "../data/skills";

// The 3D graph is WebGL/client-only — load it lazily so it code-splits and
// never runs during SSR.
const SkillsGraph3D = dynamic(() => import("./SkillsGraph3D"), {
  ssr: false,
  loading: () => (
    <div className="grid h-[clamp(460px,70vw,640px)] w-full place-items-center">
      <span className="font-mono text-sm text-[#9aa3b3]">Loading skills graph…</span>
    </div>
  ),
});

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative isolate overflow-hidden border-y border-[#ff5b2e]/15 bg-[#292929] py-20 text-[#e4e8ef] md:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,91,46,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(255,91,46,0.11)_1px,transparent_1px)] bg-[size:54px_54px] md:bg-[size:72px_72px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,91,46,0.16),transparent_30%),linear-gradient(180deg,rgba(10,10,15,0.2),rgba(10,10,15,0.6))]" />

      <div className="container">
        <header className="reveal mb-10 flex items-center gap-4 md:mb-8" data-reveal>
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

        <SkillsGraph3D />

        {/* Accessible / no-JS fallback: the same skills as text. */}
        <ul className="visually-hidden">
          {skills.map((skill) => (
            <li key={skill.name}>
              {skill.label} — {skill.level} ({skill.category})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
