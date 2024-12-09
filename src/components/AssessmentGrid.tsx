'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const assessments = [
  {
    id: 'adhd',
    title: 'ADHD Assessment',
    description: 'Evaluate attention, focus, and hyperactivity patterns with our comprehensive ADHD screening tool.',
    duration: '15-20 minutes',
    questions: 20,
    icon: '🎯'
  },
  {
    id: 'anxiety',
    title: 'Anxiety Test',
    description: 'Measure your anxiety levels and understand different types of anxiety disorders.',
    duration: '10-15 minutes',
    questions: 15,
    icon: '😰'
  },
  {
    id: 'depression',
    title: 'Depression Screening',
    description: 'Assess symptoms of depression and understand your emotional well-being.',
    duration: '10-15 minutes',
    questions: 18,
    icon: '😔'
  },
  {
    id: 'stress',
    title: 'Stress Assessment',
    description: 'Evaluate your stress levels and identify potential stress triggers.',
    duration: '8-10 minutes',
    questions: 12,
    icon: '😤'
  },
  {
    id: 'personality',
    title: 'Personality Assessment',
    description: 'Discover your personality traits and how they influence your mental health.',
    duration: '20-25 minutes',
    questions: 25,
    icon: '🎭'
  },
  {
    id: 'sleep',
    title: 'Sleep Quality Test',
    description: 'Evaluate your sleep patterns and their impact on your mental well-being.',
    duration: '10-12 minutes',
    questions: 15,
    icon: '😴'
  },
  {
    id: 'bipolar',
    title: 'Bipolar Screening',
    description: 'Screen for symptoms of bipolar disorder and mood patterns.',
    duration: '15-20 minutes',
    questions: 22,
    icon: '🔄'
  },
  {
    id: 'ptsd',
    title: 'PTSD Assessment',
    description: 'Evaluate symptoms related to post-traumatic stress disorder.',
    duration: '15-20 minutes',
    questions: 20,
    icon: '💭'
  }
]

export default function AssessmentGrid() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <>
      {/* View Toggle */}
      <div className="flex justify-end mb-8">
        <div className="bg-gray-100 rounded-lg p-1 inline-flex">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-md transition-colors ${
              viewMode === 'grid'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" 
              />
            </svg>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-md transition-colors ${
              viewMode === 'list'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Assessment Cards */}
      <div className={viewMode === 'grid' 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        : "space-y-4"
      }>
        {assessments.map((assessment, index) => (
          <motion.div
            key={assessment.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/assessment/${assessment.id}`}>
              <div className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100
                ${viewMode === 'list' ? 'flex items-center' : ''}`}>
                <div className={`text-4xl ${viewMode === 'list' ? 'mr-6' : 'mb-4'}`}>
                  {assessment.icon}
                </div>
                <div className={viewMode === 'list' ? 'flex-1' : ''}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {assessment.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {assessment.description}
                  </p>
                  <div className={`flex items-center text-sm text-gray-500 
                    ${viewMode === 'list' ? 'justify-start space-x-6' : 'justify-between'}`}>
                    <span>⏱ {assessment.duration}</span>
                    <span>{assessment.questions} questions</span>
                  </div>
                  <motion.div 
                    className={`text-blue-600 font-medium flex items-center
                      ${viewMode === 'list' ? 'mt-2' : 'mt-4'}`}
                    whileHover={{ x: 5 }}
                  >
                    Take Assessment 
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  )
} 