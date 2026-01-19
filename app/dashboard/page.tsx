'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import DailySummary from '@/components/daily-summary';
import MealCard from '@/components/meal-card';
import AddMealForm from '@/components/add-meal-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Meal } from '@/lib/types';

export default function DashboardPage() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [dailyGoal, setDailyGoal] = useState(2000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // Get profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('daily_calorie_goal')
      .eq('id', user.id)
      .single();

    if (profile) {
      setDailyGoal(profile.daily_calorie_goal);
    }

    // Get today's meals
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const { data: mealsData } = await supabase
      .from('meals')
      .select('*')
      .eq('user_id', user.id)
      .gte('created_at', today.toISOString())
      .order('created_at', { ascending: false });

    setMeals(mealsData || []);
    setLoading(false);
  };

  const summary = {
    totalCalories: meals.reduce((sum, meal) => sum + meal.calories, 0),
    totalProtein: meals.reduce((sum, meal) => sum + meal.protein, 0),
    totalCarbs: meals.reduce((sum, meal) => sum + meal.carbs, 0),
    totalFats: meals.reduce((sum, meal) => sum + meal.fats, 0),
    meals: meals,
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-slate-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      <DailySummary summary={summary} goal={dailyGoal} />
      <AddMealForm />

      <Card>
        <CardHeader>
          <CardTitle>Today's Meals</CardTitle>
        </CardHeader>
        <CardContent>
          {meals.length > 0 ? (
            <div className="space-y-3">
              {meals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-500 py-8">
              No meals logged yet. Add your first meal above! 🍽️
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}