import { Metadata } from 'next'
import AssessmentGrid from '@/components/AssessmentGrid'

export const metadata: Metadata = {
  title: 'Self Assessment Tests - Chitran',
  description: 'Take our scientifically validated mental health assessments to better understand your mental well-being.',
}

export default function AssessmentPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Mental Health Self-Assessments
            </h1>
            <p className="text-xl text-gray-600">
              Take our clinically validated assessments to gain insights into your mental well-being. These tests are designed to help you understand yourself better.
            </p>
          </div>
          <AssessmentGrid />
        </div>
      </section>
    </main>
  )
}