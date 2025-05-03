import React from 'react'

const VideoSection = ({ videoSrc }) => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto rounded-2xl shadow-2xl overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          autoPlay  
          muted 
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default VideoSection