"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      router.push("/login");
      return;
    }

    const parsedUser = JSON.parse(userData);
    if (parsedUser.role !== "ADMIN") {
      router.push("/login");
      return;
    }

    setUser(parsedUser);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h3l2-7 4 14 3-9 2 2h4"/>
              </svg>
            </div>
            <span className="text-base font-semibold">
              Shastho<span className="text-blue-600">Sheba</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 hidden sm:block">{user.name}</span>
            <button onClick={handleLogout} className="text-sm font-medium text-gray-700 hover:text-red-600">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Admin Dashboard</h1>
          <p className="text-gray-600 text-sm">Manage your clinic</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <Link href="/dashboard/admin/doctors/add" className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white transition-colors mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Add New Doctor</h3>
            <p className="text-xs text-gray-600">Create a new doctor account</p>
          </Link>

          <Link href="/doctors" className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-green-50 group-hover:bg-green-600 flex items-center justify-center text-green-600 group-hover:text-white transition-colors mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">View All Doctors</h3>
            <p className="text-xs text-gray-600">See public doctor list</p>
          </Link>
        </div>
      </main>
    </div>
  );
}