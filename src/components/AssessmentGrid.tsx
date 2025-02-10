'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const assessments = [
  {
    id: 'depression',
    title: 'Depression Assessment',
    description: 'Evaluate symptoms of depression with this clinically validated questionnaire',
    duration: '10-15 min',
    icon: '🌧️',
    color: 'from-blue-100 to-purple-100'
  },
  {
    id: 'anxiety',
    title: 'Anxiety Assessment',
    description: 'Measure your anxiety levels and understand your symptoms better',
    duration: '8-10 min',
    icon: '😰',
    color: 'from-green-100 to-emerald-100'
  },
  {
    id: 'stress',
    title: 'Stress Assessment',
    description: 'Assess your stress levels and identify sources of stress',
    duration: '10-15 min',
    icon: '😤',
    color: 'from-yellow-100 to-orange-100'
  },
  {
    id: 'sleep',
    title: 'Sleep Assessment',
    description: 'Evaluate your sleep quality and identify areas for improvement',
    duration: '10-15 min',
    icon: '😴',
    color: 'from-indigo-100 to-blue-100'
  }
]

export default function AssessmentGrid() {
  const router = useRouter()

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
      {assessments.map((assessment, index) => (
        <motion.button
          key={assessment.id}
          onClick={() => router.push(`/assessment/${assessment.id}`)}
          className={`bg-gradient-to-br ${assessment.color} p-8 rounded-2xl shadow-sm 
            hover:shadow-lg transition-all duration-300 text-left relative overflow-hidden group`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute top-4 right-4 text-4xl opacity-50 group-hover:scale-110 transition-transform">
            {assessment.icon}
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            {assessment.title}
          </h3>
          <p className="text-gray-700 mb-6 pr-12">
            {assessment.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">
              Duration: {assessment.duration}
            </span>
            <span className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
              Start →
            </span>
          </div>
        </motion.button>
      ))}
    </div>
  )
} 