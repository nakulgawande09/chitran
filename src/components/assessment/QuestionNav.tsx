'use client'

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
    <div className="w-48 bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Questions</h3>
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <button
            key={index}
            onClick={() => onQuestionSelect(index)}
            className={`
              w-full aspect-square rounded-md text-sm font-medium
              ${currentQuestion === index ? 'bg-blue-500 text-white' : ''}
              ${answeredQuestions.includes(index) ? 'bg-green-100 text-green-800' : 'bg-gray-100'}
              hover:bg-blue-100 transition-colors
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
} 