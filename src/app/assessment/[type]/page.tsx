'use client'
import QuestionNav from '@/components/assessment/QuestionNav'
import Timer from '@/components/assessment/Timer'
import { AssessmentProgress, AssessmentTest } from '@/types/assessment'
import { AnimatePresence, motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AssessmentPage() {
  const params = useParams()
  const router = useRouter()
  const [test, setTest] = useState<AssessmentTest | null>(null)
  const [progress, setProgress] = useState<AssessmentProgress>({
    currentQuestion: 0,
    answeredQuestions: [],
    timeRemaining: 0,
    answers: {}
  })

  useEffect(() => {
    // Fetch questions based on assessment type
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/api/assessments/${params.type}`)
        const data = await response.json()
        setTest(data)
        setProgress(prev => ({
          ...prev,
          timeRemaining: data.timeLimit * 60 // Convert to seconds
        }))
      } catch (error) {
        console.error('Error fetching questions:', error)
        router.push('/assessment')
      }
    }

    fetchQuestions()
  }, [params.type, router])

  const handleAnswer = (questionId: number, answerId: number) => {
    setProgress(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answerId },
      answeredQuestions: [...new Set([...prev.answeredQuestions, questionId])],
    }))
  }

  const handleTimeUp = () => {
    // Submit assessment when time is up
    handleSubmit()
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/assessments/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: params.type,
          answers: progress.answers,
          timeSpent: (test?.timeLimit ?? 0) * 60 - progress.timeRemaining
        })
      })
      const result = await response.json()
      router.push(`/assessment/${params.type}/result?id=${result.id}`)
    } catch (error) {
      console.error('Error submitting assessment:', error)
    }
  }

  if (!test) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with Timer */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              {test.title}
            </h1>
            <Timer 
              initialTime={test.timeLimit * 60}
              onTimeUp={handleTimeUp}
              className="text-xl font-mono"
            />
          </div>

          <div className="flex gap-6">
            {/* Question Navigation */}
            <QuestionNav
              totalQuestions={test.totalQuestions}
              answeredQuestions={progress.answeredQuestions}
              currentQuestion={progress.currentQuestion}
              onQuestionSelect={(q) => setProgress(prev => ({ ...prev, currentQuestion: q }))}
            />

            {/* Question Content */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={progress.currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <h2 className="text-xl text-gray-900 mb-6">
                    {test.questions[progress.currentQuestion].text}
                  </h2>
                  <div className="space-y-4">
                    {test.questions[progress.currentQuestion].options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(progress.currentQuestion, option.id)}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          progress.answers[progress.currentQuestion] === option.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 