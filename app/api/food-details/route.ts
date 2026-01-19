import { NextResponse } from 'next/server';
import { getFoodDetails } from '@/lib/fatsecret';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const foodId = searchParams.get('id');

  if (!foodId) {
    return NextResponse.json({ error: 'Food ID required' }, { status: 400 });
  }

  const details = await getFoodDetails(foodId);
  
  if (!details) {
    return NextResponse.json({ error: 'Food not found' }, { status: 404 });
  }

  return NextResponse.json(details);
}