import React from 'react'

const Features = () => {
  const features = [
    {
      title: "Smart AI Design",
      description: "Leverage AI-powered design suggestions and automated layouts",
      icon: "🎨"
    },
    {
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time with live updates",
      icon: "👥"
    },
    {
      title: "Version Control",
      description: "Track changes and maintain multiple versions of your designs",
      icon: "🔄"
    },
    {
      title: "Export Flexibility",
      description: "Export designs in multiple formats with one click",
      icon: "📤"
    }
  ]

  return (
    <div className="w-full py-20 bg-gradient-to-b from-[#1e293b] to-[#334155]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          Features that set us apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features