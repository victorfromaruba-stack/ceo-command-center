import { NextResponse } from 'next/server';
import fs from 'fs/promises';

export async function GET() {
  try {
    const data = await fs.readFile('/root/.openclaw/workspace/uptime.log', 'utf-8');
    // Extract the last 50 entries to keep the payload clean
    const lines = data.split('\n').filter(Boolean).slice(-50);
    return NextResponse.json({ lines });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read uptime monitor log.' }, { status: 500 });
  }
}