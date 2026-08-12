"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { inView, rise, stagger, still } from "@/lib/motion";

/**
 * The shared masthead for every section: mono eyebrow, display title,
 * optional standfirst. Keeping it in one place is what makes the page
 * read as a single document rather than six stacked pages.
 */
export default function SectionHeading({
  eyebrow,
  title,
  standfirst,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  standfirst?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const reduced = useReducedMotion();
  const v = reduced ? still : rise;

  return (
    <motion.div
      variants={reduced ? undefined : stagger}
      {...inView}
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <motion.p variants={v} className="eyebrow">
        {eyebrow}
      </motion.p>

      <motion.h2
        variants={v}
        className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[0.95] text-ink"
      >
        {title}
      </motion.h2>

      {standfirst && (
        <motion.p
          variants={v}
          className={cn(
            "mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-muted",
            align === "center" && "mx-auto",
          )}
        >
          {standfirst}
        </motion.p>
      )}
    </motion.div>
  );
}
