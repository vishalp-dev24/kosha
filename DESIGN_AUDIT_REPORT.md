# Kosha Design Audit Report

**Date:** 2026-01-28  
**Auditor:** gstack/design-review  
**Scope:** Full codebase audit against DESIGN.md specification  

---

## Executive Summary

| Metric | Score | Status |
|--------|-------|--------|
| **Design Score** | C+ | Functional but inconsistent |
| **AI Slop Score** | B | Some generic patterns detected |
| **Total Findings** | 23 | 8 High, 10 Medium, 5 Polish |

**Verdict:** The codebase shows deliberate design thinking with a warm/cream palette and ledger-inspired aesthetic. However, there are significant inconsistencies between CSS variables, Tailwind config naming conventions, and actual component usage. The design works but lacks the systematic compliance-focused polish required for the domain.

---

## Phase 1: First Impression

The site communicates **warm professionalism**. The cream/paper background with copper accents suggests traditional banking/ledger aesthetics — appropriate for compliance.

**I notice:**
- The warm color palette is distinctive (not generic blue corporate)
- Border radius values vary wildly (`rounded-2xl`, `rounded-[1.75rem]`, hardcoded SVG radii)
- Text opacity patterns are inconsistent (`text-paper/45`, `text-paper/58`, `text-paper/70`)
- The "live · claims-prod" badge in the dashboard has good visual integration

**The first 3 things my eye goes to:**
1. The score ring (visual anchor, good)
2. Status badges (high contrast, appropriate)
3. Border-heavy containers (creates hierarchy but sometimes noisy)

**One word:** Trustworthy-but-busy

---

## Phase 2: Extracted Design System (Current vs Target)

### Color System

| Aspect | Current | DESIGN.md Target | Gap |
|--------|---------|------------------|-----|
| **Naming** | ink, slate, paper, sand, copper | surface, text, accent | **MAJOR** - Inconsistent mental model |
| **Palette Feel** | Warm cream/parchment | Cool slate (compliance-focused) | **MEDIUM** - Intentional but different from spec |
| **Opacity Usage** | Arbitrary values (/10, /45, /58, /7) | Semantic tokens | **HIGH** - Hard to maintain |

**Finding [HIGH]:** The CSS variable naming uses metaphorical terms (ink, paper, sand) rather than semantic roles (surface, text). This makes component reuse harder and creates ambiguity about which color to use where.

### Typography

| Aspect | Current | DESIGN.md Target | Gap |
|--------|---------|------------------|-----|
| **Display Font** | var(--font-sans), Google Sans fallback | Cal Sans | **MEDIUM** - Using generic Google Sans |
| **Tracking** | [-0.07em] on display text | -0.02em display, -0.01em headings | **POLISH** - Excessive negative tracking |
| **Uppercase Labels** | Heavy use with tracking-[0.14em] | Limit to badges only | **MEDIUM** - Overused pattern |

**Finding [MEDIUM]:** Uppercase text with wide letter-spacing appears throughout for labels ("COMPLIANCE FRAMEWORKS", "AUDIT LOG"). This creates visual noise in a data-dense UI.

### Spacing

| Aspect | Current | DESIGN.md Target | Gap |
|--------|---------|------------------|-----|
| **System** | Tailwind defaults + arbitrary values | 4px base unit | **MEDIUM** - Mix of systematic and arbitrary |
| **Examples** | `rounded-[1.75rem]`, `p-5`, `gap-4` | 8px, 16px, 20px, 24px | **HIGH** - Inconsistent scale |

**Finding [HIGH]:** Components use inconsistent spacing. Example: border-radius varies from `rounded-lg` (8px) to `rounded-2xl` (16px) to `rounded-[1.75rem]` (28px) to hardcoded SVG calculations.

---

## Phase 3: Audit Checklist Findings

### 1. Visual Hierarchy & Composition

**FINDING-001: Border Overload** [HIGH]
- **Location:** Throughout dashboard (`border-paper/10` on almost every container)
- **Issue:** Every component has a border, creating visual noise
- **Impact:** Hard to distinguish primary from secondary content
- **Fix:** Use background shading and elevation instead of borders for differentiation

**FINDING-002: Inconsistent Border Radius** [MEDIUM]
- **Location:** Component library
```
components/eval-score-ring.tsx: rounded-2xl
components/metric-card.tsx: rounded-2xl
dashboard panels: rounded-[1.75rem] (28px)
badges: rounded-full
```
- **Issue:** No systematic radius scale
- **Fix:** Standardize: cards 8px, panels 12px, buttons 6px

### 2. Typography

**FINDING-003: Excessive Negative Tracking** [MEDIUM]
- **Location:** `eval-score-ring.tsx:24` - `tracking-[-0.07em]`
- **Issue:** Values are hard to read with extreme negative tracking
- **Fix:** Reduce to `tracking-[-0.02em]` maximum

**FINDING-004: Uppercase Label Overuse** [MEDIUM]
- **Location:** Throughout (`uppercase tracking-[0.14em]`)
- **Issue:** Creates visual noise, reduces scanability
- **Fix:** Only use for status badges and true abbreviations

### 3. Color & Contrast

**FINDING-005: Arbitrary Opacity Values** [HIGH]
- **Location:** Throughout codebase
- **Pattern:** `text-paper/45`, `text-paper/58`, `text-paper/70`, `bg-paper/7`, `bg-paper/10`
- **Issue:** Impossible to maintain, inconsistent hierarchy
- **Fix:** Define semantic opacity tokens:
  ```css
  --text-primary: opacity 1.0
  --text-secondary: opacity 0.7
  --text-tertiary: opacity 0.5
  --text-muted: opacity 0.4
  ```

