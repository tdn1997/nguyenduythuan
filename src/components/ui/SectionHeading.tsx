interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-8 md:mb-10">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-neon-text md:text-4xl">{title}</h2>
      <span className="mt-3 block h-[2px] w-28 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-pink" />
      {description ? <p className="mt-4 max-w-2xl text-neon-muted">{description}</p> : null}
    </header>
  );
}

