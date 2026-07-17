export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techTags: string[];
  visibility: "Public" | "Private";
  language: string;
  languageColor: string;
  stars?: number;
  forks?: number;
  updatedLabel?: string;
  demoUrl?: string;
  repoUrl?: string;
  isPinned?: boolean;
}

export interface RepositoryItem {
  id: string;
  title: string;
  visibility: "Public" | "Private";
  language?: string;
  languageColor?: string;
  updatedLabel: string;
}

export const repositories: RepositoryItem[] = [
  {
    id: "momin-786",
    title: "Momin 786",
    visibility: "Public",
    updatedLabel: "Updated 14 days ago",
  },
  {
    id: "stormly-weatherweb",
    title: "Stormly WeatherWeb",
    visibility: "Public",
    language: "JavaScript",
    languageColor: "#f7df1e",
    updatedLabel: "Updated 1 month ago",
  },
  {
    id: "workforge",
    title: "WorkForge",
    visibility: "Public",
    language: "JavaScript",
    languageColor: "#f7df1e",
    updatedLabel: "Updated 1 month ago",
  },
  {
    id: "principles-in-code",
    title: "Principles In Code",
    visibility: "Public",
    language: "Java",
    languageColor: "#b07219",
    updatedLabel: "Updated 1 month ago",
  },
  {
    id: "ledgerly",
    title: "Ledgerly",
    visibility: "Public",
    language: "JavaScript",
    languageColor: "#f7df1e",
    updatedLabel: "Updated 1 month ago",
  },
  {
    id: "cyber-strike-unity",
    title: "Cyber Strike Unity",
    visibility: "Public",
    language: "C#",
    languageColor: "#178600",
    updatedLabel: "Updated 1 month ago",
  },
  {
    id: "modito-online-code-editor",
    title: "Modito Online Code Editor",
    visibility: "Public",
    updatedLabel: "Updated 1 month ago",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "trackmate",
    title: "TrackMate",
    description:
      "Cross-platform journey tracking platform with real-time GPS tracking, intelligent fuel estimation, social features, and multi-mode transport support.",
    techTags: ["Spring Boot", "Java", "Kafka", "PostgreSQL", "ScyllaDB", "Redis", "React", "Flutter"],
    visibility: "Public",
    language: "Java",
    languageColor: "#b07219",
    isPinned: true,
  },
  {
    id: "ripple",
    title: "Ripple",
    description:
      "A decentralized peer-to-peer messaging application that operates entirely over Bluetooth Low Energy (BLE) mesh networks.",
    techTags: ["Flutter", "Next.js", "TypeScript", "Kotlin", "Bluetooth Low Energy", "X25519"],
    visibility: "Public",
    language: "Dart",
    languageColor: "#00b4ab",
    isPinned: true,
  },
  {
    id: "stocklens",
    title: "StockLens",
    description:
      "AI-powered stock market analysis and investment advisor — a mock analytical platform for educational and decision-support purposes, not real trading.",
    techTags: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "Node.js", "Express"],
    visibility: "Public",
    language: "TypeScript",
    languageColor: "#3178c6",
    isPinned: true,
  },
  {
    id: "resumate",
    title: "ResuMate",
    description:
      "A full-stack resume builder that creates ATS-optimized resumes in minutes, featuring real-time previews, professional templates, and smart writing assistance.",
    techTags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Supabase", "Google Gemini API", "Framer Motion"],
    visibility: "Public",
    language: "TypeScript",
    languageColor: "#3178c6",
    isPinned: true,
  },
];
