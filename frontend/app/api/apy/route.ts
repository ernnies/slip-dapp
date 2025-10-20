import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate APY calc
  return NextResponse.json({ total: '12.5%' });
}