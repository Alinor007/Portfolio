
'use client'
import Link from 'next/link'
import React from 'react'
import { Facebook,Github,Linkedin } from 'lucide-react'

 const Links = [
    {href:"https://github.com/alinor007", Icon: <Github/>},
    {href:"https://fb.com/alinor007", Icon: <Facebook/>},
    {href:"https://In/alinor-abdulgafor ", Icon: <Linkedin/>}
]
interface LinkProps {
  containerStyle:string,
  IconStyle:string,
}

 const Social = ({containerStyle,IconStyle}:LinkProps ) => {
 
  return (
    <div className={containerStyle}>
      {Links.map((item,index)=>{
        return(
          
          <Link href={item.href} key={index} className={IconStyle} >{item.Icon}</Link>
        )
      })}
    </div>
  )
}
export default Social
