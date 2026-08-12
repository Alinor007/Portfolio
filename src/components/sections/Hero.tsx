"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import Social from "@/components/Social";
import OkirRule from "@/components/ornament/OkirRule";
import { profile } from "@/data/profile";
import { rise, spread, staggerSlow, still } from "@/lib/motion";

/**
 * Purely typographic. The portrait belongs to the About section — giving
 * each an distinct job keeps the page from opening on two photographs of
 * the same person.
 */
export default function Hero() {
  const reduced = useReducedMotion();
  const v = reduced ? still : rise;

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center px-6 pb-24 pt-28 sm:px-10 lg:px-16"
    >
      <motion.div
        variants={reduced ? undefined : staggerSlow}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-[88rem]"
      >
        <motion.p variants={v} className="eyebrow">
          {profile.role} · {profile.location}
        </motion.p>

        {/* The name, set as large as the viewport will carry. */}
        <h1 className="mt-8 font-display leading-[0.82] tracking-[-0.03em]">
          <motion.span
            variants={v}
            className="block text-[clamp(3.25rem,13vw,11.5rem)] text-ink"
          >
            Alinor
          </motion.span>
          <motion.span
            variants={v}
            className="mt-1 block text-[clamp(3.25rem,13vw,11.5rem)] text-transparent sm:mt-2"
            style={{
              WebkitTextStroke: "1.5px var(--color-brass)",
            }}
          >
            Abdulgafor
          </motion.span>
        </h1>

        <motion.div variants={reduced ? undefined : spread} className="mt-12">
          <OkirRule />
        </motion.div>

        {/* Statement left, actions right — asymmetric, weighted to the type. */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <motion.p
            variants={v}
            className="max-w-xl font-display text-2xl italic leading-[1.35] text-ink-muted sm:text-[1.75rem] lg:col-span-7"
          >
            {profile.statement}
          </motion.p>

          <motion.div
            variants={v}
            className="flex flex-col gap-8 lg:col-span-5 lg:items-end"
          >
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 border border-brass bg-brass px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-[#14100a] transition-colors duration-500 hover:bg-brass-bright"
              >
                See the work
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </a>

              {profile.resumeAvailable && (
                <a
                  href={profile.resumePath}
                  download
                  className="group inline-flex items-center gap-3 border border-brass-deep px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-ink transition-colors duration-500 hover:border-brass hover:text-brass"
                >
                  <FileDown className="h-4 w-4" strokeWidth={1.5} />
                  Résumé
                </a>
              )}
            </div>

            <Social />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        variants={v}
        initial="hidden"
        animate="show"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint transition-colors duration-500 hover:text-brass lg:flex"
      >
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
