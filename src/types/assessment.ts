import { ReactNode } from "react"

export interface AssessmentOption {
  value: ReactNode
  id: number
  text: string
}

export interface AssessmentQuestion {
  id: number
  text: string
  options: AssessmentOption[]
}

export interface AssessmentTest {
  id: string
  title: string
  description: string
  timeLimit: number
  totalQuestions: number
  questions: AssessmentQuestion[]
}

export interface AssessmentProgress {
  currentQuestion: number
  answeredQuestions: number[]
  timeRemaining: number
  answers: Record<number, number>
  email: string
} 