"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Social from "@/components/Social";
import OkirRule from "@/components/ornament/OkirRule";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";
import { experienceReady } from "@/data/experience";
import { cn } from "@/lib/utils";

export default function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* The Path section renders nothing until the timeline data is filled
     in, so its link would otherwise scroll nowhere. */
  const links = useMemo(
    () => navLinks.filter((l) => l.id !== "experience" || experienceReady),
    [],
  );

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  /* Scroll spy. IntersectionObserver rather than a scroll listener —
     no per-frame work, and it stays correct when sections resize. */
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [links]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-brass-deep bg-ground/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      {/* Reading progress */}
      <motion.div
        className="absolute inset-x-0 top-0 h-px origin-left bg-brass"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        {/* Mark */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label={`${profile.name} — back to top`}
        >
          <Image
            src="/asset/Logo.png"
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-full border border-brass-deep transition-colors duration-500 group-hover:border-brass"
          />
          <span className="font-display text-lg tracking-tight text-ink">
            {profile.firstName}
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={cn(
                    "relative py-1 font-mono text-[0.6875rem] uppercase tracking-[0.22em] transition-colors duration-500",
                    active === link.id
                      ? "text-brass"
                      : "text-ink-muted hover:text-ink",
                  )}
                >
                  {link.name}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 h-px w-full bg-brass"
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center border border-brass-deep text-brass transition-colors duration-500 hover:border-brass md:hidden"
          >
            <Menu className="h-4 w-4" strokeWidth={1.5} />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="border-l-brass-deep bg-ground p-0 [&>button]:text-brass"
          >
            <div className="flex h-full flex-col px-8 py-10">
              <SheetTitle className="font-display text-2xl font-normal text-ink">
                {profile.name}
              </SheetTitle>
              <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-brass">
                {profile.role}
              </p>

              <OkirRule className="mt-8" tone="dim" />

              <nav aria-label="Sections" className="mt-8 flex-1">
                <ul className="space-y-1">
                  {links.map((link, i) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-baseline gap-4 py-3 font-display text-3xl transition-colors duration-500",
                          active === link.id
                            ? "text-brass"
                            : "text-ink hover:text-brass",
                        )}
                      >
                        <span className="font-mono text-[0.625rem] tracking-[0.2em] text-brass-dim">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <Social className="mt-8" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
