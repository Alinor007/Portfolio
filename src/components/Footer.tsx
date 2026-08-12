import { ArrowUp } from "lucide-react";
import Social from "@/components/Social";
import OkirRule from "@/components/ornament/OkirRule";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-8 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[88rem]">
        <OkirRule tone="dim" />

        <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg text-ink">{profile.name}</p>
            <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-ink-faint">
              © {new Date().getFullYear()} · {profile.location}
            </p>
          </div>

          <Social />

          <a
            href="#home"
            className="group inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-ink-muted transition-colors duration-500 hover:text-brass"
          >
            Back to top
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
