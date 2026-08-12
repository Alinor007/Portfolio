import { cn } from "@/lib/utils";

/**
 * A horizontal divider in the spirit of *pako rabong* — the growing-fern
 * scroll of Maranao okir carving. Original linework, not traced from any
 * existing piece.
 *
 * Built as three parts rather than one stretched SVG so the flourishes
 * keep their proportions at any width while the rules flex to fill.
 */

function Flourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 32"
      className={cn("h-8 w-16 shrink-0 overflow-visible", className)}
      fill="none"
      aria-hidden="true"
    >
      {/* main frond: rises, arcs over, curls back into itself */}
      <path
        d="M0 16C12 16 18 16 24 12C32 7 44 8 48 15C52 22 46 28 40 25C35 22.5 36 17 41 16.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* secondary tendril sprouting from the shoulder */}
      <path
        d="M24 12C26.5 6.5 22.5 2 16.5 3.8"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* the eye of the spiral */}
      <circle cx="41.6" cy="16.6" r="1.35" fill="currentColor" />
    </svg>
  );
}

/** A small rotated square — *matilak*, the circle/centre motif, squared off. */
function Node() {
  return (
    <span className="relative flex h-2 w-2 shrink-0 rotate-45 items-center justify-center border border-brass-dim">
      <span className="h-[2px] w-[2px] bg-brass" />
    </span>
  );
}

export default function OkirRule({
  className,
  tone = "brass",
}: {
  className?: string;
  tone?: "brass" | "dim";
}) {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-3",
        tone === "brass" ? "text-brass-dim" : "text-brass-deep",
        className,
      )}
      role="presentation"
    >
      <Flourish className="-scale-x-100" />
      <span className="hairline flex-1" />
      <Node />
      <span className="hairline flex-1" />
      <Flourish />
    </div>
  );
}
