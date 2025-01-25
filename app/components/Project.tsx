"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

const Project = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="project" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-playfair font-bold text-center mb-12 text-navy"
        >
          Featured Project
        </motion.h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg overflow-hidden shadow-xl"
        >
          <Image
            src="/img.jpg"
            alt="Maza Delight Catering Service"
            width={800}
            height={400}
            className="w-full h-80 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-playfair font-bold mb-4 text-navy">Maza Delight Catering Service</h3>
            <p className="text-gray-700 font-lato mb-6">
              A premium website for a high-end catering service, featuring an elegant design, online booking system, and
              showcasing a variety of culinary offerings.
            </p>
            <Link href="https://mazadelight.netlify.app" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-navy px-6 py-2 rounded-full font-lato font-bold text-lg hover:bg-lightGold transition-colors"
              >
                View Project
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Project

