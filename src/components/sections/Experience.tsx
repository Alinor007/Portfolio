"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { timeline, experienceReady } from "@/data/experience";
import { inView, rise, stagger, still } from "@/lib/motion";

/**
 * Vertical timeline on a brass spine.
 *
 * Renders nothing until `experienceReady` is flipped in
 * src/data/experience.ts — the repo held no work history or education
 * data, and a placeholder timeline is worse than no timeline.
 */
export default function Experience() {
  const reduced = useReducedMotion();
  const v = reduced ? still : rise;

  if (!experienceReady) return null;

  return (
    <section
      id="experience"
      className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[88rem]">
        <SectionHeading
          eyebrow="The path"
          title={
            <>
              Where I&apos;ve <span className="italic text-brass">been.</span>
            </>
          }
        />

        <motion.ol
          variants={reduced ? undefined : stagger}
          {...inView}
          className="relative mt-20 max-w-3xl"
        >
          {/* the spine */}
          <span
            className="absolute bottom-2 left-[11px] top-2 w-px bg-[linear-gradient(180deg,transparent,var(--color-brass-deep)_8%,var(--color-brass-deep)_92%,transparent)]"
            aria-hidden="true"
          />

          {timeline.map((entry) => {
            const Icon = entry.kind === "work" ? Briefcase : GraduationCap;

            return (
              <motion.li
                key={`${entry.org}-${entry.title}`}
                variants={v}
                className="group relative pb-14 pl-12 last:pb-0"
              >
                {/* node */}
                <span
                  className="absolute left-0 top-1 flex h-[23px] w-[23px] rotate-45 items-center justify-center border border-brass-dim bg-ground transition-colors duration-500 group-hover:border-brass group-hover:bg-jade-deep"
                  aria-hidden="true"
                >
                  <Icon className="h-3 w-3 -rotate-45 text-brass" strokeWidth={1.75} />
                </span>

                <p className="font-mono text-[0.625rem] uppercase tracking-[0.28em] text-brass">
                  {entry.start} — {entry.end}
                </p>

                <h3 className="mt-3 font-display text-2xl leading-tight text-ink">
                  {entry.title}
                </h3>

                <p className="mt-1.5 text-[0.9375rem] text-jade-text">
                  {entry.org}
                  {entry.location && (
                    <span className="text-ink-faint"> · {entry.location}</span>
                  )}
                </p>

                {entry.detail && (
                  <p className="mt-4 max-w-[54ch] leading-[1.75] text-ink-muted">
                    {entry.detail}
                  </p>
                )}
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
