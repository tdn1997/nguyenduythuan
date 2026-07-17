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

// Representative (sanitized) view of private, production work.
export const repositories: RepositoryItem[] = [
  {
    id: "payment-platform",
    title: "payment-platform",
    visibility: "Private",
    language: "TypeScript",
    languageColor: "#3178c6",
    updatedLabel: "Production · maintained",
  },
  {
    id: "distributed-backend",
    title: "distributed-backend",
    visibility: "Private",
    language: "TypeScript",
    languageColor: "#3178c6",
    updatedLabel: "Production · maintained",
  },
  {
    id: "web-scraper-service",
    title: "web-scraper-service",
    visibility: "Private",
    language: "TypeScript",
    languageColor: "#3178c6",
    updatedLabel: "Production · maintained",
  },
  {
    id: "web-mobile-app",
    title: "web-mobile-app",
    visibility: "Private",
    language: "TypeScript",
    languageColor: "#3178c6",
    updatedLabel: "Production · maintained",
  },
  {
    id: "e2e-automation",
    title: "e2e-automation",
    visibility: "Private",
    language: "TypeScript",
    languageColor: "#3178c6",
    updatedLabel: "Production · maintained",
  },
  {
    id: "email-service",
    title: "email-service",
    visibility: "Private",
    language: "TypeScript",
    languageColor: "#3178c6",
    updatedLabel: "Production · maintained",
  },
];

// Highlights drawn from real, production work (sanitized — no client, repo, or
// internal identifiers).
export const projects: ProjectItem[] = [
  {
    id: "payment-platform",
    title: "Multi-Region Payment Platform",
    description:
      "Payment integration handling multi-account, multi-currency routing across regions, Stripe Connect onboarding, and idempotent webhook processing hardened to never fail back to the provider.",
    techTags: ["NestJS", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    visibility: "Private",
    language: "TypeScript",
    languageColor: "#3178c6",
    isPinned: true,
  },
  {
    id: "resilient-backend",
    title: "Resilient Distributed Backend",
    description:
      "Self-healing Redis/Redlock locking with health-checked failover and exponential backoff, plus a NATS JetStream event-sourcing / CQRS layer with snapshots, replay, and ordered consumers.",
    techTags: ["NestJS", "Redis", "NATS JetStream", "PostgreSQL", "TypeScript"],
    visibility: "Private",
    language: "TypeScript",
    languageColor: "#3178c6",
    isPinned: true,
  },
  {
    id: "web-scraper",
    title: "Serverless Web Scraping Service",
    description:
      "Headless-Chromium link & metadata scraper on AWS Lambda with anti-bot stealth, proxy rotation, and a Strategy/Factory crawler that selects the best extractor per URL.",
    techTags: ["NestJS", "Puppeteer", "AWS Lambda", "Serverless", "TypeScript"],
    visibility: "Private",
    language: "TypeScript",
    languageColor: "#3178c6",
    isPinned: true,
  },
  {
    id: "web-mobile-app",
    title: "Cross-Platform Product & Mobile App",
    description:
      "MobX/React/Next web app shipped to iOS & Android via Capacitor, featuring deferred deep-linking and a Stripe PaymentElement giving flow with iDEAL/PIX and multi-currency support.",
    techTags: ["React", "Next.js", "MobX", "Capacitor", "Stripe"],
    visibility: "Private",
    language: "TypeScript",
    languageColor: "#3178c6",
    isPinned: true,
  },
];
