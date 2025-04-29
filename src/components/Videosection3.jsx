import React from 'react'

const VideoSection3 = () => {
  return (
    <div className='w-full py-20 md:py-28'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          {/* Left Chat Animation */}
          <div className='w-full md:w-1/2'>
            <div className='aspect-square w-full relative rounded-2xl overflow-hidden bg-gradient-to-b from-violet-600/20 to-violet-900/30'>
              {/* User Message */}
              <div className='w-[85%] bg-white rounded-2xl p-6 mb-4 relative mx-4 mt-8'>
                <p className='text-violet-900 text-lg'>
                  Can you show me how to require two-factor authentication for my team?
                </p>
                <div className='absolute right-[-12px] top-1/2 transform -translate-y-1/2'>
                  <div className='w-3 h-3 bg-white rotate-45'></div>
                </div>
              </div>

              {/* Response Message */}
              <div className='w-[85%] bg-violet-900 rounded-2xl p-6 relative mx-4'>
                <p className='text-white text-lg mb-4'>
                  Of course! Here's a short walkthrough of the steps you'll need to take:
                </p>
                
                
                {/* Video Preview */}
                <div className='mt-4 rounded-lg overflow-hidden relative bg-violet-800/50 aspect-video'>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-16 h-16 bg-violet-900 rounded-full flex items-center justify-center'>
                      <div className='w-0 h-0 border-t-8 border-b-8 border-l-12 border-l-white border-t-transparent border-b-transparent ml-1'></div>
                    </div>
                  </div>
                </div>

                {/* Profile Circle */}
                <div className='absolute bottom-4 left-4 w-16 h-16 rounded-full bg-violet-700'></div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className='w-full md:w-1/2 space-y-6'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
              Share or embed video anywhere you work
            </h2>
            <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
              From Google Workspace to Slack, design harmony videos seamlessly integrate with hundreds of tools you use every day.
            </p>
            <button className='bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors'>
              Start sharing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection3