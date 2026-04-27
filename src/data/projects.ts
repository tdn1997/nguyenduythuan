export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techTags: string[];
  visibility: "Public" | "Private";
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
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
    updatedLabel: "Updated 1 months ago",
  },
  {
    id: "workforge",
    title: "WorkForge",
    visibility: "Public",
    language: "JavaScript",
    languageColor: "#f7df1e",
    updatedLabel: "Updated 1 months ago",
  },
  {
    id: "principles-in-code",
    title: "Principles In Code",
    visibility: "Public",
    language: "Java",
    languageColor: "#d18a24",
    updatedLabel: "Updated 1 months ago",
  },
  {
    id: "ledgerly",
    title: "Ledgerly",
    visibility: "Public",
    language: "JavaScript",
    languageColor: "#f7df1e",
    updatedLabel: "Updated 1 months ago",
  },
  {
    id: "cyber-strike-unity",
    title: "Cyber Strike Unity",
    visibility: "Public",
    language: "Mathematica",
    languageColor: "#f7df1e",
    updatedLabel: "Updated 1 months ago",
  },
  {
    id: "modito-online-code-editor",
    title: "Modito Online Code Editor",
    visibility: "Public",
    updatedLabel: "Updated 1 months ago",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "trackmate",
    title: "TrackMate Journey Tracking ...",
    description:
      "Production-ready cross-platform journey tracking platform with real-time GPS tracking, intelligent fuel estimation, social features, and multi-mode transport...",
    techTags: ["Spring Boot", "Java", "Kafka", "PostgreSQL", "ScyllaDB", "Redis", "React", "Flutter"],
    visibility: "Public",
    language: "Spring Boot",
    languageColor: "#f7df1e",
    stars: 10,
    forks: 20,
    demoUrl: "https://www.nguyenduythuan.dev",
    repoUrl: "https://github.com/",
    isPinned: true,
  },
  {
    id: "ripple",
    title: "Ripple",
    description:
      "Ripple is a production-ready, decentralized peer-to-peer messaging application that operates entirely over Bluetooth Low Energy (BLE) mesh networks.",
    techTags: ["Flutter", "Next.js", "TypeScript", "Kotlin", "Bluetooth Low Energy", "X25519"],
    visibility: "Public",
    language: "Flutter",
    languageColor: "#f7df1e",
    stars: 34,
    forks: 18,
    demoUrl: "https://www.nguyenduythuan.dev",
    repoUrl: "https://github.com/",
    isPinned: true,
  },
  {
    id: "stocklens",
    title: "StockLens",
    description:
      "AI-Powered Stock Market Analysis and Investment Advisor. This application is not for real trading, but rather a mock analytical platform for educational and decision...",
    techTags: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "Node.js", "Express"],
    visibility: "Public",
    language: "React",
    languageColor: "#61dafb",
    stars: 11,
    forks: 19,
    demoUrl: "https://www.nguyenduythuan.dev",
    repoUrl: "https://github.com/",
    isPinned: true,
  },
  {
    id: "resumate",
    title: "ResuMate",
    description:
      "A full-stack resume builder application that allows users to create ATS-optimized resumes in minutes. It features real-time previews, professional templates, smart writi...",
    techTags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Supabase", "Google Gemini API", "Framer Motion"],
    visibility: "Public",
    language: "Next.js 14",
    languageColor: "#f7df1e",
    stars: 41,
    forks: 18,
    demoUrl: "https://www.nguyenduythuan.dev",
    repoUrl: "https://github.com/",
    isPinned: true,
  },
];
