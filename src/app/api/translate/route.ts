import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    
    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: '[PIPELINE DEGRADED] Valid English text payload required.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: '[PIPELINE DEGRADED] AI routing key missing from environment.' }, { status: 500 });
    }

    const prompt = `You are an elite hospitality translator for Iberostar The Club. Translate the following English text into warm, professional Spanish specifically tailored for high-end hospitality and guest interactions. It must sound natural, polite, and polished. Provide ONLY the translation. No extra commentary, no quotes, no markdown blocks.

English:
"${text}"

Spanish Translation:`;

    const res = await fetch(\`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=\${apiKey}\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2 } // Low temp for professional consistency
      })
    });

    if (!res.ok) {
      return NextResponse.json({ error: '[PIPELINE DEGRADED] AI Engine connection failed.' }, { status: 502 });
    }

    const data = await res.json();
    const translation = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!translation) {
      return NextResponse.json({ error: '[PIPELINE DEGRADED] AI Engine returned empty response.' }, { status: 500 });
    }

    return NextResponse.json({ translation });
  } catch (error) {
    console.error("Translation Error:", error);
    return NextResponse.json({ error: '[PIPELINE DEGRADED] Translation engine failure or timeout.' }, { status: 500 });
  }
}