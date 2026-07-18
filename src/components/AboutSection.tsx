import type { CSSProperties } from "react";

const profileRows = [
  { label: "OPERATOR", value: "NGUYEN DUY THUAN", accent: "text-[#ff5b2e]" },
  { label: "ROLE", value: "FULL_STACK_SOFTWARE_ENGINEER", accent: "text-[#4f91ff]" },
  { label: "LOCATION", value: "Vietnam", accent: "text-[#e4e8ef]" },
];

const statCards = [
  { label: "EXPERIENCE", value: "6+", suffix: "YEARS", tone: "text-[#ff5b2e]", icon: "terminal" },
  { label: "PROJECTS", value: "4", suffix: "LIVE", tone: "text-[#4f91ff]", icon: "code" },
  { label: "STATUS", value: "OPEN", suffix: "NOW", tone: "text-[#00e676]", icon: "coffee" },
];

function TerminalGlyph() {
  return (
    <svg aria-hidden="true" className="h-8 w-8 text-[#ff5b2e]" viewBox="0 0 24 24" fill="none">
      <path d="m5 7 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function StatIcon({ name, className }: { name: string; className: string }) {
  if (name === "code") {
    return (
      <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
        <path d="m9 8-4 4 4 4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m15 8 4 4-4 4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m13 5-2 14" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "coffee") {
    return (
      <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
        <path d="M7 8h9v6.5a3.5 3.5 0 0 1-3.5 3.5h-2A3.5 3.5 0 0 1 7 14.5V8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 4v1.5M12 4v1.5M15 4v1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path d="m5 7 5 5-5 5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 17h6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.4" opacity="0.65" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden border-b border-[#ff5b2e]/20 bg-[#292929] py-20 text-[#e4e8ef] md:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,91,46,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,91,46,0.13)_1px,transparent_1px)] bg-[size:68px_68px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_48%,rgba(255,91,46,0.15),transparent_28%),radial-gradient(circle_at_70%_34%,rgba(79,145,255,0.16),transparent_30%),linear-gradient(180deg,rgba(20,20,20,0.18),rgba(20,20,20,0.74))]" />

      <div className="container">
        <header className="reveal mb-12 flex items-center gap-4 font-mono md:mb-16" data-reveal>
          <TerminalGlyph />
          <h2 id="about-heading" className="text-4xl font-bold tracking-normal text-[#e8edf5] md:text-5xl">
            <span className="text-[#e8edf5]"># </span>About.system
          </h2>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="reveal relative overflow-hidden rounded-[22px] border border-[#ff5b2e]/45 bg-[#18191b]/95 px-7 py-10 shadow-[0_0_0_1px_rgba(79,145,255,0.14),0_0_54px_rgba(255,91,46,0.18),0_26px_70px_rgba(0,0,0,0.36)] md:px-10 md:py-14" data-reveal>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4f91ff]/70 to-transparent" />
            <div className="mx-auto mb-12 grid h-44 w-44 place-items-center rounded-full border border-[#704018] bg-[#101113] shadow-[0_0_0_10px_rgba(79,145,255,0.16),0_0_0_18px_rgba(255,91,46,0.16)] md:h-48 md:w-48">
              <div className="relative grid h-36 w-36 place-items-center rounded-full border border-[#4f91ff]/55 bg-[radial-gradient(circle_at_45%_35%,rgba(255,255,255,0.1),transparent_44%),#17181a] md:h-40 md:w-40">
                <span className="font-display text-5xl font-bold tracking-normal text-[#e8edf5]">NDT</span>
                <span className="absolute bottom-3 right-3 h-5 w-5 rounded-full border-4 border-[#17181a] bg-[#00d66f]" />
              </div>
            </div>

            <div className="space-y-0 font-mono">
              {profileRows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-2 border-b border-white/10 py-4 text-sm sm:grid-cols-[150px_1fr] sm:items-center md:text-base"
                >
                  <span className="text-[#858c99]">{row.label}</span>
                  <span className={`${row.accent} break-words text-left font-bold tracking-[0.08em] sm:text-right`}>
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="grid gap-2 py-4 text-sm sm:grid-cols-[150px_1fr] sm:items-center md:text-base">
                <span className="text-[#858c99]">STATUS</span>
                <span className="sm:text-right">
                  <span className="inline-flex rounded-md border border-[#00e676]/35 bg-[#0b2c18]/80 px-3 py-1 text-sm font-bold text-[#00e676]">
                    OPEN
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="reveal" data-reveal style={{ "--reveal-delay": "140ms" } as CSSProperties}>
            <div className="overflow-hidden rounded-lg border border-black/30 bg-[#191a1c] shadow-[0_24px_60px_rgba(0,0,0,0.42)]">
              <div className="flex h-14 items-center border-b border-black/30 bg-[#2e2f31] px-6 font-mono text-sm text-[#8f96a3]">
                <span className="mr-3 text-[#9aa3b3]">&gt;_</span>
                user_profile.log
              </div>

              <div className="space-y-8 bg-[#18191b] px-6 py-8 font-mono text-base leading-8 text-[#b9bec7] md:px-9 md:text-lg md:leading-9">
                <div>
                  <p className="mb-5 text-[#4f91ff]">
                    <span aria-hidden="true">-&gt;</span> <span className="text-[#b46cff]">whoami</span>
                  </p>
                  <p className="border-l-2 border-white/10 pl-6">
                    Software engineer building end-to-end web applications with JavaScript, TypeScript, React, and
                    Next.js. I focus on clean architecture, performant interfaces, and maintainable systems that turn
                    product requirements into reliable delivery.
                  </p>
                </div>

                <div>
                  <p className="mb-5 text-[#4f91ff]">
                    <span aria-hidden="true">-&gt;</span> <span className="text-[#b46cff]">cat</span>{" "}
                    <span>mission.txt</span>
                  </p>
                  <p className="border-l-2 border-white/10 pl-6">
                    Translating complex requirements into smooth user experiences, reusable frontend foundations, and
                    production-minded code. Currently focused on modern React systems, accessibility, and performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {statCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-lg border border-white/5 bg-[#18191b]/95 p-6 shadow-[0_16px_38px_rgba(0,0,0,0.28)]"
                >
                  <div className="mb-5 flex items-center gap-3 font-mono text-sm tracking-[0.08em] text-[#858c99]">
                    <StatIcon name={card.icon} className={`h-6 w-6 ${card.tone}`} />
                    {card.label}
                  </div>
                  <div className="flex items-end gap-3 font-mono">
                    <span className="text-3xl font-bold leading-none text-white md:text-4xl">{card.value}</span>
                    <span className="pb-1 text-sm font-bold uppercase tracking-[0.1em] text-[#617084]">{card.suffix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
