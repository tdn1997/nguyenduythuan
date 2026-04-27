const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="font-display text-lg font-bold tracking-wide text-white">
          <span className="text-neon-green">Nguyen</span> Duy Thuan
        </a>

        <ul className="flex items-center gap-5 text-sm text-neon-muted md:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="transition hover:text-white" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
