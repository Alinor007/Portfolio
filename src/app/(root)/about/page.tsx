"use client";

import Image from 'next/image'
import Social from '../../../../Social/Social'
import { Button } from '@/components/ui/button'
import { Download, MapPin } from 'lucide-react'

import "reactflow/dist/style.css";
import { motion } from "framer-motion";

const About = () => {

  // ---------------- Render ----------------
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
      id="about"
    >
         
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl animate-pulse" />

      {/* 🎯 Draggable Profile Container */}
      <motion.div
        drag
        dragConstraints={{ left: -300, right: 300, top: -200, bottom: 200 }}
        dragElastic={0.5}
        whileDrag={{ scale: 1.05, cursor: "grabbing" }}
        className="absolute z-20 cursor-grab"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-6xl mx-auto bg-background/60 backdrop-blur-lg border border-border/30 rounded-2xl p-8 shadow-xl">
          {/* Profile Image */}
          <div className="relative group mx-auto">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-lg hover:shadow-primary/30 transition-all duration-500">
              <Image
                src="/asset/Profile.png"
                alt="Profile"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-sm uppercase tracking-widest text-primary font-semibold">
              Software Developer
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Marawi City, Philippines</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 leading-tight">
              Alinor <span className="text-primary">Abdulgafor</span>
            </h1>

            <p className="text-lg text-muted-foreground mt-6 max-w-[550px] leading-relaxed">
              I'm a passionate developer and designer with a love for creating exceptional digital
              experiences. I specialize in bringing ideas to life through clean code, modern design,
              and intuitive user interfaces.
            </p>

            <p className="text-lg text-muted-foreground mt-4 max-w-[550px] leading-relaxed">
              With expertise in technologies like React, Firebase, and ASP.NET, I craft full-stack
              solutions that merge creativity and performance.
            </p>

            {/* Buttons & Social Links */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-5">
              <Social
                containerStyle="flex gap-5"
                IconStyle="h-10 w-10 border border-primary/60 rounded-full flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all"
              />

              <Button
                variant="default"
                size="lg"
                className="px-8 text-base font-semibold hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Hire Me
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="px-8 text-base font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
     
    </section>
  )
}

export default About;
