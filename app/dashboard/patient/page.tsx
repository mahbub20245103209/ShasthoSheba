"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PatientDashboard() {
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
    if (parsedUser.role !== "PATIENT") {
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
            <span className="text-base font-semibold text-gray-900">
              Shastho<span className="text-blue-600">Sheba</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 hidden sm:block">Hi, {user.name}</span>
            <button onClick={handleLogout} className="text-sm font-medium text-gray-700 hover:text-red-600">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Welcome back, {user.name}</h1>
          <p className="text-gray-600 text-sm">Book appointments and manage your health</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          <Link href="/doctors" className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white transition-colors mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Find a Doctor</h3>
            <p className="text-xs text-gray-600">Browse specialists and book appointment</p>
          </Link>

          <Link href="/dashboard/patient/appointments" className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-green-50 group-hover:bg-green-600 flex items-center justify-center text-green-600 group-hover:text-white transition-colors mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">My Appointments</h3>
            <p className="text-xs text-gray-600">View your booking history</p>
          </Link>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-400 mb-1 text-sm">Prescriptions</h3>
            <p className="text-xs text-gray-400">Coming soon</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Your Profile</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-gray-500 text-xs mb-1">Name</div>
              <div className="font-medium text-gray-900">{user.name}</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs mb-1">Email</div>
              <div className="font-medium text-gray-900">{user.email}</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs mb-1">Role</div>
              <div className="font-medium text-gray-900">Patient</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}