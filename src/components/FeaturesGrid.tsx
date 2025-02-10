'use client'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Expert Directory',
    description: 'Connect with certified mental health professionals who match your needs.',
    icon: '👥'
  },
  {
    title: 'Secure Sessions',
    description: 'Private, encrypted communication channels for your peace of mind.',
    icon: '🔒'
  },
  {
    title: 'Resource Library',
    description: 'Access curated content to support your mental health journey.',
    icon: '📚'
  }
]

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Why Choose Swasthi
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
