'use client'
import { motion } from 'framer-motion'

interface AnimatedIllustrationProps {
  className?: string;
  children: React.ReactNode;
}

export default function AnimatedIllustration({ className = '', children }: AnimatedIllustrationProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -10, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
} 