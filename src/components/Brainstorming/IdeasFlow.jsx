import React from 'react'
import { Link } from 'react-router-dom'

const IdeasFlow = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let Your Ideas Flow with Smart
          <br />
          Brainstorming Software
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-12">
          Quickly capture and structure ideas, making brainstorming sessions more efficient than ever.
        </p>
        
        <div className="flex justify-center gap-4 mb-16">
          <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300">
            Flowchart
          </button>
          <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
            Sticky Notes
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h3 className="text-3xl font-bold text-white mb-4">
              Quickly design flows &
              <br />
              processes
            </h3>
            <Link 
              to="/explore" 
              className="inline-flex items-center text-purple-300 hover:text-white transition-colors group"
            >
              Explore now
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <img 
                src="https://www.visily.ai/wp-content/uploads/2023/07/Content-7-min-1-1440x1536.png"
                alt="Flowchart Design Process"
                className="w-full rounded-lg"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Benjamin</div>
                <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">Clara</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdeasFlow