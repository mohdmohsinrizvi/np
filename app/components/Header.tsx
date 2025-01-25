"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md"
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#home" className="text-lg font-lato font-bold hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-lg font-lato font-bold hover:text-gold transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-lg font-lato font-bold hover:text-gold transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#project" className="text-lg font-lato font-bold hover:text-gold transition-colors">
              Project
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-lg font-lato font-bold hover:text-gold transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

