import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DailySummary as DailySummaryType } from '@/lib/types';

interface DailySummaryProps {
  summary: DailySummaryType;
  goal: number;
}

export default function DailySummary({ summary, goal }: DailySummaryProps) {
  const percentage = Math.min((summary.totalCalories / goal) * 100, 100);
  const remaining = Math.max(goal - summary.totalCalories, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Calories</span>
            <span className="font-semibold">
              {summary.totalCalories} / {goal} kcal
            </span>
          </div>
          <Progress value={percentage} className="h-3" />
          <p className="text-sm text-slate-500">
            {remaining > 0 ? `${remaining} kcal remaining` : 'Goal reached! 🎉'}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{summary.totalProtein}g</p>
            <p className="text-xs text-slate-600">Protein</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{summary.totalCarbs}g</p>
            <p className="text-xs text-slate-600">Carbs</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">{summary.totalFats}g</p>
            <p className="text-xs text-slate-600">Fats</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}