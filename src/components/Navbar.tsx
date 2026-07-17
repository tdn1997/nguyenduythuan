import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-brand-bg/85 backdrop-blur transition-colors ${
        scrolled ? "border-brand-accent/25 shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : "border-white/10"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="font-display text-lg font-bold tracking-wide text-white">
          <span className="text-brand-accent">Nguyen</span> Duy Thuan
        </a>

        <ul className="flex items-center gap-5 text-sm text-brand-muted md:gap-8">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.href}>
                <a
                  className={`relative py-1 transition hover:text-white ${
                    isActive ? "text-white" : ""
                  }`}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-brand-accent shadow-[0_0_12px_rgba(255,91,46,0.7)] transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
