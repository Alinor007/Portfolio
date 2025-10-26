import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/page";
import MobileNavbar from "@/components/MobileNavbar/page";
import Image from "next/image";
import Home from "./page";
import About from "./about/page";
import Project from "./projects/page";
import Contact from "./contact/page";
import Footer from "@/components/Footer/page";
import WorkflowBuilder from "@/components/WorkflowBuilder/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Alinor Abdulgafor | Portfolio",
  description: "Portfolio showcasing my work as a full-stack web developer.",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <main className="h-full scroll-smooth">
          <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
            <div className="flex items-center gap-3">
              <Image
                src="/asset/Logo.png"
                alt="Logo"
                width={70}
                height={70}
                className="rounded-full"
                priority
              />
              <span className="text-lg md:text-xl font-semibold text-primary tracking-wide">
                Alinor 
              </span>
            </div>
            <Navbar />
            <div className="md:hidden">
              <MobileNavbar />
            </div>
          </div>

        {/* Main Sections */}
       
          <Home />
          <About />
          <Project />
          <Contact />
          <WorkflowBuilder/>

        {/* Footer */}
        <Footer/>
    </main>
  );
}
