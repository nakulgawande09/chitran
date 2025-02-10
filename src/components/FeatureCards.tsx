'use client'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Mood',
    subtitle: 'mood tracker',
    description: 'A mood tracker is a tool used to keep a record of a person\'s mood at regular intervals',
    color: 'bg-gradient-to-br from-blue-100 to-purple-100',
    icon: '📊'
  },
  {
    title: 'Meditation',
    subtitle: 'meditation catalog',
    description: 'There are hundreds of guided meditations, mini-meditations, sleep sounds, SOS meditations for emergencies',
    color: 'bg-gradient-to-br from-green-100 to-emerald-100',
    icon: '🧘‍♂️'
  },
  {
    title: 'Train for',
    subtitle: 'brain exercises',
    description: 'There are three games with different goals: memory, attention and thinking, processing speed of brain',
    color: 'bg-gradient-to-br from-blue-100 to-cyan-100',
    icon: '🎯'
  },
  {
    title: 'Grateful',
    subtitle: 'gratitude practice',
    description: 'Establish a daily practice to remind yourself of the gifts, grace, benefits, and good things',
    color: 'bg-gradient-to-br from-yellow-100 to-orange-100',
    icon: '🙏'
  },
  {
    title: 'Make a goal list',
    subtitle: 'goal plan',
    description: 'Setting goals focuses your acquisition of knowledge, and helps you to organize your time and your resources',
    color: 'bg-gradient-to-br from-cyan-100 to-blue-100',
    icon: '📝'
  }
]

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-6 relative">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          className={`${feature.color} rounded-3xl p-6 relative overflow-hidden cursor-pointer`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          transition={{ 
            delay: index * 0.1,
            duration: 0.3
          }}
        >
          <motion.div
            className="relative z-10"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-sm text-gray-600 mb-2 block">
              {feature.subtitle}
            </span>
            <h3 className="text-xl font-serif text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              {feature.description}
            </p>
          </motion.div>
          
          <div className="absolute bottom-4 right-4 text-4xl opacity-30 group-hover:opacity-50 transition-opacity">
            {feature.icon}
          </div>

          <motion.div
            className="absolute inset-0 bg-white opacity-0"
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      ))}
    </div>
  )
} 