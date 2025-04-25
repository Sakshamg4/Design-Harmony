import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Designer",
      company: "TechCorp",
      content: "Design Harmony has revolutionized our design workflow. The AI features are incredible!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "UI/UX Lead",
      company: "CreativeFlow",
      content: "The real-time collaboration features have made remote work seamless for our team.",
      avatar: "MC"
    },
    {
      name: "Emma Davis",
      role: "Creative Director",
      company: "DesignLabs",
      content: "The export flexibility and version control are game-changers for our design process.",
      avatar: "ED"
    }
  ]

  return (
    <div className="w-full py-20 bg-gradient-to-b from-[#334155] to-[#1e293b]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          What our users say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="text-white font-bold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials