'use client'
import { motion } from 'framer-motion'
import AssessmentGrid from '@/components/AssessmentGrid'
import AnimatedIllustration from '@/components/AnimatedIllustration'

export default function SelfAssessmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <section className="relative pt-20 pb-32 text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <AnimatedIllustration className="top-20 left-[20%] text-blue-200">
            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="currentColor">
              <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm0 5c13.785 0 25 11.215 25 25s-11.215 25-25 25S7 45.785 7 32 18.215 7 32 7z" fillOpacity="0.5"/>
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
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#0A2A5C] mb-6">
            Self Assessment
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take our clinically validated assessments to better understand your mental health
          </p>
          <motion.p 
            className="text-lg text-blue-600 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Free, confidential, and takes only a few minutes
          </motion.p>
        </motion.div>
      </section>

      <motion.div 
        className="container mx-auto px-6 pb-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <AssessmentGrid />
      </motion.div>
    </main>
  )
}