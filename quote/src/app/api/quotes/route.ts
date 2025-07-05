// app/api/quotes/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { topic } = await req.json();

  if (!topic) {
    return NextResponse.json({ error: "Topic is required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Give me 10 short creative and inspirational quotes about "${topic}". Return them as a JSON array of strings.`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    // Log the full Gemini API response to inspect its structure
    console.log("Full Gemini API response:", JSON.stringify(data, null, 2));

    // Try to extract the text from the most likely paths
    let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText && data.candidates?.[0]?.output) {
      rawText = data.candidates[0].output;
    }

    // Print the raw result from Gemini
    console.log("Gemini raw response:", rawText);

    // Extract JSON from the AI's text response using regex
    const jsonMatch = rawText?.match(/\[[\s\S]*?\]/); // works like /s flag

    const quotes = jsonMatch ? JSON.parse(jsonMatch[0]) : [];

    return NextResponse.json({ quotes });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json({ error: "Failed to fetch quotes" }, { status: 500 });
  }
}
