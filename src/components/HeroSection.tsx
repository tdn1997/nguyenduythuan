import type { CSSProperties } from "react";

const loadedModules = ["REACT", "NEXT.JS", "NODE.JS", "TYPESCRIPT", "JAVA", "SPRING"];

const codeLines = [
  { number: 1, content: <span className="text-[#cdd3dc]">{"// Welcome to my workspace"}</span> },
  {
    number: 2,
    content: (
      <>
        <span className="text-[#b46cff]">import</span> <span className="text-[#cdd3dc]">{"{ "}</span>
        <span className="text-[#ff5b2e]">Developer</span> <span className="text-[#cdd3dc]">{" } "}</span>
        <span className="text-[#b46cff]">from</span> <span className="text-[#cdd3dc]"> </span>
        <span className="text-[#00e676]">&apos;./universe&apos;</span>
        <span className="text-[#cdd3dc]">;</span>
      </>
    ),
  },
  { number: 3, content: <span>&nbsp;</span> },
  {
    number: 4,
    content: (
      <>
        <span className="text-[#b46cff]">const</span> <span className="text-[#ffd21f]">Portfolio</span>{" "}
        <span className="text-[#cdd3dc]">=</span> <span className="text-[#4f91ff]">()</span>{" "}
        <span className="text-[#cdd3dc]">=&gt; {"{"}</span>
      </>
    ),
  },
  {
    number: 5,
    content: (
      <>
        <span className="pl-8 text-[#b46cff]">return</span> <span className="text-[#cdd3dc]">(</span>
      </>
    ),
  },
  {
    number: 6,
    content: <span className="pl-16 text-[#cdd3dc]">&lt;Developer</span>,
  },
  {
    number: 7,
    content: (
      <>
        <span className="pl-24 text-[#ff5b2e]">name</span>
        <span className="text-[#cdd3dc]">=</span>
        <span className="text-[#00e676]">&quot;Nguyen Duy Thuan&quot;</span>
      </>
    ),
  },
  {
    number: 8,
    content: (
      <>
        <span className="pl-24 text-[#ff5b2e]">role</span>
        <span className="text-[#cdd3dc]">=</span>
        <span className="text-[#00e676]">&quot;Full Stack Engineer&quot;</span>
      </>
    ),
  },
  {
    number: 9,
    content: (
      <>
        <span className="pl-24 text-[#ff5b2e]">passion</span>
        <span className="text-[#cdd3dc]">=</span>
        <span className="text-[#00e676]">&quot;Engineering Beyond Boundaries&quot;</span>
      </>
    ),
  },
  { number: 10, content: <span className="pl-16 text-[#cdd3dc]">/&gt;</span> },
  { number: 11, content: <span className="pl-8 text-[#cdd3dc]">);</span> },
  { number: 12, content: <span className="text-[#cdd3dc]">{"};"}</span> },
];

function TerminalIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="m5 7 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M7.5 5.8c0-1 1.1-1.6 2-1.1l8.9 5.2c.9.5.9 1.8 0 2.3l-8.9 5.2c-.9.5-2-.1-2-1.1V5.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BranchIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="5" r="2.25" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="7" r="2.25" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="19" r="2.25" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M6 7.25v2.25A3.5 3.5 0 0 0 9.5 13H12v3.75M12 13h2.5A3.5 3.5 0 0 0 18 9.5V9.25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path d="M14 4h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m10 14 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <path d="m9 8-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m15 8 4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m13 5-2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden border-b border-[#ff5b2e]/20 bg-[#292929] py-16 text-[#e4e8ef] md:py-20 lg:py-0"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,91,46,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,91,46,0.13)_1px,transparent_1px)] bg-[size:68px_68px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_66%_34%,rgba(93,83,255,0.18),transparent_26%),radial-gradient(circle_at_25%_45%,rgba(255,91,46,0.16),transparent_28%),linear-gradient(90deg,rgba(18,18,18,0.1),rgba(18,18,18,0.55))]" />
      <div className="absolute left-0 top-0 -z-10 h-24 w-80 bg-[#ff5b2e]/10 blur-3xl" />

      <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="reveal relative z-10 max-w-3xl" data-reveal>
          <div className="inline-flex items-center gap-3 rounded-md border border-[#ff6a1f]/55 bg-[#301a10]/70 px-4 py-2 font-mono text-sm uppercase tracking-[0.12em] text-[#ff6a2a] shadow-[0_0_26px_rgba(255,91,46,0.18)]">
            <span className="h-3 w-3 rounded-full bg-[#ff5b2e] shadow-[0_0_16px_rgba(255,91,46,0.9)]" />
            SYSTEM.KERNEL :: v2.5.0 ONLINE
          </div>

          <h1 id="hero-heading" className="mt-8 font-display text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-normal text-[#e8edf5] md:mt-10">
            Hello, I&apos;m
            <span className="mt-2 block bg-gradient-to-r from-[#ff852c] via-[#d09a93] to-[#4f91ff] bg-clip-text text-transparent drop-shadow-[0_20px_18px_rgba(255,91,46,0.24)]">
              Nguyen Duy Thuan
            </span>
          </h1>

          <p className="mt-7 max-w-4xl text-xl leading-8 text-[#d9dde5] md:text-3xl md:leading-[1.45]">
            <span className="font-mono text-[#ff5b2e]">&lt;Architect /&gt;</span>{" "}
            <span>Engineering Beyond Boundaries.</span>
            <span className="block text-lg text-[#d9dde5] md:text-2xl">
              Specializing in distributed systems, real-time architecture, and high-performance applications.
            </span>
          </p>

          <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-stretch">
            <div className="relative flex min-h-[112px] flex-1 items-center gap-5 border border-[#ff6a1f]/45 bg-[#1b1b1e]/90 p-5 shadow-[0_0_0_1px_rgba(79,145,255,0.3),0_18px_42px_rgba(0,0,0,0.26)] [clip-path:polygon(4%_0,100%_0,100%_70%,95%_100%,0_100%,0_24%)] md:max-w-[610px]">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md border border-[#ff6a1f]/45 bg-[#321c10] text-[#ff5b2e]">
                <TerminalIcon />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-lg font-bold text-white md:text-xl">Initialize OS</h2>
                  <ExternalIcon />
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#1f2937]">
                  <div className="h-full w-[58%] bg-gradient-to-r from-[#ff5b2e] to-[#ffb199]" />
                </div>
                <div className="mt-2 flex items-center justify-between gap-4 font-mono text-xs">
                  <span className="truncate text-[#7d8794]">&gt; sudo boot_gui</span>
                  <span className="shrink-0 text-[#ff6a1f]">Loading...</span>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[112px] items-center gap-4 border border-[#ff6a1f]/45 bg-[#1b1b1e]/90 px-7 text-white transition hover:border-[#4f91ff] hover:text-[#ff6a1f] md:w-44 [clip-path:polygon(16%_0,100%_0,100%_76%,84%_100%,0_100%,0_24%)]"
            >
              <BranchIcon />
              <span className="leading-tight">
                <span className="block font-mono text-xs text-[#8b95a3]">Check out</span>
                <span className="block text-2xl font-bold">GitHub</span>
              </span>
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.08em] text-[#7e8896]">
            <span className="mr-3">LOADED_MODULES:</span>
            {loadedModules.map((module) => (
              <span key={module} className="rounded-md border border-[#ff6a1f]/35 bg-[#2d221d] px-3 py-2 text-[#ff8b2a]">
                {module}
              </span>
            ))}
          </div>

          <p className="mt-24 hidden font-mono text-sm text-[#1d7f3b]/45 md:block">while(alive) {"{ code() }"}</p>
        </div>

        <div className="reveal relative z-10 lg:pl-4" data-reveal style={{ "--reveal-delay": "140ms" } as CSSProperties}>
          <div className="overflow-hidden rounded-2xl border border-[#ff5b2e]/20 bg-[#0e0f11] shadow-[0_0_90px_rgba(255,91,46,0.16),0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="flex h-14 items-center justify-between bg-[#3b3b39] px-6">
              <div className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-[#f04045]" />
                <span className="h-4 w-4 rounded-full bg-[#e9b115]" />
                <span className="h-4 w-4 rounded-full bg-[#17b750]" />
              </div>
              <div className="flex items-center gap-3 font-mono text-sm tracking-[0.14em] text-[#d9dde5]">
                <span className="h-3 w-3 rounded-full bg-[#ff5b2e]" />
                portfolio.tsx
              </div>
              <div className="w-16" />
            </div>

            <div className="min-h-[520px] bg-[#0d0e10] px-5 py-8 font-mono text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:px-8 md:text-xl">
              <div className="space-y-4 overflow-x-auto pb-2">
                {codeLines.map((line) => (
                  <div key={line.number} className="grid min-w-[640px] grid-cols-[34px_1fr] gap-5">
                    <span className="select-none text-right text-[#4b525d]">{line.number}</span>
                    <code className="whitespace-pre">{line.content}</code>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#ff6a1f]/55 bg-[#35190b]/80 px-7 py-4 font-mono text-base text-[#ff6a2a] transition hover:bg-[#ff6a1f] hover:text-[#111]"
                >
                  <PlayIcon />
                  Run Profile
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/10 bg-[#111315] px-7 py-4 font-mono text-base text-[#d9dde5] transition hover:border-[#4f91ff]/70 hover:text-[#4f91ff]"
                >
                  <FolderIcon />
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-4 top-16 hidden font-mono text-sm tracking-[0.16em] text-[#ff6a1f]/25 xl:block">
          &lt;System.Init /&gt;
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 xl:block">
          <div className="mb-12 grid h-16 w-16 place-items-center rounded-full border border-dashed border-[#ff6a1f]/50 text-[#ff5b2e] shadow-[0_0_30px_rgba(255,91,46,0.14)]">
            <CodeIcon />
          </div>
          <div className="mx-auto h-[470px] w-px bg-[#ff6a1f]/20">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <span
                key={item}
                className="absolute right-[25px] h-4 w-4 rounded-full border border-black/50 bg-[#202020]"
                style={{ top: `${112 + item * 88}px` }}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-9 left-1/2 hidden -translate-x-1/2 text-white md:block">
          <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24" fill="none">
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-3 hidden xl:block">
          <div className="relative grid h-20 w-20 place-items-center rounded-full border border-dashed border-[#ff6a1f]/50 bg-[#2b2b2b] shadow-[0_0_28px_rgba(255,91,46,0.28)]">
            <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-[#ff6a1f] bg-gradient-to-br from-[#101214] to-[#4f91ff] font-display text-lg font-bold text-white">
              NT
            </span>
            <span className="absolute right-1 top-1 h-3 w-3 rounded-full bg-[#00d6a3]" />
          </div>
        </div>
      </div>
    </section>
  );
}
