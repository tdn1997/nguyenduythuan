import type { CSSProperties } from "react";
import { projects, repositories } from "../data/projects";
import ProjectCard from "./ui/ProjectCard";

function FolderIcon() {
  return (
    <svg aria-hidden="true" className="h-9 w-9 text-[#ff5b2e]" viewBox="0 0 24 24" fill="none">
      <path
        d="M3.75 6.75A2.75 2.75 0 0 1 6.5 4h3.4l2 2.5h5.6a2.75 2.75 0 0 1 2.75 2.75v7A2.75 2.75 0 0 1 17.5 19H6.5a2.75 2.75 0 0 1-2.75-2.75v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path d="M4 10h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function RepoListIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5 text-[#b8bec8]" viewBox="0 0 24 24" fill="none">
      <rect x="7" y="3.75" width="10" height="16.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.75 7.5h4.5M9.75 15.75h4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProjectsSection() {
  const pinnedProjects = projects.filter((project) => project.isPinned);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative isolate overflow-hidden border-y border-[#ff5b2e]/15 bg-[#292929] py-20 text-[#e4e8ef] md:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,91,46,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,91,46,0.12)_1px,transparent_1px)] bg-[size:52px_52px] md:bg-[size:68px_68px]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,20,20,0.12),rgba(20,20,20,0.56))]" />

      <div className="container">
        <header className="reveal mb-14 flex items-center gap-4 font-mono" data-reveal>
          <FolderIcon />
          <h2 id="projects-heading" className="text-3xl font-black tracking-normal text-[#e8edf5] sm:text-4xl md:text-5xl">
            <span className="text-[#e8edf5]">$ </span>ls -la ~/projects
          </h2>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.92fr)_minmax(0,1.88fr)]">
          <aside className="reveal overflow-hidden rounded-lg border border-black/30 bg-[#18191b] shadow-[0_24px_60px_rgba(0,0,0,0.34)] lg:sticky lg:top-24 lg:max-h-[745px]" data-reveal>
            <div className="flex items-center justify-between border-b border-black/30 bg-[#222325] px-6 py-4">
              <div className="flex items-center gap-3 text-lg font-bold text-[#c8ccd4]">
                <RepoListIcon />
                Repositories
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-sm font-semibold text-[#747c89]">
                {repositories.length}
              </span>
            </div>

            <div className="max-h-[560px] overflow-y-auto">
              {repositories.map((repo) => (
                <article key={repo.id} className="border-b border-white/[0.05] px-6 py-5 last:border-b-0">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="min-w-0 break-words text-lg font-bold text-[#ff7650]">{repo.title}</h3>
                    <span className="shrink-0 rounded-full border border-white/[0.06] px-3 py-1 text-xs text-[#747c89]">
                      {repo.visibility}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#697385]">
                    {repo.language ? (
                      <span className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="h-3.5 w-3.5 rounded-full"
                          style={{ backgroundColor: repo.languageColor }}
                        />
                        {repo.language}
                      </span>
                    ) : null}
                    <span>{repo.updatedLabel}</span>
                  </div>
                </article>
              ))}
            </div>
          </aside>

          <div className="reveal" data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <div className="mb-6 flex items-center gap-5">
              <h3 className="shrink-0 font-mono text-lg font-bold uppercase tracking-[0.16em] text-[#9aa3b3]">
                Pinned Projects
              </h3>
              <span className="h-px flex-1 bg-black/30" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {pinnedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-md px-4 py-2 text-lg font-bold text-[#e4e8ef] transition hover:bg-white/[0.04] hover:text-[#ff9a78]"
              >
                View all repositories
                <ChevronIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
