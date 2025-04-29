import React from 'react'

const DesignOptions = () => {
  const options = [
    {
      title: "Text to Diagram",
      badge: "Beta",
      description: "Instantly generate a beautiful, fully editable flowcharts, and diagrams with a simple text prompt.",
      learnMoreLink: "#",
      image: "https://www.visily.ai/wp-content/uploads/2024/03/TextToDiagramHomePage-400x333.png",
      bgColor: "bg-purple-100"
    },
    {
      title: "Screenshot to Design",
      description: "Want to simply tweak an existing UI? Screenshot to Design AI instantly converts an image into an editable screen.",
      learnMoreLink: "#",
      image: "https://www.visily.ai/wp-content/uploads/2024/01/Screenshot-to-Design-min-1-700x424.png",
      bgColor: "bg-violet-200"
    },
    {
      title: "Sketch to Design",
      description: "Sketch your idea on paper and upload to Visily to convert to an editable design.",
      learnMoreLink: "#",
      image: "https://www.visily.ai/wp-content/uploads/2024/01/Sketch-to-Design-min-1-400x361.png",
      bgColor: "bg-pink-100"
    }
  ]

  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-4">#3</h2>
          <h3 className="text-3xl font-bold text-white mb-4">No "blank canvas"</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Design's Harmony AI converts any user design input—text prompt, screenshot, and more—to a fully customizable high-fidelity design. Unlike other software, getting started is the easiest part!
          </p>
          <p className="text-gray-400 mt-4">
            Check out all the ways to kick start your design:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div key={index} className={`rounded-2xl overflow-hidden ${option.bgColor} p-6`}>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-xl font-bold text-gray-800">{option.title}</h4>
                  {option.badge && (
                    <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full">
                      {option.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-700">{option.description}</p>
                <a href={option.learnMoreLink} className="inline-flex items-center text-purple-700 mt-2">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DesignOptions