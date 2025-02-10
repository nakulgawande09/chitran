'use client'
import { motion } from 'framer-motion'
import AnimatedIllustration from './AnimatedIllustration'

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedIllustration className="top-20 left-[20%] text-blue-200">
          <svg className="w-16 h-16" viewBox="0 0 64 64" fill="currentColor">
            <circle cx="32" cy="32" r="30" fillOpacity="0.5" />
          </svg>
        </AnimatedIllustration>
        <AnimatedIllustration className="top-40 right-[15%] text-green-200">
          <svg className="w-20 h-20" viewBox="0 0 64 64" fill="currentColor">
            <rect width="60" height="60" x="2" y="2" rx="8" fillOpacity="0.5" />
          </svg>
        </AnimatedIllustration>
      </div>

      <motion.div
        className="max-w-3xl mx-auto px-6 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl md:text-7xl font-serif text-[#0A2A5C] mb-6">
          Your Mental<br />Health Matter
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Take back control of your mental health. Train your brain with pleasure, develop memory, attention and thinking
        </p>
        <motion.button 
          className="bg-[#B3E5FC] text-[#0A2A5C] px-8 py-3 rounded-full hover:bg-[#81D4FA] transition-colors inline-flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try now <span className="ml-2">→</span>
        </motion.button>
      </motion.div>
    </section>
  )
}