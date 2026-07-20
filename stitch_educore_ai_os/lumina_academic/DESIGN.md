---
name: Lumina Academic
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001a42'
  on-tertiary-container: '#3980f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered to represent an "AI Operating System" for the African educational landscape. The brand personality is rooted in **Stability, Modernity, and Growth**. It bridges the gap between high-end enterprise SaaS and accessible educational tools.

The visual style is **Corporate / Modern**, leaning heavily on the "EduTech" aesthetic:
- **Professionalism:** Utilizing a structured grid and a deep blue palette to evoke trust among administrators and government bodies.
- **Innovation:** Incorporating vibrant green accents to signify the transformative power of AI and digital growth.
- **Clarity:** A "Shadcn-inspired" approach that prioritizes high readability, ample whitespace, and functional minimalism to ensure the UI remains unobtrusive in a busy school environment.

## Colors

The color strategy centers on a high-contrast foundation for maximum legibility and authority.

- **Primary (Deep Slate Blue):** Used for navigation, headings, and core brand elements. It provides the "Enterprise" weight required for an operating system.
- **Secondary (Emerald Green):** Represents "AI activation," success states, and growth metrics. It is the primary action color for positive reinforcement.
- **Tertiary (Electric Blue):** Reserved for secondary actions, links, and information highlights.
- **Neutral (Slate Grays):** A refined scale of grays (`#F8FAFC` to `#1E293B`) handles the UI's structural elements, borders, and background layering.

## Typography

This design system utilizes **Inter** for its primary communication due to its exceptional legibility in data-heavy SaaS environments. To add a subtle "Operating System" feel, **Geist** is introduced for labels, data points, and technical UI elements, providing a precise, mono-influenced aesthetic where clarity is paramount.

Headings should use tighter letter spacing to maintain a compact, professional look. Body text is optimized for long-form reading (curriculum details, reports) with generous line heights.

## Layout & Spacing

The design system employs a **Fluid-to-Fixed grid** model. 
- **Desktop:** A 12-column grid with a maximum content width of 1440px. Gutters are fixed at 24px to ensure breathing room between data modules.
- **Tablet:** An 8-column grid with 24px margins.
- **Mobile:** A 4-column fluid grid with 16px margins.

The spacing rhythm is based on a 4px baseline. Components should primarily use `stack-md` (16px) for internal padding to maintain the clean, airy "EduTech" feel.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Low-Contrast Outlines**, avoiding heavy shadows to keep the interface fast and modern.

1.  **Level 0 (Base):** The main background uses the lightest neutral (`#F8FAFC`).
2.  **Level 1 (Cards/Surface):** White surfaces (`#FFFFFF`) with a subtle 1px border (`#E2E8F0`).
3.  **Level 2 (Dropdowns/Modals):** White surfaces with a slightly more pronounced, diffused shadow (`0 10px 15px -3px rgb(0 0 0 / 0.1)`) to indicate focus.

Interactive elements use a soft, 2px "ring" on focus rather than traditional heavy glows, maintaining the technical precision of an OS.

## Shapes

The shape language is "Optimistically Geometric." While the user requested a 2xl feel, the base `roundedness` is set to **2** (0.5rem / 8px) to maintain professional density. However, specific container elements (Cards, Large Buttons) scale up to `rounded-2xl` (1rem / 16px) to create the soft, approachable feel characteristic of modern education tools. 

Inputs and smaller UI controls remain at the base roundedness to prevent the interface from appearing too juvenile.

## Components

- **Buttons:** Primary buttons use the Secondary Emerald color with white text. High-emphasis actions (Delete, Reset) use Primary Deep Slate. All buttons feature a 1px inner border for tactile definition.
- **Cards:** White backgrounds with `rounded-2xl` corners. Use a 1px Slate-200 border. No shadow is used for static cards; a subtle shadow appears on hover to indicate interactivity.
- **Input Fields:** Clean, minimal styling. Backgrounds are solid white with a Slate-200 border that transitions to Emerald-500 on focus.
- **Chips/Badges:** Small, `rounded-full` pills using low-opacity versions of the Primary or Secondary colors (e.g., Emerald-100 background with Emerald-800 text).
- **Data Tables:** Systematic and dense. Use horizontal dividers only (no vertical lines) with Geist Mono-style labels for headers to reinforce the "Operating System" aesthetic.
- **AI Modules:** Components specifically powered by AI should feature a subtle gradient border using the Secondary and Tertiary blues/greens to distinguish them from standard CRUD elements.