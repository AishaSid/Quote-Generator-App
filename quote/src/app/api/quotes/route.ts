// app/api/quotes/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { topic } = await req.json();

  if (!topic) {
    return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Give me 3 short inspirational quotes about "${topic}". Return them as a JSON array of strings.`,
          },
        ],
        temperature: 0.8,
      }),
    });

    const data = await response.json();
    const aiReply = data.choices[0]?.message?.content;

    return NextResponse.json({ quotes: JSON.parse(aiReply) });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch quotes' }, { status: 500 });
  }
}
