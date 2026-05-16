## Brand alignment plan (revised)

Apply the new VetLedger brand guidelines to the marketing site. Skipping tagline/messaging changes and logo swap per your direction.

### 1. Color system (`src/index.css`)

Update HSL tokens to the new palette:

- `--primary` Brand Blue → `#1E6FAE`
- `--highlight` Brand Gold → `#E5A825` (reserved for the single most important CTA per page)
- `--accent` Brand Green → `#3D8B67`
- Neutral warm-slate scale:
  - Card `#FFFFFF`, Surface/muted `#F8FAFC`, Hover `#F1F5F9`
  - Border `#E2E8F0`, Strong border `#CBD5E1`
  - Subtle text `#94A3B8`, Muted text `#64748B`, Strong text `#334155`, Foreground `#1E293B`
- Refresh `--shadow-soft/medium/hover` to warm-slate tints matching Shadow SM/MD/LG.
- Update `--gradient-hero` to use new blue + green.

### 2. Typography — sentence case audit

Guidelines require sentence case for headlines. Audit and fix any Title Case headings across:
Hero, Problem, Solution, Capabilities, WhyVet, Contact, Partners, Footer, Team page. (Most already comply — this is a sweep.)

### 3. CTA discipline (gold reserved for one action per page)

- Hero "Get Early Access" → stays gold (`hero` variant).
- Header "Join Waitlist" → switch to blue `default` variant.
- Partners section CTA → blue `default` variant.
- Any other CTA on the page → blue.

### 4. Favicon

`index.html` currently references `/vetledger-logo.png`. Update to the SVG mark already in the project.

### 5. Memory update

Update `mem://branding/design-system` and the Core index entry to reflect the new primary blue `#1E6FAE` and gold-CTA-reservation rule.

### Files affected

- `src/index.css`
- `index.html`
- `src/components/Header.tsx`
- `src/components/Partners.tsx`
- Any component with Title Case headings (sweep)
- `mem://branding/design-system`, `mem://index.md`

### Out of scope

- Tagline / messaging copy
- Logo mark
- Portal-only components (sidebars, data tables, KPI cards, charts, email templates)
