# Kosha Repository - Frontend UI Design Audit Report

**Date:** May 10, 2026  
**Branch:** card-alignment-fixes  
**Scope:** Next.js + React + Tailwind CSS Application

---

## Executive Summary

This audit identifies **CRITICAL** and **HIGH** priority inconsistencies in the Kosha design system that affect visual cohesion, user experience, and maintainability. The codebase shows good foundational architecture but suffers from design token fragmentation, inconsistent border-radius patterns, hardcoded values, and missing state definitions.

---

## 1. VISUAL DESIGN SYSTEM ISSUES

### 1.1 Border Radius Inconsistencies - CRITICAL

**Issue:** Arbitrary border-radius values throughout the codebase create visual fragmentation.

**Found Values:**
- `rounded-2xl` (1rem = 16px) - in globals.css surface-row
- `rounded-[1.1rem]` (17.6px) - landing-product-preview.tsx:208
- `rounded-[1.15rem]` (18.4px) - landing-product-preview.tsx:160
- `rounded-[1.25rem]` (20px) - landing-product-preview.tsx:233
- `rounded-[1.35rem]` (21.6px) - landing-product-preview.tsx:330
- `rounded-[1.4rem]` (22.4px) - marketing-shell.tsx:34
- `rounded-[1.5rem]` (24px) - globals.css surface-secondary
- `rounded-[1.75rem]` (28px) - Most common, but arbitrary
- `rounded-[2rem]` (32px) - globals.css surface-primary
- `rounded-[2.25rem]` (36px) - page.tsx:155
- `rounded-full` (9999px) - Buttons, badges

**Recommendation:** Standardize to a 4-step border-radius scale:
- Small: `rounded-xl` (12px) - buttons, inputs, badges
- Medium: `rounded-2xl` (16px) - cards, panels
- Large: `rounded-3xl` (24px) - sections, hero cards
- Full: `rounded-full` - circular elements, pills

---

### 1.2 Shadow System Inconsistencies - HIGH

**Issue:** Mixed shadow approaches (Tailwind classes vs. arbitrary CSS)

**Found Patterns:**
```
# tailwind.config.ts defines:
- shadow-ledger: 0 24px 70px rgba(21, 23, 26, 0.12)
- shadow-glow: 0 14px 38px rgba(39, 76, 119, 0.16)
- shadow-copper: 0 12px 30px rgba(184, 107, 61, 0.2)

# But also arbitrary shadows:
- shadow-[0_28px_80px_rgba(21,23,26,0.1)] (page.tsx:155)
- shadow-[0_18px_48px_rgba(0,0,0,0.18)] (landing-product-preview.tsx:300)
- shadow-[0_18px_60px_rgba(21,23,26,0.14)] (marketing-shell.tsx:34)
- shadow-sm (multiple components)
- Hardcoded box-shadow in CSS: box-shadow: 0 22px 60px rgba(7, 17, 31, 0.09) (globals.css:140)
```

**Impact:** Visual inconsistency, hard to maintain.

**Recommendation:** Extend tailwind.config shadows and eliminate arbitrary values.

---

### 1.3 Color Token Duality - HIGH

**Issue:** Both semantic tokens AND legacy tokens co-exist, causing confusion.

**Evidence - globals.css:11-44:**
```css
/* Semantic tokens */
--surface-primary: #f7f4ef;
--text-primary: #15171a;
--border-default: rgba(21, 23, 26, 0.12);
--accent-primary: #274c77;

/* Legacy tokens STILL IN USE */
--ink: #15171a;
--paper: #f7f4ef;
--line: #d8d2c8;
--blue: #274c77;
```

---

### 1.4 Opacity Scale Fragmentation - MEDIUM

**Issue:** Text opacity values vary throughout codebase.

**Found:**
- `text-ink/62` (login/page.tsx:19)
- `text-ink/68` (signup/page.tsx:12)
- `text-ink/70` (use-cases/page.tsx:21)
- `text-paper/45`, `text-paper/55`, `text-paper/58` (multiple)

**Recommendation:** Standardize to 4-level opacity scale:
- Primary: 100% (--text-primary)
- Secondary: 65% (--text-secondary)
- Tertiary: 45% (--text-tertiary)
- Muted: 35%

---

## 2. LAYOUT & ALIGNMENT ISSUES

### 2.1 Card Alignment Grid Inconsistency - CRITICAL

**Issue:** Different grid approaches across pages cause misalignment.

**Evidence:**
```typescript
// pricing/page.tsx:16 - 4 columns on lg
<MotionSection className="mt-12 grid gap-4 lg:grid-cols-4">

// app/page.tsx:16 - 4 columns on xl
<section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

// use-cases/page.tsx:21 - 3 columns
<MotionSection className="mt-12 grid gap-4 lg:grid-cols-3">
```

