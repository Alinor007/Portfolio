import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'
import Social from '../../../../Social/Social'

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"id="contact">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary text-xl font-semibold tracking-widest uppercase">
            Get In Touch
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground">
            Contact Me
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Fill out the form below,
            and I’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form + Info */}
        <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Let's Connect</h3>
              <p className="text-muted-foreground">
                I’m always open to discussing new opportunities, collaborations, or creative ideas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>alinorabdulgafor@outlook.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+63 963 135 9614</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Marawi City, Philippines</span>
              </div>
            </div>

            <div className="pt-6">
              <Social
                containerStyle="flex gap-5"
                IconStyle="h-10 w-10 border border-primary/60 rounded-full flex items-center justify-center hover:bg-primary/10 hover:scale-105 transition-all"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="flex-1 bg-card border border-border rounded-2xl shadow-sm p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Your Name" className="p-4 text-gray-500" required />
              <Input type="email" placeholder="Your Email" className="p-4 text-gray-500" required />
            </div>
            <Textarea
              placeholder="Your Message"
              className="min-h-[150px] p-4 text-gray-500"
              required
            />
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full md:w-auto px-10 text-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
