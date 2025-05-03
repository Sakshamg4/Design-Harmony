import React from 'react'
import textToDiagramVideo from '../../assets/Text-to-Diagram.webm'

const TextToDiagram = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Text to Diagram AI
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            Instantly turn text prompts into sleek flowcharts or sitemaps. Streamline your brainstorming process with AI-powered diagram generation.
          </p>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-lg">
          <video 
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={textToDiagramVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Try Text to Diagram Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default TextToDiagram