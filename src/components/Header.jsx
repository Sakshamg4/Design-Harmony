import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='header font-[CustomFont]'>
      <div className='header-container flex flex-col md:flex-row items-center justify-between px-4 md:px-9 py-4 md:py-6'>
        <div className='header-logo flex items-center'>
          <h1 className='text-white text-xl md:text-2xl font-bold tracking-wider cursor-pointer hover:text-orange-400 transition-colors whitespace-nowrap'>
            Design harmony.
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden absolute right-4 top-4 text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className='flex flex-col md:flex-row items-center md:space-x-6 w-full md:w-auto'>
          {/* Navigation Menu */}
          <div className={`header-menu w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
            <ul className='flex flex-col md:flex-row items-center gap-6 md:gap-8 cursor-pointer font-semibold text-white text-sm md:text-base'>
              {['User Cases', 'AI Design', 'Templates', 'Resources', 'Pricing','Video Editing', 'Why Visily?'].map((item, index) => (
                <li key={index} className={`${index === 6 ? 'text-orange-500' : ''} py-2.5 md:py-0 hover:text-orange-400 transition-colors whitespace-nowrap`}>{item}</li>
              ))}
            </ul>   
          </div>

          {/* Buttons */}
          <div className={`header-buttons w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block flex flex-col md:flex-row items-center gap-5 mt-6 md:mt-0`}>
            <button className='w-full md:w-auto bg-white text-blue-600 font-bold text-sm md:text-base px-6 py-2.5 rounded-md cursor-pointer mb-2 md:mb-0 md:mr-4 hover:bg-gray-100 transition-colors'>
              Log in
            </button>
            <button className='w-full md:w-auto bg-blue-600/50 text-white hover:bg-blue-600 transition-all duration-300 font-bold text-sm md:text-base px-6 py-2.5 rounded-md cursor-pointer'>
              Sign Up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header