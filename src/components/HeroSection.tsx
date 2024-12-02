'use client'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <motion.div 
        className="container mx-auto px-6 pt-32 pb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
          Your journey to<br />mental wellness
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Connect with mental health experts and begin your path to well-being
        </p>
        <motion.button 
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-full font-medium transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Begin Your Journey
        </motion.button>
      </motion.div>
    </section>
  )
}