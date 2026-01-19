import { NextResponse } from 'next/server';
import { searchFoods } from '@/lib/fatsecret';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query required' }, { status: 400 });
  }

  const foods = await searchFoods(query);
  return NextResponse.json(foods);
}