import type { ProjectItem } from "../../data/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

function RepoIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <rect x="7" y="3.75" width="10" height="16.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.75 7.5h4.5M9.75 15.75h4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="m12 3.75 2.47 5.01 5.53.8-4 3.9.94 5.51L12 16.37l-4.94 2.6.94-5.51-4-3.9 5.53-.8L12 3.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="5" r="2.25" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18" cy="5" r="2.25" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="19" r="2.25" stroke="currentColor" strokeWidth="1.7" />
      <path d="M6 7.25v2.25A3.5 3.5 0 0 0 9.5 13H12m6-5.75v2.25A3.5 3.5 0 0 1 14.5 13H12m0 0v3.75" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path d="M14 5h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m10 14 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 14v3.5A1.5 1.5 0 0 1 17.5 19h-11A1.5 1.5 0 0 1 5 17.5v-11A1.5 1.5 0 0 1 6.5 5H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex min-h-[350px] flex-col rounded-lg border border-black/30 bg-[#18191b] p-6 shadow-[0_20px_46px_rgba(0,0,0,0.34)] transition duration-300 hover:-translate-y-1 hover:border-[#ff5b2e]/45 hover:shadow-[0_24px_58px_rgba(0,0,0,0.42)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <RepoIcon className="h-5 w-5 shrink-0 text-[#7f8795]" />
          <h3 className="truncate font-mono text-xl font-bold tracking-normal text-[#ff7650]">{project.title}</h3>
        </div>
        <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-[#747c89]">
          {project.visibility}
        </span>
      </div>

      <p className="mt-5 min-h-[72px] text-base leading-7 text-[#9aa3b3]">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techTags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-[#6b351f]/70 bg-[#2b211d] px-3 py-1.5 font-mono text-xs tracking-[0.04em] text-[#d89454]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto border-t border-white/[0.06] pt-5">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[#7f8795]">
          <div className="flex min-w-0 flex-wrap items-center gap-5">
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: project.languageColor }}
              />
              <span className="truncate">{project.language}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <StarIcon />
              {project.stars}
            </span>
            <span className="flex items-center gap-1.5">
              <ForkIcon />
              {project.forks}
            </span>
          </div>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-md bg-white/[0.07] px-3 font-semibold text-[#a5acb8] transition hover:bg-[#ff5b2e]/15 hover:text-[#ff9a78]"
            >
              Demo
              <ExternalIcon />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
