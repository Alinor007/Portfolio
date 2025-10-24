'use client'
import { MenuIcon } from 'lucide-react'
import React from 'react'
import {   Sheet,SheetTrigger,SheetClose,SheetContent,SheetHeader,SheetFooter,SheetTitle,
  SheetDescription, } from '../ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

 const navbarLinks = [
    {name:"home",   route:"home", Icon: ""},
    {name:"about", route:"about", Icon: ""},
    {name:"projects", route:"projects", Icon: ""},
    {name:"contact", route:"contact", Icon: ""},
]



const MobileNavbar = () => {
      const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <div >
      <Sheet>  
        <SheetTitle>
          <SheetTrigger >
          <MenuIcon className='min-md:hidden'/>
           </SheetTrigger>
        </SheetTitle>
        <SheetContent className='flex flex-1 flex-col'>
          <div className='mt-32 mb-33 text-center'>
            <Link href="/" >
            <h1 className='text-4xl'>Portfolio</h1>
            </Link>
          </div>
          <nav className='flex flex-col flex-1 items-center gap-4 capitalize text-2xl'>
              {navbarLinks.map((link) => (
              <SheetClose asChild key={link.route}>
                <button
                  onClick={() => handleScroll(link.route)}
                  className="hover:text-amber-500 transition-colors"
                >
                  {link.name}
                </button>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
        
      </Sheet>
    
    </div>
  
      

  )
}

export default MobileNavbar