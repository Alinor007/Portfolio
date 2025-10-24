import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/page";
import MobileNavbar from "@/components/MobileNavbar/page";
import { Circle } from "lucide-react";
import Image from "next/image";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({children,}:{ children: React.ReactNode;})
 {
  return (
   <main className="h-full">
    <header className="py-7  text-amber-300 flex items-center ">
      <div className="container mx-auto flex justify-between items-center ">
          
          <Image 
            src="/asset/Logo.png" 
            alt="profile" 
            width={100} 
            height={100}
            className=' '/>
        <Navbar/>
      </div>
        <MobileNavbar/>
       
    </header>
 
    {children}
    
   </main>
  );
}
