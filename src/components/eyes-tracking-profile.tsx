"use client"

import { useEffect, useRef, useState } from "react"

export default function EyeTrackingProfile() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [eyePositions, setEyePositions] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const leftEye = document.getElementById("left-eye")
      const rightEye = document.getElementById("right-eye")

      if (!leftEye || !rightEye) return

      // Calculate eye positions
      const calculateEyePosition = (eye: HTMLElement) => {
        const eyeRect = eye.getBoundingClientRect()
        const eyeCenterX = eyeRect.left + eyeRect.width / 2
        const eyeCenterY = eyeRect.top + eyeRect.height / 2

        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX)
        const distance = Math.min(8, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 20)

        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        }
      }

      setEyePositions({
        left: calculateEyePosition(leftEye),
        right: calculateEyePosition(rightEye),
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-8">
      <div className="relative">
        {/* Profile container with face */}
        <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 border-4 border-primary/20 shadow-2xl overflow-hidden">
          {/* Face background */}
          <div className="absolute inset-0 bg-gradient-to-b from-muted to-muted-foreground/50" />

         
          {/* Face */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-40 h-48 bg-muted rounded-[45%] z-20" />

          {/* Eyes container */}
          <div className="absolute top-28 left-1/2 -translate-x-1/2 flex gap-8 z-30">
            {/* Left eye */}
            <div
              id="left-eye"
              className="relative w-12 h-12 bg-background rounded-full border-2 border-foreground/20 shadow-inner"
            >
              <div
                className="absolute top-1/2 left-1/2 w-5 h-5 bg-foreground rounded-full transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(calc(-50% + ${eyePositions.left.x}px), calc(-50% + ${eyePositions.left.y}px))`,
                }}
              >
                <div className="absolute top-1 right-1 w-2 h-2 bg-background rounded-full" />
              </div>
            </div>

            {/* Right eye */}
            <div
              id="right-eye"
              className="relative w-12 h-12 bg-background rounded-full border-2 border-foreground/20 shadow-inner"
            >
              <div
                className="absolute top-1/2 left-1/2 w-5 h-5 bg-foreground rounded-full transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(calc(-50% + ${eyePositions.right.x}px), calc(-50% + ${eyePositions.right.y}px))`,
                }}
              >
                <div className="absolute top-1 right-1 w-2 h-2 bg-background rounded-full" />
              </div>
            </div>
          </div>

          {/* Nose */}
          <div className="absolute top-44 left-1/2 -translate-x-1/2 w-3 h-6 bg-foreground/10 rounded-full z-20" />

          {/* Mouth */}
          <div className="absolute top-52 left-1/2 -translate-x-1/2 w-12 h-6 border-b-2 border-foreground/30 rounded-b-full z-20" />
        </div>
      </div>
    </div>
  )
}
