import React, { useState, useEffect } from 'react'
import angelinaVideo from '../assets/angelina.mp4'

const VideoSection = () => {
  const [hiddenTasks, setHiddenTasks] = useState([])

  const timeSlots = [
    '8AM', '9AM', '10AM', '11AM', 'Noon', '1PM', '2PM', '3PM', '4PM', '5PM'
  ]

  const meetings = [
    { title: 'Results Report', duration: '78.6min' },
    { title: '1:1 with Dereje', duration: '35.1min' },
    { title: 'Project Review', duration: '35.1min' },
    { title: '1:1 with Sonya', duration: '35.1min' },
    { title: 'Quarterly Budget Meeting', duration: '74.9min' }
  ]

  // Random task hiding effect
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * meetings.length)
      setHiddenTasks(prev => {
        if (prev.includes(randomIndex)) {
          return prev.filter(i => i !== randomIndex)
        }
        return [...prev, randomIndex]
      })
    }, 2000) // Change task visibility every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Lightning fast screen recording
          </h2>
          <p className="text-zinc-200 text-sm sm:text-base md:text-lg max-w-xl">
            Easily record your screen and camera. Record on any device using Loom's Chrome extension, desktop app or mobile app.
          </p>
          <button className="bg-blue-600 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-md hover:bg-blue-700 transition-colors">
            Download now
          </button>
        </div>

        {/* Right Content - Schedule Timeline */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="bg-[#2B1C50] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl relative min-h-[400px] sm:min-h-[470px] overflow-hidden">
            {/* Time indicators */}
            <div className="absolute left-2 sm:left-4 md:left-6 top-0 h-full flex flex-col justify-between py-4 sm:py-6 md:py-8">
              {timeSlots.map((time) => (
                <div key={time} className="flex items-center h-4 sm:h-6">
                  <span className="text-[#493C69] text-[10px] sm:text-[11px] font-medium w-6 sm:w-8">
                    {time}
                  </span>
                </div>
              ))}
            </div>

            {/* Vertical Timeline Line */}
            <div className="absolute left-12 sm:left-16 md:left-[72px] top-0 h-full w-0.5 bg-[#3b2d5e]"></div>

            {/* Timeline Content */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 ml-16 sm:ml-20 md:ml-24 mt-12 sm:mt-16 md:mt-20">
              {meetings.map((meeting, index) => (
                <div 
                  key={index}
                  className={`relative transition-all duration-500 ease-in-out
                    ${hiddenTasks.includes(index) ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}
                >
                  <div className="h-8 sm:h-10 md:h-12 w-full bg-[#3b2d5e] rounded-lg flex items-center relative">
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#b1acbf] rounded-l-lg"></div>
                    <span className="text-[#b1acbf] text-xs sm:text-sm px-3 sm:px-4">
                      {meeting.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Centered Video Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32">
                <div className="w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white">
                  <video
                    className="w-full h-full object-cover"
                    src={angelinaVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-full px-2 sm:px-4 py-0.5 sm:py-1 flex items-center gap-1 sm:gap-2 pointer-events-auto">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500"></div>
                  <span className="text-xs sm:text-sm">0:00</span>
                  <button className="p-0.5 sm:p-1">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l2 2 4-4"/>
                    </svg>
                  </button>
                  <button className="p-0.5 sm:p-1">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-7 7-7-7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection