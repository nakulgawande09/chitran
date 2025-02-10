import { NextRequest, NextResponse } from 'next/server'

const mockAssessments = {
  'depression': {
    id: 'depression',
    title: 'Depression Assessment',
    description: 'Evaluate symptoms of depression with this clinically validated questionnaire',
    timeLimit: 15,
    totalQuestions: 9,
    questions: [
      {
        "id": 1,
        "text": "Little interest or pleasure in doing things",
        "options": [
          { id: 0, text: 'Not at all', value: 0 },
          { id: 1, text: 'Several days', value: 1 },
          { id: 2, text: 'More than half the days', value: 2 },
          { id: 3, text: 'Nearly every day', value: 3 }
        ]
      },
      {
        "id": 2,
        "text": "Feeling down, depressed, or hopeless",
        "options": [
          { id: 0, text: 'Not at all', value: 0 },
          { id: 1, text: 'Several days', value: 1 },
          { id: 2, text: 'More than half the days', value: 2 },
          { id: 3, text: 'Nearly every day', value: 3 }
        ]
      },
      {
        "id": 3,
        "text": "Trouble falling or staying asleep, or sleeping too much",
        "options": [
          { id: 0, text: 'Not at all', value: 0 },
          { id: 1, text: 'Several days', value: 1 },
          { id: 2, text: 'More than half the days', value: 2 },
          { id: 3, text: 'Nearly every day', value: 3 }
        ]
      },
      {
        "id": 4,
        "text": "Feeling tired or having little energy",
        "options": [
          { id: 0, text: 'Not at all', value: 0 },
          { id: 1, text: 'Several days', value: 1 },
          { id: 2, text: 'More than half the days', value: 2 },
          { id: 3, text: 'Nearly every day', value: 3 }
        ]
      },
      {
        "id": 5,
        "text": "Poor appetite or overeating",
        "options": [
          { id: 0, text: 'Not at all', value: 0 },
          { id: 1, text: 'Several days', value: 1 },
          { id: 2, text: 'More than half the days', value: 2 },
          { id: 3, text: 'Nearly every day', value: 3 }
        ]
      },
      {
        "id": 6,
        "text": "Feeling bad about yourself\u2014or that you are a failure or have let yourself or your family down",
        "options": [
          { id: 0, text: 'Not at all', value: 0 },
          { id: 1, text: 'Several days', value: 1 },
          { id: 2, text: 'More than half the days', value: 2 },
          { id: 3, text: 'Nearly every day', value: 3 }
        ]
      },
      {
        "id": 7,
        "text": "Trouble concentrating on things, such as reading the newspaper or watching television",
        "options": [
          { id: 0, text: 'Not at all', value: 0 },
          { id: 1, text: 'Several days', value: 1 },
          { id: 2, text: 'More than half the days', value: 2 },
          { id: 3, text: 'Nearly every day', value: 3 }
        ]
      },
      {
        "id": 8,
        "text": "Moving or speaking so slowly that other people could have noticed. Or the opposite \u2014 being so figety or restless that you have been moving around a lot more than usual",
        "options": [
          { id: 0, text: 'Not at all', value: 0 },
          { id: 1, text: 'Several days', value: 1 },
          { id: 2, text: 'More than half the days', value: 2 },
          { id: 3, text: 'Nearly every day', value: 3 }
        ]
      },
      {
        "id": 9,
        "text": "Thoughts that you would be better off dead, or of hurting yourself",
        "options": [
          { id: 0, text: 'Not at all', value: 0 },
          { id: 1, text: 'Several days', value: 1 },
          { id: 2, text: 'More than half the days', value: 2 },
          { id: 3, text: 'Nearly every day', value: 3 }
        ]
      }
    ]
  },
  "anxiety": {
    id: 'anxiety',
    title: 'Anxiety Assessment',
    description: 'Measure your anxiety levels and understand your symptoms better',
    timeLimit: 10,
    totalQuestions: 15,
    questions: [
      {
        "id": 1,
        "text": "Feeling nervous, anxious, or on edge",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 2,
        "text": "Inability to control worrying",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 3,
        "text": "Excessive worrying about different things",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 4,
        "text": "Restlessness or feeling on edge",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 5,
        "text": "Easily fatigued or drained",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 6,
        "text": "Difficulty concentrating due to anxiety",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 7,
        "text": "Irritability or easily annoyed",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 8,
        "text": "Muscle tension or physical symptoms",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 9,
        "text": "Difficulty falling or staying asleep",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 10,
        "text": "Panic or sudden feelings of dread",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 11,
        "text": "Increased heart rate or rapid breathing",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 12,
        "text": "Avoidance of certain situations due to anxiety",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 13,
        "text": "Feeling detached from reality or yourself",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 14,
        "text": "Fear of losing control or going crazy",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      },
      {
        "id": 15,
        "text": "Worrying about something bad happening constantly",
        "options": [
          { "id": 0, "text": "Not at all", "value": 0 },
          { "id": 1, "text": "Several days", "value": 1 },
          { "id": 2, "text": "More than half the days", "value": 2 },
          { "id": 3, "text": "Nearly every day", "value": 3 }
        ]
      }
    ]
  },
  "stress": {
    id: 'stress',
    title: 'Stress Assessment',
    description: 'Assess your stress levels and identify sources of stress',
    timeLimit: 10,
    totalQuestions: 15,
    questions: [
      {
        "id": 1,
        "text": "Feeling overwhelmed by responsibilities",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 2,
        "text": "Difficulty relaxing or unwinding",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 3,
        "text": "Feeling easily frustrated or irritable",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 4,
        "text": "Experiencing nervous tension or feeling on edge",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 5,
        "text": "Finding it difficult to concentrate due to stress",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 6,
        "text": "Feeling physically tense or experiencing muscle tightness",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 7,
        "text": "Experiencing headaches, stomach issues, or rapid heartbeat due to stress",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 8,
        "text": "Avoiding certain situations or tasks because they feel overwhelming",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 9,
        "text": "Feeling emotionally drained or exhausted",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 10,
        "text": "Feeling under constant time pressure",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 11,
        "text": "Experiencing mood swings due to stress",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 12,
        "text": "Feeling the need to be constantly productive, even when exhausted",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 13,
        "text": "Experiencing difficulty sleeping due to stress-related thoughts",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 14,
        "text": "Having a hard time enjoying activities due to stress",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      },
      {
        "id": 15,
        "text": "Feeling a sense of dread about the future due to stress",
        "options": [
          { "id": 0, "text": "Never", "value": 0 },
          { "id": 1, "text": "Sometimes", "value": 1 },
          { "id": 2, "text": "Often", "value": 2 },
          { "id": 3, "text": "Always", "value": 3 }
        ]
      }
    ]
  },
  "sleep": {
    id: 'sleep',
    title: 'Sleep Assessment',
    description: 'Evaluate your sleep quality and identify areas for improvement',
    timeLimit: 15,
    totalQuestions: 15,
    questions: [
      {
        "id": 1,
        "text": "How often do you have difficulty falling asleep?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 2,
        "text": "How often do you wake up in the middle of the night and struggle to fall back asleep?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 3,
        "text": "Do you wake up feeling refreshed in the morning?",
        "options": [
          {
            "id": 0,
            "text": "Always",
            "value": 0
          },
          {
            "id": 1,
            "text": "Often",
            "value": 1
          },
          {
            "id": 2,
            "text": "Sometimes",
            "value": 2
          },
          {
            "id": 3,
            "text": "Never",
            "value": 3
          }
        ]
      },
      {
        "id": 4,
        "text": "How often do you feel excessively sleepy during the day?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 5,
        "text": "Do you experience nightmares or vivid dreams that disturb your sleep?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 6,
        "text": "Do you snore loudly or experience breathing issues while sleeping?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 7,
        "text": "Do you have trouble waking up at your desired time in the morning?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 8,
        "text": "Do you rely on naps to make up for lost sleep?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 9,
        "text": "Do you feel groggy or disoriented after waking up?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 10,
        "text": "Do you feel that your sleep is not deep or restful?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 11,
        "text": "Do you consume caffeine or other stimulants to stay awake during the day?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 12,
        "text": "Do you have an irregular sleep schedule or inconsistent bedtime?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 13,
        "text": "Do you use electronic devices (phone, TV, laptop) before bedtime?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 14,
        "text": "Do you consume alcohol or heavy meals before sleeping?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      },
      {
        "id": 15,
        "text": "Do you feel your overall sleep quality is poor?",
        "options": [
          {
            "id": 0,
            "text": "Never",
            "value": 0
          },
          {
            "id": 1,
            "text": "Sometimes",
            "value": 1
          },
          {
            "id": 2,
            "text": "Often",
            "value": 2
          },
          {
            "id": 3,
            "text": "Always",
            "value": 3
          }
        ]
      }
    ]
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  try {
    const { type } = params

    if (!type || typeof type !== 'string') {
      return NextResponse.json(
        { error: 'Invalid assessment type' },
        { status: 400 }
      )
    }

    const assessment = mockAssessments[type as keyof typeof mockAssessments]

    if (!assessment) {
      return NextResponse.json(
        { error: 'Assessment not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(assessment)
  } catch (error) {
    console.error('Assessment API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 