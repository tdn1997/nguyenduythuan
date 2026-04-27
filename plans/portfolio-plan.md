# Personal Portfolio Website — nguyenduythuan.dev

## 1. Project Overview

**Objective:** Build a personal portfolio website for Nguyen Duy Thuan, a JavaScript Developer, inspired by https://www.abdulmomin.dev/. The site will serve as a professional showcase presenting the developer's profile, skills, projects, and contact information.

**Scope:**
- Single-page application with smooth scroll navigation across four key sections
- Dark theme with neon accents — bold, creative, developer-focused
- Contact form + social media links
- Mobile-first responsive design with accessibility support

---

## 2. Brand Direction

| Attribute | Value |
|-----------|-------|
| **Theme** | Dark background with neon/vibrant accent colors |
| **Typography** | Display: bold sans-serif (e.g., Space Grotesk or Syne); Body: clean sans-serif (e.g., Inter) |
| **Color Palette** | Background: `#0a0a0f` (near-black), Accent: `#00ff88` (neon green) or `#ff0055` (neon pink), Text: `#e0e0e0` |
| **Tone** | Confident, modern, tech-forward — showcasing deep technical skill |
| **Visual Style** | High contrast, subtle glow effects, clean geometric layouts, micro-interactions |

---

## 3. Information Architecture

### Single-Page Sections (Scroll-based Navigation)

```
┌─────────────────────────────────────┐
│         NAVBAR (sticky)             │
│  Logo · About · Projects · Skills · Contact │
├─────────────────────────────────────┤
│                                     │
│         SECTION 1 — HERO           │
│  Name, Title, Tagline, CTA         │
│  Animated intro, scroll indicator  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         SECTION 2 — ABOUT          │
│  Bio, photo, tech journey           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         SECTION 3 — PROJECTS       │
│  Featured project cards/grid       │
│  Live demo + GitHub links          │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         SECTION 4 — SKILLS         │
│  Skill tags, proficiency bars      │
│  Tools, frameworks, languages       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         SECTION 5 — CONTACT        │
│  Contact form + social links       │
│  Email, GitHub, LinkedIn, etc.      │
│                                     │
├─────────────────────────────────────┤
│            FOOTER                  │
│  Copyright · Back-to-top           │
└─────────────────────────────────────┘
```

---

## 4. Component System

| Component | Description |
|-----------|-------------|
| **Navbar** | Sticky top nav with section links, smooth-scroll, active state highlight |
| **HeroSection** | Full-viewport intro — name, title, tagline, animated CTA buttons |
| **AboutSection** | Two-column layout: personal photo + bio text block |
| **ProjectsSection** | Grid of project cards — image, title, description, tech tags, links |
| **ProjectCard** | Hoverable card with glow border, image overlay, action buttons |
| **SkillsSection** | Tag cloud + category groupings (Frontend, Backend, Tools) |
| **SkillBadge** | Animated tag pill with neon border on hover |
| **ContactSection** | Split layout: contact form left, social icons right |
| **ContactForm** | Fields: Name, Email, Message; client-side validation; API submission |
| **SocialLinks** | Icon row for GitHub, LinkedIn, Email, Twitter/X |
| **Footer** | Minimal — copyright, back-to-top button |
| **SectionHeading** | Reusable section title with decorative underline |

---

## 5. Responsive Behavior

| Breakpoint | Layout Adjustments |
|------------|--------------------|
| **Mobile (< 640px)** | Single column, stacked sections, hamburger nav, full-width cards |
| **Tablet (640–1024px)** | Two-column grid for projects, condensed navbar |
| **Desktop (> 1024px)** | Full layout, four-column project grid, hover effects active |

**Accessibility:**
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels for interactive elements
- Keyboard navigable (focus order, visible focus rings)
- Color contrast ratio ≥ 4.5:1 for body text
- Reduced motion preference respected (`prefers-reduced-motion`)
- Alt text on all images

---

## 6. Technical Architecture

### Stack
- **Framework:** Next.js 12.1.6 (existing project)
- **Styling:** Tailwind CSS 3.x + custom CSS modules for neon/glow effects
- **Language:** TypeScript
- **State:** React hooks (minimal — no heavy state management needed)
- **Animations:** CSS transitions + optional Framer Motion for scroll-triggered effects

