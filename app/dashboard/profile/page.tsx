'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabase';
import { Profile } from '@/lib/types';

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    daily_calorie_goal: '',
  });

  // Calculator fields
  const [calculatorData, setCalculatorData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activity: '1.2',
  });
  const [calculatedCalories, setCalculatedCalories] = useState<number | null>(null);

  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;

      setProfile(data);
      setFormData({
        username: data.username,
        daily_calorie_goal: data.daily_calorie_goal.toString(),
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not load profile.',
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateMaintenanceCalories = () => {
    const age = parseFloat(calculatorData.age);
    const weight = parseFloat(calculatorData.weight);
    const height = parseFloat(calculatorData.height);
    const activity = parseFloat(calculatorData.activity);

    if (!age || !weight || !height) {
      toast({
        variant: 'destructive',
        title: 'Missing fields',
        description: 'Please fill in all calculator fields.',
      });
      return;
    }

    // Harris-Benedict Equation
    let bmr;
    if (calculatorData.gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Apply activity multiplier
    const maintenance = Math.round(bmr * activity);
    setCalculatedCalories(maintenance);

    toast({
      title: 'Calories Calculated!',
      description: `Your maintenance calories: ${maintenance} kcal/day`,
    });
  };

  const useCalculatedCalories = () => {
    if (calculatedCalories) {
      setFormData({ ...formData, daily_calorie_goal: calculatedCalories.toString() });
      toast({
        title: 'Goal updated!',
        description: 'Click "Save Changes" to apply.',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const { error } = await supabase
        .from('profiles')
        .update({
          username: formData.username,
          daily_calorie_goal: parseInt(formData.daily_calorie_goal),
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: 'Profile updated!',
        description: 'Your changes have been saved.',
      });

      router.refresh();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Could not update profile.',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-8 text-center text-slate-500">
            Loading...
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Profile Settings</h1>
        <p className="text-slate-600 mt-2">Manage your account and preferences</p>
      </div>

      {/* Maintenance Calorie Calculator */}
      <Card>
        <CardHeader>
          <CardTitle>Maintenance Calorie Calculator</CardTitle>
          <CardDescription>
            Calculate your daily calorie needs based on your stats
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age (years)</Label>
              <Input
                id="age"
                type="number"
                placeholder="25"
                value={calculatorData.age}
                onChange={(e) =>
                  setCalculatorData({ ...calculatorData, age: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                value={calculatorData.gender}
                onValueChange={(value) =>
                  setCalculatorData({ ...calculatorData, gender: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="70"
                value={calculatorData.weight}
                onChange={(e) =>
                  setCalculatorData({ ...calculatorData, weight: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="175"
                value={calculatorData.height}
                onChange={(e) =>
                  setCalculatorData({ ...calculatorData, height: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="activity">Activity Level</Label>
            <Select
              value={calculatorData.activity}
              onValueChange={(value) =>
                setCalculatorData({ ...calculatorData, activity: value })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1.2">Sedentary (little/no exercise)</SelectItem>
                <SelectItem value="1.375">Light (1-3 days/week)</SelectItem>
                <SelectItem value="1.55">Moderate (3-5 days/week)</SelectItem>
                <SelectItem value="1.725">Active (6-7 days/week)</SelectItem>
                <SelectItem value="1.9">Very Active (physical job + exercise)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculateMaintenanceCalories} className="w-full">
            Calculate Maintenance Calories
          </Button>

          {calculatedCalories && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-slate-600 mb-1">Your Maintenance Calories:</p>
              <p className="text-3xl font-bold text-blue-600 mb-3">
                {calculatedCalories} kcal/day
              </p>
              <Button onClick={useCalculatedCalories} variant="outline" size="sm">
                Use This as My Daily Goal
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Profile Form */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your profile details</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="goal">Daily Calorie Goal (kcal)</Label>
              <Input
                id="goal"
                type="number"
                value={formData.daily_calorie_goal}
                onChange={(e) =>
                  setFormData({ ...formData, daily_calorie_goal: e.target.value })
                }
                required
                min="800"
                max="5000"
              />
              <p className="text-xs text-slate-500">
                Recommended: 1500-2500 kcal for most adults
              </p>
            </div>

            <Button type="submit" disabled={saving}>
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Account Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Account Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Account Created:</span>
              <span className="font-medium">
                {profile && new Date(profile.created_at).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Last Updated:</span>
              <span className="font-medium">
                {profile && new Date(profile.updated_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}