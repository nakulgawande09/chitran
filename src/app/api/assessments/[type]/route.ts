import { NextResponse } from 'next/server'

const mockAssessments = {
  'adhd': {
    id: 'adhd',
    title: 'ADHD Assessment',
    description: 'Evaluate attention and focus patterns',
    timeLimit: 20,
    totalQuestions: 20,
    questions: Array.from({ length: 20 }, (_, i) => ({
      id: i,
      text: `ADHD Question ${i + 1}`,
      options: [
        { id: 0, text: 'Never', value: 0 },
        { id: 1, text: 'Sometimes', value: 1 },
        { id: 2, text: 'Often', value: 2 },
        { id: 3, text: 'Very Often', value: 3 }
      ]
    }))
  }
  // Add other assessment types here
}

export async function GET(
  request: Request,
  { params }: { params: { type: string } }
) {
  const assessment = mockAssessments[params.type as keyof typeof mockAssessments]
  
  if (!assessment) {
    return NextResponse.json({ error: 'Assessment not found' }, { status: 404 })
  }

  return NextResponse.json(assessment)
} 