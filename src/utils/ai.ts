/* eslint-disable @typescript-eslint/no-unused-vars */

export async function generateAISummaryWithGroq(
  answers: Record<number, number>,
  type: string,
  severity: string
) {
  try {
    const response = await fetch('/api/ai-summary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answers,
        type,
        severity,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate summary');
    }

    const data = await response.json();
    return data.summary;
  } catch (error) {
    console.error('Error generating AI summary:', error);
    return 'Unable to generate AI summary at this time.';
  }
} 