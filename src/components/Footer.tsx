function CodeIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5 text-[#ff5b2e]" viewBox="0 0 24 24" fill="none">
      <path d="m9 8-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m15 8 4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#292929] px-4 pb-20 pt-8 text-center">
      <div className="container flex flex-col items-center gap-4 font-mono text-[#cdd3dc]">
        <a href="#home" className="inline-flex items-center gap-2 text-xl font-bold text-[#e7ebf2] transition hover:text-[#ff9c78]">
          <CodeIcon />
          <span>Nguyen Duy Thuan | Software Engineer</span>
        </a>
        <p className="text-sm text-[#cdd3dc] md:text-base">Built with &lt;3 using Next.js, TypeScript &amp; Tailwind</p>
        <p className="text-xs text-[#a6adba] md:text-sm">
          © {new Date().getFullYear()} Nguyen Duy Thuan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
