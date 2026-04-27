export type SkillCategory = "frontend" | "backend" | "tools";
export type SkillLevel = "expert" | "proficient" | "familiar";
export type SkillIcon =
  | "aws"
  | "azure"
  | "bash"
  | "cpp"
  | "firebase"
  | "go"
  | "graphql"
  | "javascript"
  | "k8s"
  | "linux"
  | "mysql"
  | "prisma"
  | "python"
  | "react"
  | "redux"
  | "rust"
  | "tailwind"
  | "terraform"
  | "three";

export interface SkillItem {
  name: string;
  label: string;
  category: SkillCategory;
  level: SkillLevel;
  accentColor: string;
  orbitRadius: number;
  angle: number;
  x: number;
  y: number;
  size: "sm" | "md" | "lg";
  icon: SkillIcon;
}

export const skills: SkillItem[] = [
  {
    name: "Python",
    label: "Python",
    category: "backend",
    level: "proficient",
    accentColor: "#f6d34a",
    orbitRadius: 41,
    angle: -90,
    x: 50,
    y: 9,
    size: "lg",
    icon: "python",
  },
  {
    name: "JavaScript",
    label: "JavaScript",
    category: "frontend",
    level: "expert",
    accentColor: "#f7df1e",
    orbitRadius: 43,
    angle: -55,
    x: 69,
    y: 15,
    size: "lg",
    icon: "javascript",
  },
  {
    name: "Tailwind",
    label: "Tailwind",
    category: "frontend",
    level: "expert",
    accentColor: "#38bdf8",
    orbitRadius: 42,
    angle: -32,
    x: 80,
    y: 29,
    size: "lg",
    icon: "tailwind",
  },
  {
    name: "React",
    label: "React",
    category: "frontend",
    level: "expert",
    accentColor: "#61dafb",
    orbitRadius: 48,
    angle: -27,
    x: 91,
    y: 35,
    size: "md",
    icon: "react",
  },
  {
    name: "AWS",
    label: "AWS",
    category: "tools",
    level: "proficient",
    accentColor: "#ff9900",
    orbitRadius: 49,
    angle: -4,
    x: 98,
    y: 57,
    size: "lg",
    icon: "aws",
  },
  {
    name: "Linux",
    label: "Linux",
    category: "tools",
    level: "proficient",
    accentColor: "#111111",
    orbitRadius: 38,
    angle: 7,
    x: 79,
    y: 58,
    size: "lg",
    icon: "linux",
  },
  {
    name: "Redux",
    label: "Redux",
    category: "frontend",
    level: "proficient",
    accentColor: "#7e57c2",
    orbitRadius: 47,
    angle: 35,
    x: 90,
    y: 78,
    size: "md",
    icon: "redux",
  },
  {
    name: "GraphQL",
    label: "GraphQL",
    category: "backend",
    level: "proficient",
    accentColor: "#e535ab",
    orbitRadius: 42,
    angle: 42,
    x: 81,
    y: 79,
    size: "lg",
    icon: "graphql",
  },
  {
    name: "Prisma",
    label: "Prisma",
    category: "backend",
    level: "familiar",
    accentColor: "#3b5b7a",
    orbitRadius: 46,
    angle: 58,
    x: 69,
    y: 93,
    size: "md",
    icon: "prisma",
  },
  {
    name: "Azure",
    label: "Azure",
    category: "tools",
    level: "proficient",
    accentColor: "#139ce8",
    orbitRadius: 42,
    angle: 87,
    x: 51,
    y: 103,
    size: "lg",
    icon: "azure",
  },
  {
    name: "Firebase",
    label: "Firebase",
    category: "backend",
    level: "proficient",
    accentColor: "#ffab00",
    orbitRadius: 25,
    angle: 87,
    x: 51,
    y: 76,
    size: "lg",
    icon: "firebase",
  },
  {
    name: "Bash",
    label: "Bash",
    category: "tools",
    level: "familiar",
    accentColor: "#88d066",
    orbitRadius: 47,
    angle: 123,
    x: 27,
    y: 93,
    size: "sm",
    icon: "bash",
  },
  {
    name: "Terraform",
    label: "Terraform",
    category: "tools",
    level: "proficient",
    accentColor: "#7b5cf0",
    orbitRadius: 39,
    angle: 130,
    x: 25,
    y: 84,
    size: "lg",
    icon: "terraform",
  },
  {
    name: "MySQL",
    label: "MySQL",
    category: "backend",
    level: "familiar",
    accentColor: "#00758f",
    orbitRadius: 51,
    angle: 156,
    x: 2,
    y: 67,
    size: "md",
    icon: "mysql",
  },
  {
    name: "K8s",
    label: "K8s",
    category: "tools",
    level: "proficient",
    accentColor: "#326ce5",
    orbitRadius: 35,
    angle: 178,
    x: 17,
    y: 58,
    size: "lg",
    icon: "k8s",
  },
  {
    name: "C++",
    label: "C++",
    category: "backend",
    level: "familiar",
    accentColor: "#3f7dbf",
    orbitRadius: 48,
    angle: -160,
    x: 3,
    y: 39,
    size: "md",
    icon: "cpp",
  },
  {
    name: "Rust",
    label: "Rust",
    category: "backend",
    level: "familiar",
    accentColor: "#d64b22",
    orbitRadius: 37,
    angle: -132,
    x: 25,
    y: 26,
    size: "lg",
    icon: "rust",
  },
  {
    name: "Go",
    label: "Go",
    category: "backend",
    level: "familiar",
    accentColor: "#00add8",
    orbitRadius: 43,
    angle: -128,
    x: 27,
    y: 18,
    size: "sm",
    icon: "go",
  },
  {
    name: "Three.js",
    label: "Three.js",
    category: "frontend",
    level: "familiar",
    accentColor: "#f0f3f8",
    orbitRadius: 13,
    angle: -82,
    x: 51,
    y: 42,
    size: "md",
    icon: "three",
  },
];
