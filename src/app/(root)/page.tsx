import { Button } from '@/components/ui/button'
import Social from '../../../Social/Social'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      <Image
        src="/asset/bgmoon.jpg"
        alt="background"
        fill
        priority
        className="object-cover object-center -z-10"
      />


      {/* Content */}
      <div className="container relative mx-auto px-6 md:px-12 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Greeting */}
          <div className="space-y-3 animate-fade-in">
            <h2 className="text-xl md:text-3xl font-medium text-primary/90 tracking-wide">
              Hello
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
