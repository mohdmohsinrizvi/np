"use client"

import { motion } from "framer-motion"

interface CustomCursorProps {
  position: { x: number; y: number }
}

const CustomCursor: React.FC<CustomCursorProps> = ({ position }) => {
  return (
    <motion.div
      className="fixed w-8 h-8 rounded-full bg-gold pointer-events-none z-50 mix-blend-difference"
      animate={{ x: position.x - 16, y: position.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}

export default CustomCursor

