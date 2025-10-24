import { Button } from '@/components/ui/button'
import Social from '../../../Social/Social'
import Image from 'next/image'
import React from 'react'
import { Circle } from 'lucide-react'

const Home = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Decorative background circle */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container relative mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Greeting */}
          <div className="space-y-3 animate-fade-in">
            <h2 className="text-xl md:text-3xl font-medium text-primary/90 tracking-wide">
              Hello 👋
            </h2>
            <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text text-transparent capitalize">
              This is Yunx
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            We bring ideas to life through <span className="text-primary font-semibold">clean code</span> and <span className="text-primary font-semibold">beautiful design</span>.
          </p>

          {/* Social + Button */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in [animation-delay:400ms]">
            <Social
              containerStyle="flex gap-6"
              IconStyle="h-10 w-10 border border-primary/50 rounded-full flex justify-center items-center hover:bg-primary/10 hover:scale-105 transition-all"
            />
            <Button
              variant="default"
              size="lg"
              className="px-10 text-lg font-semibold hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
