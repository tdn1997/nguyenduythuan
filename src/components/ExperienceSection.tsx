import type { CSSProperties } from "react";

const experiences = [
  {
    hash: "a1b2ca2",
    branch: "HEAD -> engineer",
    company: "EboSoft Solutions",
    title: "Full Stack Engineer",
    date: "2024-05 - Present",
    description:
      "Leading end-to-end development of scalable web applications and POS systems using React, Next.js, NestJS, and Spring Boot. Architecting cloud infrastructure on AWS with Docker, ensuring performance and reliability across both enterprise and retail-facing products.",
    tags: ["React", "Next.js", "TypeScript", "NestJS", "Spring Boot", "MongoDB", "AWS", "Docker", "Git", "Jira", "Figma"],
    stats: { files: 11, additions: 100, deletions: 10 },
  },
  {
    hash: "a1b2ca1",
    branch: "HEAD -> developer",
    company: "Freelance - Upwork/Fiverr",
    title: "Full Stack Developer",
    date: "2022-06 - 2024-05",
    description: "Developed and maintained web applications",
    tags: ["JavaScript", "Express", "PostgreSQL", "React"],
    stats: { files: 4, additions: 120, deletions: 15 },
  },
];

function CalendarIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5 text-[#ff5b2e]" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="5.5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3.5v4M16 3.5v4M4 10h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 text-[#718093]" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 3.5h6.5L18 8v12.5H7V3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M13.5 3.5V8H18M9.5 13h5M9.5 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CommitNode() {
  return (
    <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border-4 border-[#d8dee8] bg-[#2a2b2d] shadow-[0_0_0_1px_rgba(255,91,46,0.5),0_0_24px_rgba(255,91,46,0.28)]">
      <span className="h-5 w-5 rounded-full bg-[#f4511e] shadow-[inset_0_0_0_3px_rgba(35,35,35,0.72)]" />
    </span>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative isolate overflow-hidden border-b border-[#ff5b2e]/20 bg-[#292929] py-20 text-[#e4e8ef] md:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,91,46,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,91,46,0.13)_1px,transparent_1px)] bg-[size:54px_54px] md:bg-[size:72px_72px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_26%_20%,rgba(255,91,46,0.12),transparent_30%),radial-gradient(circle_at_72%_58%,rgba(79,145,255,0.1),transparent_28%),linear-gradient(180deg,rgba(20,20,20,0.18),rgba(20,20,20,0.7))]" />

      <div className="container">
        <header className="reveal mb-14 flex items-center gap-4 font-mono md:mb-16" data-reveal>
          <span className="grid h-9 w-9 place-items-center text-[#ff5b2e]">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none">
              <circle cx="6" cy="6" r="2.25" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="18" cy="18" r="2.25" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8.25 6H12a4 4 0 0 1 4 4v5.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <h2 id="experience-heading" className="font-mono text-4xl font-black tracking-normal text-[#e8edf5] md:text-5xl">
            # Experience.git
          </h2>
        </header>

        <div className="relative mx-auto max-w-7xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-[#ff5b2e]/65 shadow-[0_0_20px_rgba(255,91,46,0.35)] md:left-1/2 md:block" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;
              const cardClass = isLeft ? "md:col-start-1" : "md:col-start-3";
              const dateClass = isLeft
                ? "md:col-start-3 md:justify-start"
                : "md:col-start-1 md:row-start-1 md:justify-end";

              return (
                <article
                  key={experience.hash}
                  className="reveal relative grid gap-6 md:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)] md:items-center"
                  data-reveal
                  style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
                >
                  <div
                    className={`relative overflow-hidden rounded-lg border border-black/30 bg-[#18191b] shadow-[0_24px_65px_rgba(0,0,0,0.38)] ${cardClass}`}
                  >
                    <div className="flex min-h-14 flex-wrap items-center justify-between gap-3 border-b border-black/30 bg-[#222325] px-5 py-3 font-mono text-sm md:px-7">
                      <div className="flex min-w-0 flex-wrap items-center gap-3">
                        <span className="font-bold tracking-normal text-[#ffd21f]">{experience.hash}</span>
                        <span className="rounded-md border border-[#4f91ff]/35 bg-[#17304f]/75 px-3 py-1 text-[#66a6ff]">
                          {experience.branch}
                        </span>
                      </div>
                      <span className="max-w-full truncate text-[#737b8c]">{experience.company}</span>
                    </div>

                    <div className="px-5 py-8 md:px-8 md:py-10">
                      <h3 className="text-2xl font-bold tracking-normal text-white md:text-3xl">
                        {experience.title} <span className="text-[#6f7889]">@ {experience.company}</span>
                      </h3>

                      <p className="mt-8 border-l-2 border-[#ff5b2e]/45 pl-6 font-mono text-lg leading-8 text-[#aeb5c1] md:text-xl md:leading-9">
                        {experience.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {experience.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[#ff5b2e]/35 bg-[#2b211d]/70 px-4 py-2 font-mono text-sm font-semibold text-[#ff8a5c]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-white/5 bg-[#151617] px-5 py-4 font-mono text-sm text-[#737b8c] md:px-7">
                      <span className="inline-flex items-center gap-2">
                        <FileIcon />
                        {experience.stats.files} files changed
                      </span>
                      <span className="font-semibold text-[#00c46a]">+{experience.stats.additions} insertions</span>
                      <span className="font-semibold text-[#ff3f4e]">-{experience.stats.deletions} deletions</span>
                    </div>
                  </div>

                  <div className="hidden justify-center md:flex">
                    <CommitNode />
                  </div>

                  <div
                    className={`flex items-center gap-3 font-mono ${dateClass}`}
                  >
                    <span
                      className={`hidden h-px w-16 bg-[#ff5b2e]/70 md:block ${
                        isLeft ? "-order-1" : "order-2"
                      }`}
                    />
                    <span className="inline-flex items-center gap-3 rounded-full border border-[#ff5b2e]/20 bg-[#18191b] px-5 py-3 text-base text-[#aeb5c1] shadow-[0_12px_28px_rgba(0,0,0,0.28)]">
                      <CalendarIcon />
                      {experience.date}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 flex justify-center md:mt-20">
            <div className="inline-flex items-center gap-4 rounded-full bg-[#1d1e20] px-7 py-4 font-mono text-base text-[#aeb5c1] shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
              <span className="h-px w-5 bg-[#aeb5c1]" />
              Initial Commit (Hello World)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
