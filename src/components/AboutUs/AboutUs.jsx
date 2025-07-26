// AboutUs.jsx
export default function AboutUs() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Founder Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
          Our Founder
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/3">
            <div className="bg-gray-200 rounded-xl shadow-xl w-full aspect-square animate-pulse">
              {/* Add actual image here */}
            </div>
          </div>
          <div className="lg:w-2/3 space-y-4">
            <h3 className="text-2xl font-bold text-amber-500">
              Satish Kumar Sharma
            </h3>
            <p className="text-lg font-semibold text-gray-600">
              Chairman & Chief Investment Strategist
            </p>
            <p className="text-gray-600">
              With over 25 years of experience in equity markets, Mr. Sharma founded 
              Invest India with a vision to democratize professional investment 
              advisory. A Chartered Financial Analyst (CFA) and NISM certified 
              research analyst, he has been featured in Economic Times' 
              "Top 25 Market Minds".
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-indigo-900 hover:text-amber-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-indigo-900 hover:text-amber-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
          Expert Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((member) => (
            <div key={member} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 animate-pulse">
                  {/* Add team member image */}
                </div>
                <h4 className="text-xl font-bold text-indigo-900">Aarav Mehta</h4>
                <p className="text-amber-500 mb-2">Senior Research Analyst</p>
                <p className="text-gray-600 text-sm">
                  NISM certified analyst with 12+ years experience in technical analysis
                </p>
                <div className="flex justify-center space-x-3 mt-4">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
          Certifications & Recognition
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3, 4].map((cert) => (
            <div key={cert} className="w-40 h-20 bg-gray-200 rounded-lg flex items-center justify-center animate-pulse">
              {/* Add certification logo */}
              <span className="text-gray-500 text-sm">Certification {cert}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8">
          *All research reports are SEBI compliant (Registration No: INH000000123)
        </p>
      </section>
    </div>
  );
}