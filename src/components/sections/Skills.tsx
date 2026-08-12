"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";
import { inView, rise, stagger, still } from "@/lib/motion";

/**
 * A typographic matrix rather than a logo strip. The PNGs sitting in
 * public/logos/ carry baked-in white backgrounds and would read as
 * bright rectangles punched through the ink ground.
 *
 * The grid is drawn with a 1px gap over a brass background, so the
 * dividing lines are the gaps themselves — a carved lattice rather than
 * a stack of bordered cards.
 */
export default function Skills() {
  const reduced = useReducedMotion();
  const v = reduced ? still : rise;

  return (
    <section
      id="skills"
      className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[88rem]">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              What I work <span className="italic text-brass">with.</span>
            </>
          }
          standfirst="Picked up as each project demanded it — hardware when something needed sensors, Python when it needed a model, and a good deal of React in between."
        />

        <motion.div
          variants={reduced ? undefined : stagger}
          {...inView}
          className="mt-16 grid grid-cols-1 gap-px border border-brass-deep bg-brass-deep sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              variants={v}
              className="group relative bg-ground p-8 transition-colors duration-500 hover:bg-surface lg:p-10"
            >
              {/* index */}
              <span className="font-mono text-[0.625rem] tracking-[0.28em] text-brass-dim">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 font-display text-2xl text-brass">
                {group.label}
              </h3>

              <ul className="mt-6 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 text-[0.9375rem] text-ink-muted transition-colors duration-500 group-hover:text-ink"
                  >
                    {/* squared matilak bullet */}
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-jade-text"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
