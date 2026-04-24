# Personal Website — Build Brief
**Author:** Ricardo Eric Wijaya
**Goal:** Personal branding & networking
**Aesthetic:** Dark, developer-coded, terminal feel
**Target builder:** Google Antigravity (or any AI-powered website builder)

---

## SITE METADATA

| Field       | Value                                                                 |
|-------------|-----------------------------------------------------------------------|
| Site name   | Ricardo — Backend Engineer                                            |
| Tagline     | I build things on the server side.                                    |
| Color scheme| Dark background `#0d0d0d`, accent `#00ff88` (terminal green), text `#e8e8e8` |
| Heading font| Monospace — JetBrains Mono, IBM Plex Mono, or Fira Code               |
| Body font   | Clean sans-serif — DM Sans or Geist                                   |
| Tone        | Minimal, direct, confident — like a well-written README               |

---

## DESIGN RULES

- Dark background `#0d0d0d` or `#111111`
- Single accent color: terminal green `#00ff88` — use consistently, do not mix with other accent colors
- Body text: `#e8e8e8` — headings: pure white `#ffffff`
- No heavy gradients, no purple tones, no stock illustrations
- Subtle scanline or grain texture on background is acceptable
- Blinking cursor `|` animation on the hero tagline
- Navigation: minimal top bar with anchor links to each section
- Layout: single-page scroll
- Mobile-first — stack columns on small screens, keep font sizes readable

**Section order:**
1. Hero
2. About
3. Skills
4. Projects
5. Experience
6. Contact

**SEO:**
- `<title>`: Ricardo — Backend Engineer
- `<meta description>`: Backend engineer based in Jakarta. I build APIs, services, and the infrastructure connecting them.
- OG image: dark card with name and title in monospace font

---

## SECTION 1 — HERO

**Layout:** Full-screen. Left-aligned or centered. Terminal-style blinking cursor on the tagline. Short and punchy — no walls of text.

```
$ whoami

Ricardo
Backend Engineer · Jakarta, Indonesia

I work on the stuff users don't see — APIs, services,
databases, and the glue holding everything together.

Currently open to new opportunities.

[View Projects]   [Contact Me]
```

---

## SECTION 2 — ABOUT

**Layout:** Single column or two-column. Wrap content in a terminal window frame (dark panel, monospace, subtle border).

```
> about.txt

I'm a backend-focused software engineer based in Jakarta.
I care about clean APIs, pragmatic architecture, and writing
code that other engineers can actually read.

My stack centers around Golang and Node.js for backend work,
PostgreSQL for data, and Docker for keeping environments sane.
On the frontend I've worked with React when needed — I'm not
afraid of it, I just know where I'm most useful.

Before graduating, I spent time in corporate environments doing
real production work: REST APIs in Go with Gin, B2B dashboard
reporting, Docker containerization.
```

---

## SECTION 3 — SKILLS & TECH STACK

**Layout:** Grouped grid or labeled list. Use monospace labels or tech icons. Do NOT use rating bars or percentage indicators — they look generic.

```json
{
  "backend": [
    "Golang (Gin, pgxpool)",
    "Node.js / Express",
    "REST API design"
  ],
  "frontend": [
    "React (Vite, MUI, React Router)",
    "JavaScript",
    "TypeScript",
    "Axios",
    "Atomic Design"
  ],
  "database": [
    "PostgreSQL",
    "MongoDB",
    "Query optimization"
  ],
  "devops_and_tools": [
    "Docker",
    "Git",
    "GitLab",
    "Postman"
  ],
  "currently_learning": [
    "Algorithms & data structures",
    "System design",
    "Linux internals"
  ]
}
```

---

## SECTION 4 — PROJECTS

**Layout:** Card grid. Each card contains: project name, one-line description, tech stack tags, and a GitHub link. Use a terminal window or code-card aesthetic per card.

**Data source:** Load project data from `project.js` in the project root. Each project object will have the following shape:

```js
// Expected shape of each item in project.js
{
  title: string,         // Project name
  description: string,  // One-line summary
  tech: string[],      // Tech stack tags
  github: string,       // GitHub URL
  images: string[] | null   // Live demo URL, or null if none
}
```
Render one card per project. If `images` has one or more entries, display the first image as the card thumbnail. If there are multiple images, show them as a scrollable gallery or slideshow inside the card or in a modal on click. If `images` is null dont render show the image.

---

## SECTION 5 — WORK EXPERIENCE

**Layout:** Vertical timeline or stacked list. Each entry: company, role, date range, and 2–3 bullet points. Factual — no fluff.

---

**Polytron — Backend Developer Intern**
`Feb 2025 – Jan 2026`

- Resolved fragmented data processing across multiple services by designing and implementing scalable RESTful APIs in Golang (Gin), reducing manual reconciliation efforts by 40% through workflow automation.
- Improved system reliability by optimizing API response times and refining distributed data aggregation logic, ensuring more consistent and accurate B2B dashboard reporting.
- Standardized backend deployment by containerizing services with Docker, ensuring consistent runtime behavior across Linux systems and reducing environment-related issues.

---

**Binus IT Division — Associate Web Developer**
`Mar 2024 – Jan 2025`

- Resolved critical production issues by debugging and refactoring application logic, improving system stability and increasing user satisfaction by 30%.
- Drove higher user engagement by implementing new features and enhancing existing functionalities, contributing to a 25% increase in active users.
- Improved cross-team efficiency by standardizing technical documentation and updating project guidelines, streamlining collaboration across the development team.

---

## SECTION 6 — CONTACT

**Layout:** Minimal. No contact form. Just links and email. Terminal prompt aesthetic.

```
$ echo "Let's talk"

I'm open to backend roles, full-stack positions,
and conversations about interesting problems.

Email     ricowijaya001@gmail.com
GitHub    github.com/Rico0418
LinkedIn  linkedin.com/in/ricardo-eric/

Based in Jakarta, Indonesia.
Open to remote and on-site opportunities.
```

---

*End of brief. All content is finalized. The only external dependency is `project.js` for Section 4.*