/**
 * The atmosphere the whole site sits on: a warm ink ground, two slow
 * accent blooms, an okir lattice, and film grain over the top.
 *
 * All of it is vector and CSS — it replaces the 2.76 MB stock photo the
 * hero used to load, at effectively zero bytes.
 */
export default function CarvedGround() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Vertical lift through the middle of the page */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0f0d0b_0%,#141110_45%,#0f0d0b_100%)]" />

      {/* Brass bloom, upper right */}
      <div className="animate-bloom absolute -right-[15%] -top-[20%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(200,151,63,0.16)_0%,rgba(200,151,63,0.05)_38%,transparent_68%)] blur-[70px]" />

      {/* Jade bloom, lower left — quieter, longer cycle */}
      <div className="animate-bloom absolute -bottom-[25%] -left-[18%] h-[65vh] w-[65vh] rounded-full bg-[radial-gradient(circle,rgba(47,111,98,0.15)_0%,rgba(47,111,98,0.04)_40%,transparent_70%)] blur-[80px] [animation-delay:-7s]" />

      {/* Okir lattice — an interlocking ogee derived from the scroll motif */}
      <svg className="absolute inset-0 h-full w-full text-brass" aria-hidden="true">
        <defs>
          <pattern
            id="okir-lattice"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            >
              <path d="M0 80C44 80 80 44 80 0" />
              <path d="M80 160C80 116 116 80 160 80" />
              <path d="M0 80C44 80 80 116 80 160" />
              <path d="M80 0C80 44 116 80 160 80" />
            </g>
            <circle cx="80" cy="80" r="1.6" fill="currentColor" />
          </pattern>
          {/* Fades the lattice out toward the centre so it never
              competes with body copy */}
          <radialGradient id="okir-falloff" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="55%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </radialGradient>
          <mask id="okir-mask">
            <rect width="100%" height="100%" fill="url(#okir-falloff)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#okir-lattice)"
          mask="url(#okir-mask)"
          opacity="0.05"
        />
      </svg>

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.055] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(6,5,4,0.55)_100%)]" />
    </div>
  );
}
