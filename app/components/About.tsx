"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-playfair font-bold text-center mb-12 text-navy"
        >
          About Me
        </motion.h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="mb-6 font-lato text-lg text-gray-700">
            I am Mohammed Mohsin, a passionate web developer currently pursuing my B.Tech degree from Integral
            University. With expertise in multiple programming languages, I strive to create innovative and efficient
            web solutions that exceed client expectations.
          </p>
          <h3 className="text-2xl font-playfair font-semibold mb-4 text-navy">Education</h3>
          <ul className="space-y-2 font-lato text-gray-700">
            <li>B.Tech - Integral University (Current)</li>
            <li>12th - St. Joseph Inter College (2024)</li>
            <li>10th - St. Joseph Inter College (2022)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About

