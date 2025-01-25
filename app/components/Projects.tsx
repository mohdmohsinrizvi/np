"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Website",
    description: "A fully functional online store built with React and Node.js",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Task Management App",
    description: "A productivity app created using React and Firebase",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my work",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

