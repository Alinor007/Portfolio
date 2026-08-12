import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Chrome only. The previous version imported every section page and
 * rendered them inline while never rendering `children`, which made
 * /about, /projects and /contact serve duplicate copies of the homepage.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:border focus:border-brass focus:bg-ground focus:px-5 focus:py-3 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:text-brass"
      >
        Skip to content
      </a>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
