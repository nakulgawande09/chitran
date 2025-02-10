'use client'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8">
            Begin Your Mental Health Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join thousands who have found support and guidance through Swasthi
          </p>
          <motion.button 
            className="bg-white text-blue-600 px-12 py-5 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 