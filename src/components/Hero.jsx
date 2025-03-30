import React from 'react'

const Hero = () => {
    return (
        <div className='hero py-6 md:py-10'>
            <div className='hero-container px-4 md:px-0'>
                <div className='hero-content flex items-center justify-center font-[CustomFont] flex-col gap-4 md:gap-6'>
                    <h1 className='text-white text-3xl md:text-5xl lg:text-[68px] font-bold text-center'>
                        UI design software for everyone
                    </h1>
                    <p className='text-white text-base md:text-lg lg:text-[20px] px-4 md:px-20 lg:px-56 text-center font-medium'>
                        Communicating UI ideas shouldn't require complicated design software. If you can imagine it, you can design it in Visily.
                    </p>
                    <div className='hero-buttons mt-2 md:mt-4'>
                        <button className='bg-white text-blue-600 font-bold text-sm md:text-base px-6 py-2.5 md:px-8 md:py-3 rounded-md cursor-pointer hover:bg-gray-100 transition-colors'>
                            Get Started 
                        </button>
                    </div>
                </div>
            </div>
        </div>  
    )   
}

export default Hero