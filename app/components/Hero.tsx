"use client"

import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-navy to-darkBlue">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white"
      >
        <h1 className="text-6xl font-playfair font-bold mb-4">Mohammed Mohsin</h1>
        <h2 className="text-3xl font-lato mb-6">Web Developer & B.Tech Student</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gold text-navy px-8 py-3 rounded-full font-lato font-bold text-lg hover:bg-lightGold transition-colors"
        >
          Explore My Work
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero

