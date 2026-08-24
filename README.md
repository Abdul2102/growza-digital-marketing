# Digital Marketing Agency Landing Page — GROWZO

A production-quality, premium Digital Marketing Agency landing page built for local and small business owners to turn digital attention into measurable revenue. This project is optimized for performance, clean design system guidelines, accessibility, and fluid responsiveness as part of the **Day 1 — Frontend & UI/UX Technical Assessment**.

## Project Overview
GROWZO is a landing page built to demonstrate high-converting layout architecture, premium editorial typography, micro-interactions, and visual storytelling. Rather than pushing generic marketing packages, the page guides prospects through an audit-first methodology to identify and fix sales leaks.

* **Live Demo:** `https://growza-digital-marketing.vercel.app/`
* **GitHub Repository:** `https://github.com/Abdul2102/growza-digital-marketing.git`
* **Developer:** `Abdul kalam`

---

## Tech Stack
The project is built as a clean, component-based frontend application utilizing:
* **Core Framework:** React 19 & Vite 8
* **Styling Engine:** Tailwind CSS v4 (using CSS-first configuration and `@theme` parameters)
* **Animation Engine:** Framer Motion (for fluid, staggered reveals and micro-transitions)
* **Icon Set:** Lucide React (for interface glyphs) & React Icons/Fa6 (for branding/social links)

---

## Features
1. **Interactive Hero Visual:** A custom, fully designed dark-mode dashboard mockup showing active audit logs, radial marketing health score indicators, and leads charts.
2. **Sticky Navigation:** Transparent-to-blur header backdrop transition on scroll, with active section indicators and scroll-locking mobile menu drawer.
3. **Editorial Services Layout:** Replaces generic grids with an editorial, numbered list split-layout featuring arrows, custom benefits callouts, and clean overlay details.
4. **Why Choose Us Value Block:** Restructured from grid cards to a bold statement split-layout highlighting core philosophies (Audit, Budget, Results) with line dividers.
5. **Industries list-grid:** A space-efficient numbered list-grid mapping business sectors (Healthcare, retail, home services, etc.) with custom hover expansions.
6. **Alternating Case Studies (Metro Dental, Gourmet Bistro, Plumbers, Spa):** An asymmetric portfolio presentation featuring massive bold stats (e.g. `+64% Appointment Bookings`) highlighting campaign outcomes over generic card items.
7. **Pricing Range Slider:** Interactive slider for budget sizing, dynamically highlighting matching service layers.
8. **Free Manually Audited Assessment Form:** Client-side validated form asking for website, WhatsApp/phone, and business name. Includes custom response state screen.
9. **Accordion FAQ Grid:** Interactive collapsible queries for instant FAQ exploration.
10. **Dedicated final CTA banner:** High-impact Centered Navy callout block triggering smooth scrolling to the audit form.

---

## Responsive Design
* **Clamp-Based Sizing:** Integrated CSS-first variables like `text-clamp-hero` and `text-clamp-section` inside Tailwind `@theme` to ensure titles scale dynamically between 320px and 1920px.
* **Scroll QA:** Checked and verified container structures to guarantee **zero horizontal scrollbar overflows** on mobile devices.
* **Layout Adaptations:** Grids automatically wrap from 1-column stack on mobile to 2-columns on tablet and 3-columns/split-columns on desktop.

---

## Animations
* **Staggered Reveals:** Content elements fade and slide up sequentially using custom container variants.
* **Interactive Hover States:** Cards scale up by `102%`, borders shift opacity, icons enlarge, and layout arrows slide right.
* **Spring Physics:** Modals animate using spring-based exit and entrance indicators.

---

## Accessibility
* **Semantic HTML:** Structured using proper `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, and `<button>` tags.
* **Focus Indicator Visibility:** All interactive items have visible `:focus-visible` outline rings with offsets.
* **Form Integrity:** Explicit `htmlFor` tags connected to inputs with placeholder cues.

---

## Performance
* **Asset Pre-rendering:** SVGs are written directly in-code where applicable.
* **Lazy Loading:** Large images use native `loading="lazy"` tags to prevent blockages on initial layout loads.
* **Lightweight DOM:** Avoids bloated external libraries, maintaining a fast render cycle.

---

## Installation & Setup

1. **Clone the project:**
   ```bash
   git clone [your-repo-link]
   cd [your-repo-folder]
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Production Build:**
   ```bash
   npm run build
   ```
   Generates a optimized static build in the `/dist` directory.

---

## Future Improvements
* Add dark mode theme toggler using CSS variables.
* Incorporate real email routing using lightweight serverless API pathways.
* Integrate Lottie interactive animations inside the Process timeline indicators.

---

## AI Tools Used
* **Antigravity (Google DeepMind):** Used for layout auditing, refactoring components, implementing accessibility enhancements, and configuring clamp-based typographic scales.
