'use client'
import { motion } from 'framer-motion'

const stats = [
  { number: '10K+', label: 'Active Users' },
  { number: '500+', label: 'Mental Health Experts' },
  { number: '95%', label: 'User Satisfaction' },
  { number: '24/7', label: 'Support Available' }
]

export default function StatsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-semibold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 