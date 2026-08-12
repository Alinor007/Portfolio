import type { Metadata, Viewport } from "next";
import { Fraunces, Karla, Spline_Sans_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import CarvedGround from "@/components/ornament/CarvedGround";
import { profile, siteUrl } from "@/data/profile";
import "./globals.css";

/* Display. The WONK and SOFT axes give Fraunces a flowing, slightly
   organic quality that echoes okir's curvilinear line. */
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-spline-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.metaDescription,
  keywords: [
    "Alinor Abdulgafor",
    "software developer",
    "Marawi City",
    "Philippines",
    "React",
    "Next.js",
    "full-stack developer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description: profile.metaDescription,
    siteName: `${profile.name} · Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0d0b",
  colorScheme: "dark",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${karla.variable} ${splineMono.variable}`}
    >
      <body className="antialiased">
        <CarvedGround />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            classNames: {
              toast:
                "!bg-surface !border-brass-deep !text-ink !rounded-sm !font-sans",
              description: "!text-ink-muted",
            },
          }}
        />
      </body>
    </html>
  );
}
