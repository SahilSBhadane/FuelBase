import Navbar from '@/components/navbar';
import AuthCheck from '@/components/auth-check';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthCheck>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </div>
    </AuthCheck>
  );
}