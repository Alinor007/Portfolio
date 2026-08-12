"use client"

import { Toaster as Sonner, type ToasterProps } from "sonner"

/* The site is dark-only by design, so the theme is fixed rather than read
   from next-themes — there was never a ThemeProvider mounted to read from.
   Colours point at the okir tokens defined in globals.css. */
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--color-surface)",
          "--normal-text": "var(--color-ink)",
          "--normal-border": "var(--color-brass-deep)",
          "--success-bg": "var(--color-surface)",
          "--success-text": "var(--color-ink)",
          "--success-border": "var(--color-brass-dim)",
          "--error-bg": "var(--color-surface)",
          "--error-text": "var(--color-ink)",
          "--error-border": "var(--color-destructive)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
