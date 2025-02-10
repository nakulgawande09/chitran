'use client'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 text-center overflow-hidden">
        <motion.div
          className="max-w-3xl mx-auto px-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#0A2A5C] mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We reimagine mental healthcare for everyone, making it accessible and effective
          </p>
        </motion.div>
      </section>

      {/* Values Section with Feature Card styling */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pb-32">
        {[
          {
            title: 'Accessibility',
            subtitle: 'our mission',
            description: 'Making mental healthcare available to everyone, everywhere.',
            color: 'bg-gradient-to-br from-blue-100 to-purple-100',
            icon: '🌍'
          },
          {
            title: 'Empathy',
            subtitle: 'our approach',
            description: 'Understanding and supporting each individual\'s unique journey.',
            color: 'bg-gradient-to-br from-green-100 to-emerald-100',
            icon: '💝'
          },
          {
            title: 'Innovation',
            subtitle: 'our method',
            description: 'Using technology to create better mental healthcare solutions.',
            color: 'bg-gradient-to-br from-yellow-100 to-orange-100',
            icon: '💡'
          }
        ].map((value, index) => (
          <motion.div
            key={value.title}
            className={`${value.color} rounded-3xl p-6 relative overflow-hidden`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="text-sm text-gray-600 mb-2 block">
              {value.subtitle}
            </span>
            <h3 className="text-xl font-serif text-gray-900 mb-3">
              {value.title}
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              {value.description}
            </p>
            <div className="absolute bottom-4 right-4 text-4xl opacity-30">
              {value.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
} 