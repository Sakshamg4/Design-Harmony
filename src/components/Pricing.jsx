import React from 'react'

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "29",
      features: [
        "Basic AI Design Tools",
        "5 Projects",
        "2GB Storage",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "79",
      features: [
        "Advanced AI Tools",
        "Unlimited Projects",
        "20GB Storage",
        "Priority Support",
        "Real-time Collaboration",
        "Custom Exports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "199",
      features: [
        "Custom AI Solutions",
        "Unlimited Everything",
        "100GB Storage",
        "24/7 Support",
        "API Access",
        "Custom Integration"
      ],
      popular: false
    }
  ]

  return (
    <div className="w-full py-20 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'border-2 border-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-6">
                ${plan.price}<span className="text-lg font-normal text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing