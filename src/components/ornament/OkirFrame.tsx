import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * An ogee-arch portrait frame — the pointed, S-curved arch found in
 * Maranao architecture — with a brass inlay edge and scroll corbels at
 * the springing.
 *
 * The arch is an SVG clip-path in objectBoundingBox units, so it scales
 * with the container. The brass edge is produced by nesting a second,
 * inset copy of the clip rather than by stroking (a stroke would
 * distort under the non-uniform scale).
 */

const ARCH_PATH =
  "M0 1 L0 0.5 C0 0.288 0.1375 0.1827 0.3 0.1154 C0.4125 0.0692 0.4875 0.0423 0.5 0 C0.5125 0.0423 0.5875 0.0692 0.7 0.1154 C0.8625 0.1827 1 0.288 1 0.5 L1 1 Z";

/** Scroll corbel that sits where the arch springs from its base. */
function Corbel({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 28"
      className={cn("h-7 w-10", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M40 2C28 2 18 6 12 14C8 19 10 25 16 25C21 25 23 20 19 17.5C16 15.6 13 17.5 13.5 20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="14.2" cy="20.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

export default function OkirFrame({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {/* clip-path definition */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="okir-arch" clipPathUnits="objectBoundingBox">
            <path d={ARCH_PATH} />
          </clipPath>
        </defs>
      </svg>

      {/* Brass halo behind the arch */}
      <div
        className="absolute -inset-6 bg-[radial-gradient(ellipse_at_50%_35%,rgba(200,151,63,0.22),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      {/* Inlay edge */}
      <div
        className="relative aspect-[400/520] w-full bg-[linear-gradient(160deg,#e3b75c_0%,#8a6b2e_35%,#4a3a1c_60%,#c8973f_100%)]"
        style={{ clipPath: "url(#okir-arch)" }}
      >
        {/* Portrait */}
        <div
          className="absolute inset-[2px] overflow-hidden bg-surface"
          style={{ clipPath: "url(#okir-arch)" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 80vw, 420px"
            className="object-cover object-top"
          />
          {/* Warm the photo into the palette and darken its foot so the
              facts list below stays legible against it */}
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(15,13,11,0.6)_100%)] mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Corbels at the arch base */}
      <div
        className="pointer-events-none absolute -bottom-1 left-0 right-0 flex justify-between text-brass-dim"
        aria-hidden="true"
      >
        <Corbel className="-scale-x-100" />
        <Corbel />
      </div>
    </div>
  );
}