**Issue:** Breakpoints don't align (md vs xl).

---

### 2.2 Spacing Token Inconsistency - HIGH

**Issue:** Hardcoded padding values vs Tailwind spacing scale.

**Found:**
- `p-4` (16px) - most cards
- `p-5` (20px) - many cards
- `p-6` (24px) - settings page

**Recommendation:** Standardize card padding:
- Compact cards: `p-4`
- Standard cards: `p-5`
- Featured cards: `p-6`

---

## 3. COMPONENT DESIGN PATTERNS

### 3.1 PricingCard - Button Misalignment - CRITICAL

**File:** `/home/ubuntu/kosha/components/pricing-card.tsx:37`

**Issue:** Button uses `translate-y-4` which breaks card boundary.

```typescript
<ButtonLink ... className="mt-auto w-full translate-y-4">
```

**Before:** Button extends 16px below card edge
**After:** Button contained within card padding

**Fix:** Remove `translate-y-4`, increase card bottom padding.

---

### 3.2 PricingCard Padding Inconsistency - HIGH

**File:** `/home/ubuntu/kosha/components/pricing-card.tsx:15`

**Issue:** `p-5` (20px) creates inconsistent spacing with other cards.

**Recommendation:** Change to `p-6` to match card padding standard.

---

### 3.3 EvalScoreRing - Hardcoded Color - MEDIUM

**File:** `/home/ubuntu/kosha/components/eval-score-ring.tsx:20`

**Issue:** Stroke color hardcoded as `#1E9E8F` instead of using color token.

```typescript
stroke="#1E9E8F"
```

**Should be:** `stroke="var(--accent-success)"` or `stroke="currentColor"`

---

## 4. COMPONENT STRUCTURE ISSUES

### 4.1 Loading State Pattern Missing - CRITICAL

**Issue:** No standardized loading skeleton pattern.

**Affected Components:**
- DocumentIngestionCard - has animation, but no loading skeleton
- PipelineStatusBoard - has progress animation
- AuditEventRow - could show loading rows

**Recommendation:** Create generic `Skeleton` component and apply consistently.

---

### 4.2 Error State Pattern Missing - HIGH

**Issue:** Components lack error state handling.

**Recommendation:** Create ErrorBoundary component and ErrorCard component.

---

### 4.3 Empty State Pattern - MEDIUM

**Issue:** Collections table, audit logs, etc. have no empty state.

**Recommendation:** Create EmptyState component with illustration + CTA.

---

## 5. ACCESSIBILITY FINDINGS

### 5.1 Focus Ring Inconsistency - HIGH

**File:** `/home/ubuntu/kosha/app/globals.css:96-107`

**Issue:** Different focus styles in dark/light themes.

### 5.2 ARIA Labels - MEDIUM

**Evidence:** Some interactive elements lack aria-labels while others have comprehensive labeling.

---

## 6. TYPOGRAPHY ISSUES

### 6.1 Letter Spacing Inconsistency - MEDIUM

**Found values:**
- `tracking-[-0.035em]`
- `tracking-[-0.04em]`
- `tracking-[-0.05em]`
- `tracking-[-0.06em]`
- `tracking-[-0.07em]`
- `tracking-[-0.12em]`

### 6.2 Headings Hierarchy - MEDIUM

**Issue:** Mixed heading levels without clear scale.

---

## 7. RECOMMENDATIONS SUMMARY

### Immediate Actions (CRITICAL):
1. **Fix PricingCard button alignment** - remove translate-y-4
2. **Standardize border-radius** to 4 values
3. **Add loading skeletons** to data-heavy components

### Short Term (HIGH):
4. Consolidate shadow system in Tailwind config
5. Standardize color tokens (migrate to semantic)
6. Fix grid breakpoints consistency
7. Add ErrorBoundary and ErrorCard components

### Medium Term (MEDIUM):
8. Standardize opacity scale
9. Create empty state patterns
10. Standardize spacing values

---

## FILES REQUIRING IMMEDIATE ATTENTION

| File | Issue | Priority |
|------|-------|----------|
| pricing-card.tsx | Button translate-y-4 | CRITICAL |
| globals.css | Border-radius/shadow definitions | CRITICAL |
| tailwind.config.ts | Shadow token consolidation | HIGH |
| query-playground.tsx | Complex responsive grid | HIGH |
| eval-score-ring.tsx | Hardcoded color value | HIGH |
| metric-card.tsx | Missing error states | MEDIUM |
| marketing-shell.tsx | Dropdown border-radius | MEDIUM |

generated by Design Audit Subagent
