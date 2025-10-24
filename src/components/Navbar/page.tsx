'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const navbarLinks = [
  { name: "home", route: "home" },
  { name: "about", route: "about" },
  { name: "projects", route: "projects" },
  { name: "contact", route: "contact" },
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('home')

  // ✅ Smooth scroll to section
  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  // ✅ Detect which section is in view (scrollspy effect)
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollY = window.scrollY
      const sections = navbarLinks.map((link) => document.getElementById(link.route))

      for (const section of sections) {
        if (!section) continue
        const { offsetTop, offsetHeight } = section
        if (scrollY >= offsetTop - 200 && scrollY < offsetTop + offsetHeight - 200) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScrollSpy)
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [])

  return (
     <nav className='fix flex justify-center items-center px-6  gap-4 py-6 lg:px-10 capitalize'>
     <div className="container mx-auto flex justify-center items-center gap-6 py-4">
        {navbarLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleScroll(link.route)}
            className={cn(
              "relative text-lg font-medium transition-colors duration-300  px-2 max-md:hidden",
              activeSection === link.route
                ? "text-amber-400 after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-amber-400 after:rounded-full"
                : "text-foreground hover:text-amber-300"
            )}
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
