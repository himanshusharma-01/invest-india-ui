// Home.jsx
export default function Home() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Stock Advisory Section */}
       <section className="flex flex-col md:flex-row items-center gap-8 mb-20">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            Professional Stock Advisory Services
          </h2>
          <p className=" mb-4 text-3xl md:text-2xl font-extrabold text-amber-500 tracking-tight">
            Leverage our expert analysis of Nifty 50 trends and market indicators. 
            Our seasoned analysts provide actionable insights with:
          </p>
          <ul className="list-disc pl-6 text-1xl md:text-1xl font-extrabold text-amber-500 space-y-2">
            <li>Daily technical analysis reports</li>
            <li>Weekly portfolio review</li>
            <li>Real-time trade alerts</li>
            <li>Sector-wise performance tracking</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://tse3.mm.bing.net/th/id/OIP.cE7iuCfqePGGn3gPkXJ51gHaF1?cb=iwc2&rs=1&pid=ImgDetMain" 
            alt="Nifty 50 Chart" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Daily Trading Tips Section */}
       <section className="flex flex-col md:flex-row-reverse items-center gap-8 mb-20 bg-gray-50 p-8 rounded-xl">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            Daily Trading Strategies
          </h2>
          <p className="mb-4 text-3xl md:text-2xl font-extrabold text-amber-500 tracking-tight">
            Get expert-curated trading ideas with precise entry/exit points:
          </p>
          <ul className="mb-4 text-3xl md:text-2xl font-extrabold text-amber-500 tracking-tight">
            <li>Intraday trading opportunities</li>
            <li>Options strategies with risk management</li>
            <li>Breakout stock alerts</li>
            <li>Volume analysis insights</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://fxmedia.s3.amazonaws.com/articles/Forex_Candlestick_Patterns.jpeg"
            alt="Candlestick Chart"
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Subscription Packages Section - Fixed */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-indigo-900 text-center mb-8">
          Investment Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Basic', 'Professional', 'Premium'].map((plan) => {
            const features = 
              plan === 'Basic' ? [
                'Daily 2-3 trade ideas',
                'Basic technical analysis',
                'Email support',
                'Weekly webinars'
              ] :
              plan === 'Professional' ? [
                '5-6 premium trades daily',
                'Advanced chart analysis',
                'Priority support',
                'Daily market reports'
              ] : [
                'Unlimited trading ideas',
                'Personal portfolio management',
                '24/7 dedicated support',
                '1-on-1 mentoring sessions'
              ];

            return (
              <div key={plan} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-amber-500 mb-4">{plan} Plan</h3>
                <div className="text-4xl font-bold text-indigo-900 mb-4">
                  {plan === 'Basic' && '₹2999/mo'}
                  {plan === 'Professional' && '₹7999/mo'}
                  {plan === 'Premium' && '₹14999/mo'}
                </div>
                <ul className="space-y-3 mb-6">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition-colors">
                  Choose {plan}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trusted By Section */}
       <section className="mb-20 text-center">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8">
          Trusted By Thousands of Investors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '15K+', label: 'Active Users' },
            { number: '200+', label: 'Daily Trade Ideas' },
            { number: '95%', label: 'Accuracy Rate' },
            { number: '10+', label: 'Years Experience' }
          ].map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-4xl font-bold text-amber-500 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Returns Guarantee Section */}
      <section className="bg-amber-50 p-8 rounded-xl text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            Long-Term Investment Guarantee
          </h2>
          <div className="text-4xl font-bold text-amber-500 mb-4">
            24-30% Annual Returns
          </div>
          <p className="text-gray-600 mb-4">
            *Based on historical 5-year average returns of our recommended portfolios
          </p>
          <button className="bg-indigo-900 text-white px-8 py-3 rounded-md hover:bg-indigo-800 transition-colors">
            Start Investing Now
          </button>
        </div>
      </section>
    </div>
  );
}




