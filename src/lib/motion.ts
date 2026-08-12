import type { Variants } from "framer-motion";

/**
 * Shared motion vocabulary. Travel is deliberately small — the design
 * carries itself typographically, so motion is there to sequence
 * attention, not to perform.
 *
 * Every consumer pairs these with framer-motion's `useReducedMotion()`;
 * globals.css also collapses all durations under the same media query,
 * so reduced-motion users get an instant, static page rather than a
 * faster version of the same choreography.
 */

export const EASE_CARVE = [0.22, 1, 0.36, 1] as const;

/** Parent: releases children one after another. */
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/** Slower cadence for the hero, which has fewer, larger pieces. */
export const staggerSlow: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

export const rise: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_CARVE },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: EASE_CARVE } },
};

/** Used for the okir rules — they draw in from the centre outward. */
export const spread: Variants = {
  hidden: { opacity: 0, scaleX: 0.7 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1.1, ease: EASE_CARVE },
  },
};

/** Standard scroll-reveal props: fires once, a third of the way in. */
export const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.25 },
} as const;

/** Collapses any variant set to a no-op when reduced motion is on. */
export const still: Variants = {
  hidden: { opacity: 1, y: 0, scaleX: 1 },
  show: { opacity: 1, y: 0, scaleX: 1, transition: { duration: 0 } },
};
