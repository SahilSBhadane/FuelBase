import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">🔥 Fuelbase</div>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Track Your Calories,
            <br />
            <span className="text-blue-600">Fuel Your Goals</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            The simplest way to log your meals, track calories, and stay on target.
            Snap a photo, add details, and watch your progress.
          </p>
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Free
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">📸</div>
            <h3 className="text-xl font-semibold mb-2">Photo Logging</h3>
            <p className="text-slate-600">
              Snap a pic of your meal and keep a visual diary of what you eat.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-semibold mb-2">Daily Progress</h3>
            <p className="text-slate-600">
              See your calorie intake at a glance with a simple progress bar.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Set Your Goals</h3>
            <p className="text-slate-600">
              Customize your daily calorie target and track your journey.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-20 text-center text-slate-600">
        <p>&copy; 2025 Fuelbase. Built with Next.js and Supabase.</p>
      </footer>
    </div>
  );
}