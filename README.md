# WT Migremo Systems, Inc. — Company Website

The official website for **WT Migremo Systems, Inc. (WTMSI)**, a software development company with 15+ years of experience specializing in web development, full-stack engineering, mobile applications, and artificial intelligence.

🔗 **Live site:** [wtmigremo.com](https://wtmigremo.com/)

---

## Tech Stack

| Layer        | Technology                                      |
| ------------ | ----------------------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org/) (App Router)  |
| Language     | TypeScript                                       |
| Styling      | [Tailwind CSS v4](https://tailwindcss.com/)      |
| UI Components| [shadcn/ui](https://ui.shadcn.com/) (new-york)  |
| Icons        | [Lucide React](https://lucide.dev/)              |
| Fonts        | Geist Sans & Geist Mono (via `next/font`)        |

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── contact/page.tsx      # Contact page
│   ├── stories/page.tsx      # Blog / Stories page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── landing/
│   │   ├── grid-background.tsx  # Structural grid system (TailwindCSS.com-inspired)
│   │   ├── navbar.tsx           # Navigation bar
│   │   ├── hero.tsx             # Hero section
│   │   ├── products.tsx         # Services / Capabilities
│   │   ├── use-cases.tsx        # Industries served
│   │   ├── integrations.tsx     # How We Work process
│   │   ├── testimonials.tsx     # Client stories & stats
│   │   ├── partners.tsx         # Partners & Collaborators
│   │   ├── cta.tsx              # Call to action
│   │   ├── footer.tsx           # Site footer
│   │   └── index.ts             # Barrel exports
│   └── ui/                      # shadcn/ui components
└── lib/
    └── utils.ts
```

## Key Features

- **Structural grid design** — TailwindCSS.com-inspired layout with CSS Grid gutters, diagonal crosshatch patterns, and full-viewport horizontal lines
- **Dark theme** — `#0A0A0A` base with `#ee2312` red accent branding
- **Responsive** — Mobile-first design with proper breakpoint handling
- **Multi-page** — Landing, Contact, and Stories pages with consistent grid UI
- **Accessible** — Semantic HTML, proper heading hierarchy, and ARIA labels

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Pages

| Route      | Description                                    |
| ---------- | ---------------------------------------------- |
| `/`        | Landing page — hero, services, industries, process, testimonials, partners, CTA |
| `/contact` | Contact form with office info                  |
| `/stories` | Blog / latest stories from WTMSI               |

## Brand Colors

| Color       | Hex       | Usage              |
| ----------- | --------- | ------------------ |
| WTMSI Red   | `#ee2312` | Primary accent, CTAs, badges |
| Dark BG     | `#0A0A0A` | Page background    |
| Grid Lines  | `rgba(255,255,255,0.08)` | Structural lines |
| Text        | `#ffffff` / `#a3a3a3` / `#737373` | Headings / body / muted |

## Deployment

This is a standard Next.js app and can be deployed to any platform:

- [Vercel](https://vercel.com/) (recommended)
- Docker
- Any Node.js hosting

```bash
npm run build && npm run start
```

## License

© 2026 WT Migremo Systems, Inc. All rights reserved.
