import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Create client that can read cookies
function getSupabaseClient() {
  const cookieStore = cookies();
  
  // Get auth token from cookies
  const allCookies = cookieStore.getAll();
  const authCookie = allCookies.find(cookie => 
    cookie.name.includes('auth-token')
  );

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: authCookie ? {
          Authorization: `Bearer ${authCookie.value}`
        } : {}
      }
    }
  );
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Get auth header from request
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: authHeader
        }
      }
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Get meal to check ownership and get image URL
  const { data: meal } = await supabase
    .from('meals')
    .select('*')
    .eq('id', params.id)
    .eq('user_id', user.id)
    .single();

  if (!meal) {
    return NextResponse.json({ error: 'Meal not found' }, { status: 404 });
  }

  // Delete image from storage if exists
  if (meal.image_url) {
    const imagePath = meal.image_url.split('/').slice(-2).join('/');
    await supabase.storage.from('meal-images').remove([imagePath]);
  }

  // Delete meal
  const { error } = await supabase
    .from('meals')
    .delete()
    .eq('id', params.id)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: authHeader
        }
      }
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();

  const { data: meal, error } = await supabase
    .from('meals')
    .update({
      name: body.name,
      calories: body.calories,
      protein: body.protein || 0,
      carbs: body.carbs || 0,
      fats: body.fats || 0,
      meal_type: body.meal_type,
    })
    .eq('id', params.id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(meal);
}