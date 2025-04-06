import React from 'react'
import videoSrc from '../assets/live-rewind.mp4'

const VideoSection2 = () => {
  return (
    <div className='w-full py-20 md:py-28'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          {/* Left Content */}
          <div className='w-full md:w-1/2 space-y-6'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
              Live-rewind feature for your designs
            </h2>
            <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
              Explore and iterate on your designs with our live-rewind feature. Go back in time to see your design evolution, making it easier to track changes and find the perfect version.
            </p>
            <div className='flex items-center gap-4'>
              <button className='bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors'>
                Try it free
              </button>
              <button className='text-white border border-white/20 px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors'>
                Learn more
              </button>
            </div>
          </div>

          {/* Right Video */}
          <div className='w-full md:w-1/2'>
            <div className='relative rounded-xl overflow-hidden'>
              <video 
                className='w-full h-auto rounded-xl'
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Optional Overlay Gradient */}
              <div className='absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection2