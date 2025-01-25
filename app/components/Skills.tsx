"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 82 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 70 },
  { name: "Java", level: 65 },
  { name: "SQL", level: 80 },
  { name: "Git", level: 85 },
  { name: "Responsive Design", level: 92 },
]

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-lato font-bold text-sm text-navy">{name}</span>
        <span className="font-lato font-bold text-sm text-navy">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <motion.div
          className="h-full bg-gold rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-playfair font-bold text-center mb-12 text-navy"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

