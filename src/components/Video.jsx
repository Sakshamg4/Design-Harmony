import React from 'react'
import VideoMp4 from '../assets/video.webm'

const Video = () => {
    return (
        <div className='video px-4 md:px-10 py-6 md:py-10 flex justify-center items-center'>
            <video 
                className='rounded-xl md:rounded-3xl w-[95vw] md:w-[89vw] shadow-lg' 
                src={VideoMp4} 
                autoPlay 
                loop 
                muted
                playsInline // Added for better mobile support
            />
        </div>
    )
}

export default Video