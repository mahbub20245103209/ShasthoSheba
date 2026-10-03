import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h3l2-7 4 14 3-9 2 2h4"/>
              </svg>
            </div>
            <span className="text-lg font-semibold">
              Shastho<span className="text-blue-600">Sheba</span>
            </span>
          </Link>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-gray-900 mb-1">Forgot password?</h1>
            <p className="text-sm text-gray-600">Follow the steps below to recover your account</p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-5">
            <div className="text-sm font-medium text-gray-900 mb-3">How to reset</div>
            <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
              <li>Contact your clinic administrator</li>
              <li>Provide your registered email</li>
              <li>Admin will reset your password</li>
              <li>You&apos;ll receive a new password</li>
              <li>Login and change it</li>
            </ol>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-6">
            <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3">Contact Admin</div>
            <div className="space-y-2">
              <a href="mailto:admin@shasthosheba.com" className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                admin@shasthosheba.com
              </a>
              <a href="tel:+8801700000000" className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +880 1700-000000
              </a>
            </div>
          </div>

          <Link
            href="/login"
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}