/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: "",
});

export async function POST(request: NextRequest) {
  try {
    const { answers, type, severity } = await request.json();

    if (!answers || !type || !severity) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const concernAreas = Object.entries(answers)
      .filter(([_, value]) => typeof value === 'number' && value >= 2)
      .length;
    const strengthAreas = Object.entries(answers)
      .filter(([_, value]) => typeof value === 'number' && value <= 1)
      .length;

    const prompt = `As a mental health professional, analyze this assessment:
    - Assessment type: ${type}
    - Severity level: ${severity}
    - Number of concerning areas: ${concernAreas}
    - Number of strength areas: ${strengthAreas}
    
    Please provide a compassionate, professional summary of the results, including:
    1. An overview of the current state
    2. Recognition of strengths
    3. Areas that might need attention
    4. Gentle suggestions for next steps
    
    Keep the response concise and supportive.`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.2-90b-vision-preview",
      temperature: 0.7,
      max_tokens: 500,
    });

    const summary = completion.choices[0]?.message?.content || 'Unable to generate summary';

    return NextResponse.json({ summary });
  } catch (error) {
    console.error('Error generating AI summary:', error);
    return NextResponse.json(
      { error: 'Failed to generate summary' },
      { status: 500 }
    );
  }
} 