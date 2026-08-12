"use client";

import { motion, useReducedMotion } from "framer-motion";
import OkirFrame from "@/components/ornament/OkirFrame";
import { profile } from "@/data/profile";
import { inView, rise, stagger, still } from "@/lib/motion";

export default function About() {
  const reduced = useReducedMotion();
  const v = reduced ? still : rise;

  return (
    <section
      id="about"
      className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[88rem] gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Portrait */}
        <motion.div
          variants={reduced ? undefined : rise}
          {...inView}
          className="lg:col-span-5"
        >
          <OkirFrame
            src="/asset/Profile.png"
            alt={`${profile.name}, ${profile.role}`}
            className="mx-auto w-full max-w-sm lg:sticky lg:top-32 lg:max-w-none"
          />
        </motion.div>

        {/* Copy */}
        <motion.div
          variants={reduced ? undefined : stagger}
          {...inView}
          className="lg:col-span-7"
        >
          <motion.p variants={v} className="eyebrow">
            About
          </motion.p>

          <motion.h2
            variants={v}
            className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] text-ink"
          >
            Building close
            <br />
            to <span className="italic text-brass">home.</span>
          </motion.h2>

          <div className="mt-10 space-y-6">
            {profile.bio.map((paragraph) => (
              <motion.p
                key={paragraph.slice(0, 24)}
                variants={v}
                className="max-w-[58ch] text-[1.0625rem] leading-[1.75] text-ink-muted"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Facts — mono labels against a hairline grid */}
          <motion.dl
            variants={v}
            className="mt-14 grid grid-cols-1 gap-px border-y border-brass-deep bg-brass-deep sm:grid-cols-2"
          >
            {profile.facts.map((fact) => (
              <div key={fact.label} className="bg-ground px-1 py-5 sm:px-6">
                <dt className="font-mono text-[0.625rem] uppercase tracking-[0.28em] text-brass">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-[0.9375rem] text-ink">{fact.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
