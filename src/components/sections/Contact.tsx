"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Social from "@/components/Social";
import { profile } from "@/data/profile";
import { inView, rise, stagger, still } from "@/lib/motion";

export default function Contact() {
  const reduced = useReducedMotion();
  const v = reduced ? still : rise;

  const details = [
    { icon: Mail, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, value: profile.phone, href: `tel:${profile.phoneHref}` },
    { icon: MapPin, value: profile.location, href: undefined },
  ];

  return (
    <section
      id="contact"
      className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[88rem] gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Invitation */}
        <motion.div
          variants={reduced ? undefined : stagger}
          {...inView}
          className="lg:col-span-5"
        >
          <motion.p variants={v} className="eyebrow">
            Get in touch
          </motion.p>

          <motion.h2
            variants={v}
            className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] text-ink"
          >
            Let&apos;s make
            <br />
            <span className="italic text-brass">something.</span>
          </motion.h2>

          <motion.p
            variants={v}
            className="mt-6 max-w-[46ch] leading-[1.75] text-ink-muted"
          >
            Open to roles, freelance work, and collaborations — especially
            anything building for Mindanao. I read everything that comes
            through.
          </motion.p>

          <motion.ul variants={v} className="mt-12 space-y-5">
            {details.map(({ icon: Icon, value, href }) => (
              <li key={value} className="flex items-center gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-brass-deep text-brass">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                {href ? (
                  <a href={href} className="link-carve text-[0.9375rem]">
                    {value}
                  </a>
                ) : (
                  <span className="text-[0.9375rem] text-ink-muted">{value}</span>
                )}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={v} className="mt-12">
            <Social />
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={reduced ? undefined : rise}
          {...inView}
          className="lg:col-span-7"
        >
          <div className="border border-brass-deep bg-surface/60 p-8 backdrop-blur-sm sm:p-12">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
