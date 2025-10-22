import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ reward: "50 $MOCA" });
}