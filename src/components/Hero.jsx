import React from 'react'

const Hero = () => {
    return (
        <div className='hero py-20 md:py-32'>
            <div className='hero-container px-4 md:px-0'>
                <div className='hero-content flex items-center justify-center font-[CustomFont] flex-col gap-4 md:gap-8'>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full">
                        <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full"></span>
                        <span className="text-white/80 text-sm">New AI Features Available</span>
                    </div>
                    <h1 className='text-white text-3xl md:text-5xl lg:text-[68px] font-bold text-center leading-tight'>
                        UI design software for everyone
                    </h1>
                    <p className='text-white/80 text-base md:text-lg lg:text-[20px] px-4 md:px-20 lg:px-56 text-center font-medium'>
                        Communicating UI ideas shouldn't require complicated design software. If you can imagine it, you can design it in Design Harmony.
                    </p>
                    <div className='hero-buttons mt-4 md:mt-8 flex gap-4'>
                        <button className='bg-orange-500 text-white font-bold text-sm md:text-base px-6 py-2.5 md:px-8 md:py-3 rounded-xl cursor-pointer hover:bg-orange-600 transition-all duration-300 flex items-center gap-2'>
                            Get Started Free
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        <button className='bg-white/10 backdrop-blur-xl text-white font-bold text-sm md:text-base px-6 py-2.5 md:px-8 md:py-3 rounded-xl cursor-pointer hover:bg-white/20 transition-all duration-300'>
                            Watch Demo
                        </button>
                    </div>
                    <div className="flex items-center gap-4 mt-8">
                        
                        <div className="text-white/80 text-sm">
                            <span className="font-bold text-white">4,000+</span> designers already joined
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )   
}

export default Hero