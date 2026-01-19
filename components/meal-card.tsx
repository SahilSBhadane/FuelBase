'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Meal } from '@/lib/types';
import { formatTime, getMealTypeLabel } from '@/lib/utils';
import { Trash2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';  // ← ADD THIS LINE
interface MealCardProps {
  meal: Meal;
}

export default function MealCard({ meal }: MealCardProps) {
  const { toast } = useToast();
  const router = useRouter();

  const handleDelete = async () => {
  if (!confirm('Delete this meal?')) return;

  try {
    // Get current session token
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'You must be logged in to delete meals.',
      });
      return;
    }

    const response = await fetch(`/api/meals/${meal.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
      },
    });

    if (!response.ok) throw new Error('Failed to delete meal');

    toast({
      title: 'Meal deleted',
      description: 'The meal has been removed from your log.',
    });

    router.refresh();
  } catch (error) {
    toast({
      variant: 'destructive',
      title: 'Error',
      description: 'Could not delete meal.',
    });
  }
};

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-4">
          {meal.image_url && (
            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
              <Image
                src={meal.image_url}
                alt={meal.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p className="text-xs text-slate-500">{getMealTypeLabel(meal.meal_type)}</p>
                <h3 className="font-semibold text-slate-900 truncate">{meal.name}</h3>
                <p className="text-sm text-slate-600">{meal.calories} kcal</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDelete}
                className="flex-shrink-0"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
            
            <div className="flex gap-3 mt-2 text-xs text-slate-500">
              <span>P: {meal.protein}g</span>
              <span>C: {meal.carbs}g</span>
              <span>F: {meal.fats}g</span>
            </div>
            
            <p className="text-xs text-slate-400 mt-1">{formatTime(meal.created_at)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}