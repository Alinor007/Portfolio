"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, ImageOff } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import OkirRule from "@/components/ornament/OkirRule";
import { projects, type Project } from "@/data/projects";
import { inView, rise, stagger, still } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Brass brackets at the plate corners, in place of a full border. */
function Corners() {
  const base =
    "pointer-events-none absolute h-5 w-5 border-brass transition-all duration-700";
  return (
    <div aria-hidden="true">
      <span className={cn(base, "left-0 top-0 border-l border-t group-hover:h-8 group-hover:w-8")} />
      <span className={cn(base, "right-0 top-0 border-r border-t group-hover:h-8 group-hover:w-8")} />
      <span className={cn(base, "bottom-0 left-0 border-b border-l group-hover:h-8 group-hover:w-8")} />
      <span className={cn(base, "bottom-0 right-0 border-b border-r group-hover:h-8 group-hover:w-8")} />
    </div>
  );
}

/** Styled stand-in so a missing file degrades instead of showing a broken icon. */
function Plate({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group/plate relative aspect-[16/10] overflow-hidden bg-surface">
      {failed ? (
        <div className="flex h-full flex-col items-center justify-center gap-3 bg-[linear-gradient(140deg,#16130f,#1f1a14)] text-ink-faint">
          <ImageOff className="h-6 w-6" strokeWidth={1.25} />
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em]">
            Image unavailable
          </span>
        </div>
      ) : (
        <>
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            onError={() => setFailed(true)}
            className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          {/* Pulls the screenshot into the palette; lifts on hover. */}
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,13,11,0.25),rgba(15,13,11,0.7))] transition-opacity duration-700 group-hover:opacity-40"
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
}

function Row({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion();
  const v = reduced ? still : rise;
  const flipped = index % 2 === 1;
  const { live, repo } = project.links;

  return (
    <motion.article
      variants={reduced ? undefined : stagger}
      {...inView}
      className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
    >
      {/* Plate */}
      <motion.div
        variants={v}
        className={cn(
          "relative lg:col-span-7",
          flipped ? "lg:order-2" : "lg:order-1",
        )}
      >
        <div className="relative p-3">
          <Corners />
          <Plate project={project} />
        </div>
      </motion.div>

      {/* Entry */}
      <div
        className={cn(
          "lg:col-span-5",
          flipped ? "lg:order-1" : "lg:order-2",
        )}
      >
        <motion.div variants={v} className="flex items-center gap-4">
          <span className="font-mono text-5xl leading-none text-brass-deep transition-colors duration-700 group-hover:text-brass">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="hairline h-px flex-1" />
        </motion.div>

        <motion.h3
          variants={v}
          className="mt-6 font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.05] text-ink"
        >
          {project.title}
        </motion.h3>

        <motion.p
          variants={v}
          className="mt-5 max-w-[52ch] leading-[1.75] text-ink-muted"
        >
          {project.blurb}
        </motion.p>

        {project.tech && (
          <motion.ul variants={v} className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="border border-brass-deep px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-muted"
              >
                {t}
              </li>
            ))}
          </motion.ul>
        )}

        <motion.div variants={v} className="mt-9 flex flex-wrap gap-6">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="link-carve inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em]"
            >
              Live demo
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-carve inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em]"
            >
              <Code2 className="h-3.5 w-3.5" strokeWidth={2} />
              Source
            </a>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[88rem]">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Four things I <span className="italic text-brass">shipped.</span>
            </>
          }
          standfirst="A greenhouse that waters itself, a job board for Lanao, a herbarium catalogue, and a model that reads academic records."
        />

        <div className="mt-24 space-y-24 lg:space-y-32">
          {projects.map((project, i) => (
            <div key={project.title}>
              {i > 0 && <OkirRule tone="dim" className="mb-24 lg:mb-32" />}
              <Row project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