### Routing Strategy
- Single page `/` with scroll-based sections
- Optional: `/projects/[slug]` for individual project detail pages (future expansion)
- API route `/api/contact` for contact form submission

### Data Model
```typescript
// Project
interface Project {
  id: string;
  title: string;
  description: string;
  techTags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

// Skill
interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  level: 'expert' | 'proficient' | 'familiar';
}

// ContactSubmission
interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
```

### Asset Strategy
- Profile photo: local asset in `/public/images/`
- Project thumbnails: local assets or external URLs
- Icons: inline SVG or icon library (e.g., `lucide-react`)
- Fonts: Google Fonts via `next/font` or `@import` in CSS

### Key Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `tailwind.config.js` | Modify | Add custom neon color tokens |
| `styles/globals.css` | Modify | Base dark theme, typography, scrollbar, glow utilities |
| `pages/index.tsx` | Rewrite | Single-page with all sections |
| `pages/api/contact.ts` | Create | Contact form API endpoint |
| `components/Navbar.tsx` | Create | Sticky navigation |
| `components/HeroSection.tsx` | Create | Hero landing block |
| `components/AboutSection.tsx` | Create | Bio section |
| `components/ProjectsSection.tsx` | Create | Projects grid |
| `components/SkillsSection.tsx` | Create | Skills display |
| `components/ContactSection.tsx` | Create | Contact form + social links |
| `components/Footer.tsx` | Create | Footer |
| `components/ui/SectionHeading.tsx` | Create | Reusable heading |
| `components/ui/ProjectCard.tsx` | Create | Project card component |
| `components/ui/SkillBadge.tsx` | Create | Skill tag component |
| `data/projects.ts` | Create | Project data |
| `data/skills.ts` | Create | Skills data |
| `lib/contact.ts` | Create | Contact form utility |

---

## 7. Implementation Backlog

### Phase 1 — Foundation
- [ ] Update `tailwind.config.js` with custom color palette and font family
- [ ] Rewrite `styles/globals.css` with dark theme variables, base styles, scrollbar styling
- [ ] Set up Google Fonts in `_app.tsx` (Space Grotesk + Inter)
- [ ] Create data files: `data/projects.ts` and `data/skills.ts`

### Phase 2 — Core Sections
- [ ] Build `Navbar` — sticky, smooth-scroll links, active state
- [ ] Build `HeroSection` — full-viewport, name, title, CTA buttons
- [ ] Build `AboutSection` — photo + bio two-column layout
- [ ] Build `ProjectsSection` + `ProjectCard` — grid with hover effects
- [ ] Build `SkillsSection` + `SkillBadge` — categorized skills display
- [ ] Build `ContactSection` — form + social links
- [ ] Build `Footer` — copyright + back-to-top

### Phase 3 — Interactions & Polish
- [ ] Add scroll-triggered reveal animations (CSS transitions)
- [ ] Implement contact form validation + submission via `/api/contact`
- [ ] Add hover glow effects and micro-interactions
- [ ] Fine-tune responsive breakpoints
- [ ] Accessibility audit — focus rings, ARIA, alt text

### Phase 4 — Deployment
- [ ] Add favicon and Open Graph meta tags to `pages/index.tsx`
- [ ] Test contact form end-to-end
- [ ] Deploy to Vercel and verify

---

## 8. Mermaid Diagram — Page Flow

```mermaid
graph TD
    A[Navbar] --> B[Hero Section]
    A --> C[About Section]
    A --> D[Projects Section]
    A --> E[Skills Section]
    A --> F[Contact Section]
    A --> G[Footer]

    B --> H[Scroll Down Indicator]
    C --> I[Profile Photo + Bio]
    D --> J[Project Cards Grid]
    J --> K[Live Demo / Repo Links]
    E --> L[Skill Categories]
    F --> M[Contact Form]
    F --> N[Social Links]
    M --> O[/api/contact endpoint]

    style A fill:#1a1a2e,color:#fff
    style B fill:#16213e,color:#00ff88
    style D fill:#16213e,color:#ff0055
    style F fill:#1a1a2e,color:#fff
```

---

## 9. Next Steps

1. Review and approve this plan
2. Switch to **Code mode** to begin Phase 1 implementation
3. Start with foundation work: Tailwind config, global styles, fonts, data files
4. Proceed section-by-section through Phases 2–4

