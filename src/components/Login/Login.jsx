// Login.jsx
export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Decorative Panel */}
      <div className="hidden lg:block w-1/2 bg-gradient-to-br from-indigo-900 to-amber-500 relative">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
          <h2 className="text-4xl font-bold mb-6">Welcome to Invest India</h2>
          <p className="text-xl text-center opacity-90">
            Join 50,000+ investors who trust our market insights
          </p>
          
          {/* Animated Stock Elements */}
          <div className="mt-12 space-y-6">
            <div className="flex space-x-8 animate-float">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L3 22H21L12 2Z"/>
                <path d="M12 6L7 14H17L12 6Z"/>
              </svg>
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3V21H21"/>
                <path d="M7 16L10 11L13 13L17 8"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-indigo-900">Welcome Back</h1>
            <p className="mt-2 text-gray-600">
              Access your personalized investment dashboard
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <input
                  type="email"
                  required
                  className="focus:ring-2 focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 pr-3 py-3 border-gray-300 rounded-md transition-all"
                  placeholder="investor@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <input
                  type="password"
                  required
                  className="focus:ring-2 focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 pr-3 py-3 border-gray-300 rounded-md transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-900 hover:text-amber-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-900 to-amber-500 text-white py-3 px-4 rounded-md hover:opacity-90 transition-opacity font-medium"
            >
              Sign in
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                New to Invest India?
              </span>
            </div>
          </div>

          <button className="w-full bg-white border-2 border-indigo-900 text-indigo-900 py-3 px-4 rounded-md hover:bg-indigo-50 transition-colors font-medium">
            Create free account
          </button>
        </div>
      </div>
    </div>
  );
}