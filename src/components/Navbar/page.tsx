'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {MenuIcon} from 'lucide-react'

 const navbarLinks = [
    {name:"home",   route:"/", Icon: ""},
    {name:"about", route:"/about", Icon: ""},
    {name:"projects", route:"/projects", Icon: ""},
    {name:"contact", route:"/contact", Icon: ""},
]

const Navbar = () => {
  const pathname = usePathname();
  console.log("Path",pathname)
  return (
   <nav className='fix flex justify-center items-center px-6  gap-4 py-6 lg:px-10 capitalize'>
        

      {navbarLinks.map ((link)=>{
        const isActive = pathname === link.route 
        console.log("Path",isActive)
        return (
          <Link
           href={link.route} 
           key={link.name}
           className={cn('flex px-2 max-md:hidden', {'border-b-4 border-amber-200':isActive})}>
            {link.name}
          </Link>
        )
      })}

   </nav>
  )
}

export default Navbar