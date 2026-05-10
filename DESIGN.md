# Kosha Design System

## Philosophy

**Calm, secure, focused.** Kosha speaks quietly because it handles critically important things. Every interaction should feel intentional, trustworthy, and efficient.

**Data density done right.** Compliance dashboards are information-rich by nature. We embrace this density while maintaining clarity through strong typography, whitespace discipline, and visual hierarchy.

**Security as a feeling.** The UI should feel secure before users read a single word. This means cool blues, ample whitespace, restrained motion, and no visual noise.

---

## Color Palette

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--surface-primary` | `#FFFFFF` | `#0A0F1C` | Main backgrounds |
| `--surface-secondary` | `#F8FAFC` | `#111827` | Card, panel backgrounds |
| `--surface-tertiary` | `#F1F5F9` | `#1F2937` | Hover states, subtle backgrounds |
| `--text-primary` | `#0F172A` | `#F8FAFC` | Primary text, headings |
| `--text-secondary` | `#64748B` | `#94A3B8` | Secondary text, descriptions |
| `--text-tertiary` | `#94A3B8` | `#64748B` | Placeholders, disabled state |
| `--accent-blue` | `#2563EB` | `#3B82F6` | Primary actions, links |
| `--accent-blue-hover` | `#1D4ED8` | `#60A5FA` | Button hovers |
| `--accent-amber` | `#D97706` | `#F59E0B` | Warnings, pending states |
| `--accent-red` | `#DC2626` | `#EF4444` | Errors, critical issues |
| `--accent-green` | `#059669` | `#10B981` | Success, passing states |
| `--accent-teal` | `#0891B8` | `#14B8A6` | Info, neutral highlights |
| `--border-subtle` | `#E2E8F0` | `#374151` | Subtle dividers |
| `--border-standard` | `#CBD5E1` | `#4B5563` | Form inputs, cards |

**Neutral Palette:** All neutrals are **cool** (slate-based family). No warm grays mixed in.

**Accent Rule:** Blue is primary. All other accents are semantic (status colors). Never use purple or pink gradients.

---

## Typography

**Font Families**
| Purpose | Font | Fallback |
|---------|------|----------|
| Display/Headings | `Cal Sans` | `Inter, system-ui` |
| Body/UI | `Inter` | `system-ui, sans-serif` |
| Monospace | `JetBrains Mono` | `ui-monospace, monospace` |

**Scale (Major Third — 1.25 ratio)**
| Level | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| Display | 48px | 1.1 | -0.02em | Page titles |
| H1 | 36px | 1.2 | -0.01em | Major sections |
| H2 | 28px | 1.25 | -0.01em | Section headings |
| H3 | 22px | 1.3 | 0 | Subsection headings |
| H4 | 18px | 1.4 | 0 | Card titles |
| H5 | 16px | 1.4 | 0.01em | Labels, small headings |
| Body Large | 16px | 1.6 | 0 | Primary body |
| Body | 14px | 1.5 | 0 | Standard text |
| Small | 12px | 1.4 | 0.02em | Captions, metadata |

**Typography Rules**
- **Never use font smoothing hacks** (`-webkit-font-smoothing: antialiased` is prohibited)
- **Measure:** 45-75 characters per line maximum for body text
- **All caps only for:** Status badges, abbreviations (max 3 characters)
- **Headings use `text-wrap: balance`** for better rags

---

## Spacing System

**Base unit: 4px**

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight padding, icon gaps |
| `--space-2` | 8px | Default gap between related items |
| `--space-3` | 12px | Form field padding |
| `--space-4` | 16px | Card internal padding |
| `--space-5` | 20px | Section gaps |
| `--space-6` | 24px | Major section separators |
| `--space-8` | 32px | Page-level spacing |
| `--space-10` | 40px | Hero/internal section gaps |
| `--space-12` | 48px | Major page sections |
| `--space-16` | 64px | Section padding |
| `--space-20` | 80px | Page vertical rhythm |

**Section Spacing Rule:** Always `--space-12` or greater between major page sections. Never stack sections with default margins.

---

## Layout Principles

**Grid System**
- 12-column grid
- Gutter: 24px (`--space-6`)
- Max container: 1280px
- Padding: 16px mobile, 24px tablet, 32px desktop

**Card Design**
- Border radius: 8px (`rounded-lg`)
- Shadow: `0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)`
- Border: 1px solid `--border-subtle`
- No colored left borders (banned pattern)
- Padding: `--space-5` (20px) or `--space-6` (24px)

**App Shell Structure**
```
[App Shell]
  ├─ [Header: Logo, Search, User Menu]
  ├─ [Sidebar: Navigation] [Main Content]
  │                   ├─ [Page Header: Title, Actions]
  │                   ├─ [Content Area]
  │                   └─ [Tab Bars / Filters]
  └─ [Footer: Status, Links]
```

---

## Component Patterns

**Buttons**
| Variant | Background | Text | Border | Hover |
|---------|------------|------|--------|-------|
| Primary | `--accent-blue` | white | none | `--accent-blue-hover` |
| Secondary | transparent | `--text-primary` | `--border-standard` | `--surface-tertiary` |
| Ghost | transparent | `--text-secondary` | none | `--surface-tertiary` |
| Danger | `--accent-red` | white | none | darker red |
| Status | transparent | semantic color | 1px semantic | 10% opacity background |

**All buttons:**
- Height: 40px (standard), 32px (compact), 48px (prominent)
- Padding: 0 16px
- Border radius: 6px
- Font weight: 500

