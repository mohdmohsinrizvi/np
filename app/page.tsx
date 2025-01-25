"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Project from "./components/Project"
import Contact from "./components/Contact"
import CustomCursor from "./components/CustomCursor"

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateCursorPosition)
    return () => window.removeEventListener("mousemove", updateCursorPosition)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <CustomCursor position={cursorPosition} />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </main>
  )
}

