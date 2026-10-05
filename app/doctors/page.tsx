"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatTime } from "@/lib/utils";

interface Doctor {
  id: string;
  specialization: string;
  qualification: string | null;
  experience: number;
  fee: number;
  availableDays: string;
  startTime: string;
  endTime: string;
  bio: string | null;
  user: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
  };
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await fetch("/api/doctors");
      const data = await res.json();
      setDoctors(data.doctors || []);
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  const specializations = ["all", ...Array.from(new Set(doctors.map((d) => d.specialization)))];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.user.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || doctor.specialization === filter;
    return matchesSearch && matchesFilter;
  });

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
          <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Sign in
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Find a Doctor</h1>
          <p className="text-gray-600 text-sm">Browse our network of verified specialists</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or specialization..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white min-w-[180px] text-sm"
          >
            {specializations.map((spec) => (
              <option key={spec} value={spec}>
                {spec === "all" ? "All Specializations" : spec}
              </option>
            ))}
          </select>
        </div>

        {loading && (
          <div className="text-center py-16 text-gray-500 text-sm">Loading doctors...</div>
        )}

        {!loading && filteredDoctors.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
            <div className="text-4xl mb-3">👨‍⚕️</div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {doctors.length === 0 ? "No doctors yet" : "No doctors found"}
            </h3>
            <p className="text-gray-600 text-sm">
              {doctors.length === 0
                ? "Doctors will appear here once added by admin"
                : "Try a different search or filter"}
            </p>
          </div>
        )}

        {!loading && filteredDoctors.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold shrink-0">
                    {doctor.user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm truncate">
                      Dr. {doctor.user.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-medium">
                      {doctor.specialization}
                    </p>
                    {doctor.qualification && (
                      <p className="text-xs text-gray-500 truncate">{doctor.qualification}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 mb-4 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {formatTime(doctor.startTime)} - {formatTime(doctor.endTime)}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                    {doctor.experience} years experience
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-xs text-gray-500">Consultation</div>
                    <div className="text-base font-bold text-gray-900">৳{doctor.fee}</div>
                  </div>
                  <Link
                    href={`/book?doctorId=${doctor.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-2 rounded-md transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
