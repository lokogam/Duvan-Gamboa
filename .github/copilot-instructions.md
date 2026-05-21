# Copilot Instructions - GSAP

Use GSAP as the default animation library in this repository.

## Required patterns
- Import from `src/lib/gsapSetup.js` when possible.
- Prefer `useGSAP` with `scope` in React components.
- Use `gsap.context()`/`useGSAP` cleanup behavior; do not leave active tweens on unmount.
- Register plugins once in `src/lib/gsapSetup.js`.

## Scroll animations
- Prefer `ScrollTrigger` for section reveal and scroll-linked effects.
- Use transform-based properties (`x`, `y`, `scale`, `rotation`) and `autoAlpha` for performance.
- Avoid layout-thrashing properties when an equivalent transform exists.

## Accessibility and UX
- Respect reduced motion: skip heavy animation when `prefers-reduced-motion: reduce` is active.
- Keep durations subtle for content sections (`0.35` to `0.7` seconds).

## Portfolio style guidance
- Hero: entrance timeline + subtle idle motion.
- Content sections: staggered reveal for headings and cards.
- Avoid excessive parallax and avoid blocking interactions with pinned sections unless explicitly requested.
