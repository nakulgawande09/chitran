'use client'
import { motion } from 'framer-motion'

interface QuestionNavProps {
  totalQuestions: number
  answeredQuestions: number[]
  currentQuestion: number
  onQuestionSelect: (questionIndex: number) => void
}

export default function QuestionNav({
  totalQuestions,
  answeredQuestions,
  currentQuestion,
  onQuestionSelect
}: QuestionNavProps) {
  return (
    <div className="w-72 bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Questions</h3>
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onQuestionSelect(index)}
            className={`
              relative w-full aspect-square rounded-xl text-base font-medium
              transition-all duration-200 border-2
              ${currentQuestion === index 
                ? 'bg-blue-500 border-blue-600 text-white shadow-md' 
                : answeredQuestions.includes(index)
                  ? 'bg-green-50 border-green-200 text-green-700'
                  : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-blue-200 hover:bg-blue-50'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">{index + 1}</span>
            {answeredQuestions.includes(index) && (
              <motion.div 
                className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              />
            )}
          </motion.button>
        ))}
      </div>
      <div className="mt-6 space-y-3 border-t pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-4 h-4 bg-blue-500 rounded-lg"></div>
          <span>Current Question</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-4 h-4 bg-gray-50 border-2 border-gray-200 rounded-lg"></div>
          <span>Not Attempted</span>
        </div>
      </div>
    </div>
  )
} 