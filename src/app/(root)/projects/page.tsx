import React from 'react'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'GreenThumb',
    description:
      'An IoT-powered smart greenhouse system for automated irrigation and plant monitoring, built with ESP32, Firebase, and React Native.',
    image: '/asset/greenthumb.jpg',
    github: 'https://github.com/80may/greenthumb',
  },
  {
    title: ' Ranao Job Platform',
    description:
      'A full-stack job platform that connects employers and job seekers in Lanao. Built with React, Node.js, and Firebase.',
    image: '/asset/ranao-job.png',
    github: 'https://ranaojob-platform.vercel.app/',
  },
  {
    title: ' MSU Herbarium Management System',
    description:
      'A comprehensive herbarium management system for MSU, designed to catalog, track, and manage plant specimens efficiently. Built with modern web technologies.',
    image: '/asset/msu-herbarium.png', // optional, replace with your screenshot path
    github: 'https://msu-herbarium-ms.vercel.app/',
  },
    {
    title: 'CE Graduation Predictor',
    description:
      'A machine learning web application that predicts whether a Civil Engineering student at **Mindanao State University – Main Campus, Marawi City** will graduate on time.',
    image: '/asset/ce-pred.png',
    github: 'https://ce-predictor-msu.streamlit.app//',
  },
]


const Project = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20" id="projects">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary text-xl font-semibold tracking-widest uppercase">
            Projects
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mt-3">
            My Featured Works
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my passion for
            innovation, design, and problem-solving.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="group relative border border-border rounded-2xl p-6 bg-card hover:bg-primary/5 transition-all hover:shadow-lg"
            >
              {proj.image && (
                <div className="mb-5 overflow-hidden rounded-xl border-2 border-primary">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 "
                  />
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-3">
                {proj.title}
              </h3>
              <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                {proj.description}
              </p>

              <div className="flex items-center justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex items-center gap-2"
                >
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </Button>

             
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
