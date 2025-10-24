import React from "react"
import Social from "../../../Social/Social"

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gray-400/10 rounded">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left side */}
        <h2 className="text-xl font-semibold text-white">
          © {new Date().getFullYear()} Alinor Abdulgafor
        </h2>

        {/* Right side */}
        <div className="flex gap-6 mt-4 md:mt-0">
         <Social
              containerStyle="flex gap-5"
              IconStyle="h-10 w-10 border border-primary/60 rounded-full flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all"
         />
        </div>
      </div>
    </footer>
  )
}

export default Footer
