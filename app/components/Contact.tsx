"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-playfair font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>
        <motion.form
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block font-lato font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-lato font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-lato font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gold text-navy py-2 px-4 rounded-md font-lato font-bold hover:bg-lightGold transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

