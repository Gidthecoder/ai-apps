import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const API_KEY = process.env.API_KEY || ''; // Ensure your API key is stored in an environment variable

const openai = new OpenAI({ apiKey: API_KEY });

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: 'system', content: 'follow the instruction provided by the user' },
        { role: 'user', content: prompt }
      ]
    });

    return NextResponse.json(completion.choices[0].message);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
