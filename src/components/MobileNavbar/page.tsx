'use client'
import { MenuIcon } from 'lucide-react'
import React from 'react'
import {   Sheet,SheetTrigger,SheetClose,SheetContent,SheetHeader,SheetFooter,SheetTitle,
  SheetDescription, } from '../ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

 const navbarLinks = [
    {name:"home",   route:"/", Icon: ""},
    {name:"about", route:"/about", Icon: ""},
    {name:"projects", route:"/projects", Icon: ""},
    {name:"contact", route:"/contact", Icon: ""},
]



const MobileNavbar = () => {
    const pathname = usePathname();
  
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
              {navbarLinks.map ((link)=>{
                const isActive = pathname === link.route 
                console.log("Path",isActive)
                return (
                  <Link
                  href={link.route} 
                  key={link.name}
                  className={cn('flex px-2', {'border-b-4 border-amber-200':isActive})}>
                    {link.name}
                  </Link>
                )
              })}
          </nav>
        </SheetContent>
        
      </Sheet>
    
    </div>
  
      

  )
}

export default MobileNavbar