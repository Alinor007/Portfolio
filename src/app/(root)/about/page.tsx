import Slider from '@/components/Slider/page'
import React from 'react'
import Image from 'next/image'
import Social from '../../../../Social/Social'
import { Button } from '@/components/ui/button'
import { Download,MapPin} from 'lucide-react'
const About = () => {
  return (
     
        <section className='min-h-screen flex items-center justify-center p-8 bg-foreground/5'>
        <div className='lg:flex items-center'>
          <div className=' relative  mb-9 flex max-sm:items-center max-sm:justify-center mr-10 '>
            {/* Photo */}
            <div className=' absolute rounded-full p-40 bg-primary  hover:bg-amber-300 '/> 
             
            <Image 
              src="/asset/Profile.png" 
              alt="profile" 
              width={300} 
              height={300}
              className='z-100 border-b-foreground border-b-2'/>

     
          </div> 
          <div className='flex-col max-sm:text-center'>
           <h1 className='font-semibold text-1xl text-amber-500'>Software Developer</h1>
              <div className='flex text-sm  items-start gap-1 text-muted'><MapPin className='h-4 w-4 text-muted-foreground'/>
              <h1 className='text-sm text-muted-foreground'>Marawi city, Philippines</h1>
              </div>
           <div className='text-6xl font-semibold'> 
              <span className='font-bold'>Alinor Abdulgafor</span>
            </div>
           <div className='flex-col'>
             <p className='max-w-[500px] mt-4 text-muted-foreground'>I'm a passionate developer and designer with a love for creating exceptional digital experiences. With
                expertise in modern web technologies, I bring ideas to life through clean code and beautiful design.
              </p>
               <p className='max-w-[500px] mt-4 text-muted-foreground'>I'm a passionate developer and designer with a love for creating exceptional digital experiences. With
                expertise in modern web technologies, I bring ideas to life through clean code and beautiful design.
              </p>


           </div>
           
          <div className='mt-9 mb-9 flex max-sm:items-center max-sm:justify-center justify-between max-sm:flex-col gap-4'>
            <Social
            containerStyle={'flex gap-5'}
            IconStyle={'h-9 w-9 border border-primary rounded-full items-center justify-center flex'} />
              <Button className='px-10 text-lg  text-mute cursor-pointer' variant="default" >Hire me</Button>
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

      </section>
  )
}

export default About