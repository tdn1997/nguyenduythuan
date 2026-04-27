import type { SkillItem } from "../../data/skills";

interface SkillBadgeProps {
  skill: SkillItem;
}

const levelToColor: Record<SkillItem["level"], string> = {
  expert: "border-neon-green/50 text-neon-green",
  proficient: "border-neon-cyan/50 text-neon-cyan",
  familiar: "border-neon-pink/50 text-neon-pink",
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition hover:shadow-neon ${levelToColor[skill.level]}`}
      title={`${skill.name} — ${skill.level}`}
    >
      {skill.name}
    </span>
  );
}