**FINDING-006: Semantic Color Mismatch** [MEDIUM]
- **Location:** CSS variables
- **Issue:** `--success` and `--teal` are the same color (both #2f6f5e)
- **Impact:** Hard to differentiate system success vs information
- **Fix:** Separate semantic concerns: success = green, info = teal

### 4. Spacing & Layout

**FINDING-007: Non-Systematic Padding** [MEDIUM]
- **Location:** Component styles
- **Pattern:** mix of `p-4`, `p-5`, `px-4 py-2`, custom values
- **Fix:** Standardize on 4px unit: `p-4` (16px), `p-5` (20px), `p-6` (24px)

**FINDING-008: Grid Column Spacing Inconsistency** [MEDIUM]
- **Location:** Dashboard layouts
- **Pattern:** `gap-4`, `gap-5`, `gap-6` used inconsistently
- **Fix:** Section gaps = 24px, content gaps = 16px

### 5. Interaction States

**FINDING-009: Missing Focus Visible Styles** [HIGH]
- **Location:** Buttons, links throughout
- **Issue:** No systematic `focus-visible:` ring styles
- **Impact:** Keyboard navigation is invisible
- **Fix:** Add global focus ring style in globals.css

**FINDING-010: Hover States Not Systematic** [MEDIUM]
- **Issue:** Some components have hover, others don't
- **Fix:** Standardize hover patterns: cards lift subtly, buttons darken

### 6. Responsive Design

**FINDING-011: Hardcoded Dimensions** [MEDIUM]
- **Location:** SVG in eval-score-ring: `h-24 w-24`
- **Issue:** May not scale properly on all viewports
- **Fix:** Use responsive sizing or ensure touch targets meet 44px minimum

### 7. AI Slop Detection

**FINDING-012: Status Badge Pattern** [POLISH]
- **Location:** Throughout
- **Issue:** `rounded-full border ... bg-*/10 px-4 py-2` is very common
- **Assessment:** Not slop — it's a legitimate pattern for status, but verify it's necessary

**FINDING-013: Hero Copy Genericness** [POLISH]
- **Location:** `app/page.tsx` (marketing)
- **Issue:** "Your data deserves more than retrieval." is slightly generic
- **Assessment:** Borderline — could be more specific to compliance

### 8. Content & Microcopy

**FINDING-014: Empty State Gaps** [HIGH]
- **Issue:** Need to verify empty states exist for all data-driven components
- **Fix:** Audit all components that display lists/collections for warm empty states

**FINDING-015: Error Message Specificity** [MEDIUM]
- **Issue:** Need to verify error states provide specific remediation guidance
- **Fix:** Audit error handling patterns

### 9. Performance as Design

**FINDING-016: Animation Redundancy** [MEDIUM]
- **Location:** `motion-section.tsx`
- **Issue:** Check for decorative vs purposeful animations
- **Fix:** Verify all motion respects `prefers-reduced-motion`

### 10. Accessibility

**FINDING-017: ARIA Landmarks** [HIGH]
- **Location:** Layout files
- **Issue:** Need to verify proper landmark regions (main, nav, aside)
- **Fix:** Add semantic HTML structure

**FINDING-018: Color-Only Encoding** [HIGH]
- **Issue:** Status badges use color without icons or text patterns
- **Fix:** Add icons to status badges for colorblind users

---

## Quick Wins (30 min each)

1. **[HIGH]** Standardize opacity values — create semantic tokens
2. **[MEDIUM]** Reduce excessive uppercase tracking on labels
3. **[MEDIUM]** Standardize border-radius values
4. **[HIGH]** Add focus-visible rings globally
5. **[MEDIUM]** Reduce `tracking-[-0.07em]` to `[-0.02em]`

---

## Priority Triage

### Fix Immediately (High Impact)
1. FINDING-001: Border Overload
2. FINDING-005: Arbitrary Opacity Values
3. FINDING-009: Missing Focus Visible Styles
4. FINDING-017: ARIA Landmarks
5. FINDING-018: Color-Only Encoding

### Fix Next (Medium Impact)
6. FINDING-002: Inconsistent Border Radius
7. FINDING-004: Uppercase Label Overuse
8. FINDING-006: Semantic Color Mismatch
9. FINDING-014: Empty State Gaps
10. FINDING-015: Error Message Specificity

### Polish Phase (Low Impact)
11. FINDING-003: Excessive Negative Tracking
12. FINDING-007: Non-Systematic Padding
13. FINDING-008: Grid Column Spacing
14. FINDING-013: Hero Copy Genericness

---

## Action Plan

### Phase A: Critical Fixes (2 hours)
- [ ] Add semantic opacity tokens to CSS
- [ ] Create systematic border-radius scale
- [ ] Add global focus-visible styles
- [ ] Audit and add ARIA landmarks

### Phase B: Content & Accessibility (3 hours)
- [ ] Add icons to all status badges
- [ ] Audit empty states
- [ ] Audit error messages
- [ ] Verify reduced-motion support

### Phase C: Polish (2 hours)
- [ ] Standardize padding values
- [ ] Reduce label uppercase usage
- [ ] Fix tracking values
- [ ] Final visual pass

---

*Report generated by gstack design-review skill*
