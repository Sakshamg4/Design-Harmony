import React from 'react'
import screemshotDesign from '../../assets/screenshotDesign.webm'

const ScreenshotDesign = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] dark:text-white mb-6">
            Make Your Brainstorming Sessions More Impactful
          </h2>
          <p className="text-lg text-[#666666] dark:text-white/80 max-w-3xl mx-auto">
            Effortlessly transform brainstormed ideas into wireframes, speeding up your process from concept to creation, all in one seamless platform.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[#1A1A1A] dark:text-white">
              Screenshot to Design AI
            </h3>
            <div className="space-y-4">
              <p className="text-[#666666] dark:text-white/80">
                Generate beautiful, fully editable wireframes from a single image or screenshot.
              </p>
              <p className="text-[#666666] dark:text-white/80">
                With the browser extension you can quickly use or save any ideas you see!
              </p>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="p-8">
              <div className="relative">
                <video 
                  src={screemshotDesign}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScreenshotDesign