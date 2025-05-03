import React from 'react'

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Brainstorming tools
          <br />
          to inspire your creations
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Think big on an endless canvas—brainstorm with sticky notes and let your ideas flow freely in real time!
        </p>
        <button className="bg-white hover:bg-white/90 text-purple-700 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
          Try Design Harmony now
        </button>
      </div>
    </div>
  )
}

export default HeroSection