**Form Inputs**
- Height: 40px
- Padding: 8px 12px
- Border: 1px solid `--border-standard`
- Border radius: 6px
- Focus: 2px `--accent-blue` ring
- Placeholder color: `--text-tertiary`
- **Labels always outside the input** (banned: float-label patterns)

**Status Badges**
| Status | Background | Text | Border |
|--------|------------|------|--------|
| Passing | `rgba(16, 185, 129, 0.1)` | `--accent-green` | 1px green |
| Failing | `rgba(239, 68, 68, 0.1)` | `--accent-red` | 1px red |
| Warning | `rgba(245, 158, 11, 0.1)` | `--accent-amber` | 1px amber |
| Pending | `rgba(59, 130, 246, 0.1)` | `--accent-blue` | 1px blue |
| Info | `rgba(20, 184, 166, 0.1)` | `--accent-teal` | 1px teal |

---

## Motion & Animation

**Philosophy:** Motion should clarify, not decorate. Every animation must serve a purpose.

**Timing**
| Duration | Usage |
|----------|-------|
| 150ms | Micro-interactions (button states, toggles) |
| 200ms | UI feedback (hover states, small reveals) |
| 300ms | Modal entrances, dropdowns |
| 400ms | Page transitions, major reveals |

**Easing**
- Standard: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)
- Enter: `cubic-bezier(0, 0, 0.2, 1)` (decelerate)
- Exit: `cubic-bezier(0.4, 0, 1, 1)` (accelerate)
- Bounce (rare): `cubic-bezier(0.34, 1.56, 0.64, 1)`

**Allowed Animations**
- Fade in/out (opacity)
- Slide from edge (transform: translate)
- Scale micro-interactions (buttons: 0.98 on press)
- Skeleton shimmer (subtle, purposeful)

**Prohibited**
- Decorative floating shapes
- Continuous rotation without purpose
- Parallax that delays content
- Starfield/ particle effects

**Accessibility:** Always respect `prefers-reduced-motion`. Disable non-essential animations for users who request reduced motion.

---

## Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | < 640px | Phones |
| Tablet | 640-1024px | Tablets, small laptops |
| Desktop | 1024-1280px | Standard laptops |
| Wide | > 1280px | Large monitors |

**Mobile-Specific Rules**
- Touch targets: minimum 44×44px
- Bottom navigation or hamburger menu
- Horizontal scroll never allowed
- Stacked single-column layouts
- Important actions within thumb reach (bottom)

---

## The "Anti-Slop" Rules

### Banned Patterns (AI Slop)

1. **Purple/violet gradients** — Never use. Stay in blue family for primary accents.
2. **3-column feature grids** with icon-in-circle + title + description formula.
3. **Icons in colored circles** as decorative elements.
4. **Centered everything** — only center hero CTA blocks, not content.
5. **Bubbly border radius** — use 6-8px consistently, not rounded-3xl everywhere.
6. **Decorative blobs, floating shapes, wavy dividers.**
7. **Emoji as design elements** — in headings, bullets, etc.
8. **Colored left-border on cards** — banned. Use status badges instead.
9. **Generic hero copy** — "Welcome to Kosha," "Unlock the power..."
10. **Cookie-cutter section rhythm** — hero → 3 features → testimonials → pricing → CTA.

### Required Patterns

1. **One job per section** — each section has ONE purpose, one headline, one support sentence.
2. **Typography as hierarchy** — use size, weight, and spacing to create hierarchy, not colors or borders.
3. **Data-first design** — dashboards lead with data, explanations come second (if needed).
4. **Whitespace is intentional** — never "leftover" space. Every gap serves hierarchy.

---

## Compliance Dashboard Specifics

**Eval Score Ring Component**
- Ring thickness: 8px
- Passing threshold: 240px ring circumference
- Colors: green ≥70%, amber 50-70%, red <50%
- Center: Large score number (Inter, 32px, bold) + label
- No shadows, no glows

**Security Control List**
-Dense, scannable rows
- Control name: `--text-primary`, 14px, medium weight
- Status: badge right-aligned
- Metadata: `--text-secondary`, 12px
- Hover: `--surface-tertiary` background

**Pipeline Status Board**
- Left: Stepper with steps
- Right: Log output panel (monospace, 13px)
- Current step highlighted: `--accent-blue` border
- Completed: `--accent-green` checkmark
- Failed: `--accent-red` with retry button

**Compliance Profile Cards**
- Framework badge (top-left)
- Profile name (H3)
- Summary stats (3 columns)
- Last updated timestamp
- Actions (view, export, delete) in dropdown

---

## Writing Guidelines

**Tone**
- Clear over clever
- Specific over general
- Active voice
- No exclamation points

**Microcopy Examples**
| Don't | Do |
|-------|-----|
| "Welcome to Kosha!" | "Compliance Dashboard" |
| "Oops! Something went wrong." | "Connection failed. Check your network and try again." |
| "Submit" | "Run Evaluation" |
| "Learn more" | "View documentation" |
| "Your all-in-one solution..." | "Track compliance across frameworks." |

---

## Implementation Notes

**Tailwind Configuration**
```javascript
colors: {
  surface: {
    primary: '#FFFFFF',
    secondary: '#F8FAFC',
    tertiary: '#F1F5F9',
  },
  // ... see color palette above
}
```

**CSS Variables**
Define these in `:root` for theming support:
```css
:root {
  --surface-primary: #FFFFFF;
  --surface-secondary: #F8FAFC;
  /* ... all tokens ... */
}
[data-theme="dark"] {
  --surface-primary: #0A0F1C;
  /* ... dark values ... */
}
```
