import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      
      {/* ==================== HEADER ==================== */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h3l2-7 4 14 3-9 2 2h4"/>
              </svg>
            </div>
            <span className="text-base font-semibold tracking-tight">
              Shastho<span className="text-blue-600">Sheba</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/doctors" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Doctors
            </Link>
            <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Sign in
            </Link>
          </nav>

          <Link href="/register" className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors shadow-sm">
            Get started
          </Link>
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-gray-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            Now serving clinics across Bangladesh
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
            Healthcare appointments,
            <br />
            <span className="text-blue-600">made simple.</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
            Book doctor appointments from home, track your serial in real-time, and skip the waiting line. Built for modern clinics in Bangladesh.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/register" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-md transition-colors text-sm shadow-sm">
              Get started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/doctors" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-5 py-2.5 rounded-md border border-gray-300 hover:border-gray-400 transition-colors text-sm bg-white">
              Browse doctors
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== DASHBOARD PREVIEW ==================== */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-lg border border-gray-200 overflow-hidden shadow-xl shadow-gray-200/50">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 mx-auto max-w-sm">
              <div className="bg-white border border-gray-200 rounded px-3 py-1 text-xs text-gray-500 text-center">
                app.shasthosheba.com
              </div>
            </div>
          </div>

          <div className="p-6 bg-white">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-3 hidden md:block">
                <div className="space-y-1">
                  {[
                    { name: "Dashboard", active: true },
                    { name: "Appointments", active: false },
                    { name: "Doctors", active: false },
                    { name: "Patients", active: false },
                    { name: "Reports", active: false },
                  ].map((item) => (
                    <div key={item.name} className={`px-3 py-2 rounded-md text-sm ${item.active ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-12 md:col-span-9 space-y-5">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Today", value: "24", color: "text-gray-900" },
                    { label: "Completed", value: "18", color: "text-green-600" },
                    { label: "Waiting", value: "6", color: "text-orange-500" },
                  ].map((s) => (
                    <div key={s.label} className="border border-gray-200 rounded-md p-4">
                      <div className="text-xs text-gray-500 mb-1">{s.label}</div>
                      <div className={`text-2xl font-semibold ${s.color}`}>{s.value}</div>
                    </div>
                  ))}
                </div>

                <div className="border border-gray-200 rounded-md">
                  <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <div className="text-sm font-medium">Recent appointments</div>
                    <div className="text-xs text-blue-600 font-medium">View all</div>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      { name: "Rahim Ahmed", time: "10:30 AM", status: "Completed", statusColor: "bg-green-50 text-green-700" },
                      { name: "Fatima Khan", time: "10:45 AM", status: "In progress", statusColor: "bg-blue-50 text-blue-700" },
                      { name: "Karim Uddin", time: "11:00 AM", status: "Waiting", statusColor: "bg-orange-50 text-orange-700" },
                    ].map((a) => (
                      <div key={a.name} className="px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-700">
                            {a.name.charAt(0)}
                          </div>
                          <div className="text-sm font-medium">{a.name}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-xs text-gray-500 hidden sm:block">{a.time}</div>
                          <span className={`text-xs font-medium px-2 py-1 rounded-md ${a.statusColor}`}>{a.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">
              <span className="w-6 h-px bg-blue-600"></span>
              Features
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
              Everything your
              <br />
              clinic needs
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Simple, powerful tools built for the way clinics actually work — from booking to prescription.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Online booking",
                desc: "Patients book appointments from home with real-time slot availability.",
                bgColor: "bg-blue-50",
                iconColor: "text-blue-600",
                iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              },
              {
                title: "Live queue",
                desc: "Real-time serial display reduces patient wait time significantly.",
                bgColor: "bg-indigo-50",
                iconColor: "text-indigo-600",
                iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Patient records",
                desc: "Complete visit history and prescriptions stored securely.",
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
                iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              },
              {
                title: "Digital prescriptions",
                desc: "Doctors generate and download printable prescriptions instantly.",
                bgColor: "bg-pink-50",
                iconColor: "text-pink-600",
                iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              },
              {
                title: "Analytics",
                desc: "Understand peak hours, revenue trends, and doctor performance.",
                bgColor: "bg-orange-50",
                iconColor: "text-orange-600",
                iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              {
                title: "Role-based access",
                desc: "Separate dashboards for admins, doctors, and patients.",
                bgColor: "bg-teal-50",
                iconColor: "text-teal-600",
                iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              },
            ].map((f) => (
              <div key={f.title} className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl ${f.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-6 h-6 ${f.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.iconPath}/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS (Dark Section) ==================== */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full -mr-64 -mt-64 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full -ml-64 -mb-64 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">
              <span className="w-6 h-px bg-blue-400"></span>
              How it works
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
              Book in three
              <br />
              simple steps
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              From searching a doctor to getting your serial — takes less than a minute.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Find a doctor",
                desc: "Search by name, specialty, or clinic. View availability and consultation fees.",
                iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              },
              {
                num: "02",
                title: "Pick your time",
                desc: "Choose a date and time slot that works for you. Real-time slot availability.",
                iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              },
              {
                num: "03",
                title: "Get your serial",
                desc: "Instant confirmation with a unique serial number. Track your turn live.",
                iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              },
            ].map((s) => (
              <div key={s.num} className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/50">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.iconPath}/>
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                    {s.num}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
              Ready to get
              <br />
              started?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Join clinics and patients across Bangladesh using ShasthoSheba to save time and improve healthcare.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/register" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-md transition-colors text-sm shadow-sm">
                Create free account
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/login" className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium px-5 py-2.5 rounded-md border border-gray-300 hover:border-gray-400 transition-colors text-sm bg-white">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h3l2-7 4 14 3-9 2 2h4"/>
              </svg>
            </div>
            <span className="text-sm font-semibold">
              Shastho<span className="text-blue-600">Sheba</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/doctors" className="hover:text-gray-900 transition-colors">Doctors</Link>
            <Link href="/login" className="hover:text-gray-900 transition-colors">Login</Link>
            <Link href="/register" className="hover:text-gray-900 transition-colors">Register</Link>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 ShasthoSheba
          </p>
        </div>
      </footer>
    </div>
  );
}