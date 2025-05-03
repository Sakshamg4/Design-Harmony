import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = {
    'Use Cases': [
      { name: 'Brainstorming', path: '/use-cases/brainstorming' },
      { name: 'Wireframing', path: '/use-cases/wireframing' },
      { name: 'Prototyping', path: '/use-cases/prototyping' },
      { name: 'Collaboration', path: '/use-cases/collaboration' }
    ],
    'AI Design': [
      { name: 'Screenshot to Design', path: '/ai-design/screenshot' },
      { name: 'Sketch to Design', path: '/ai-design/sketch' },
      { name: 'Magic Theme', path: '/ai-design/magic-theme' },
      { name: 'Design Assistant', path: '/ai-design/assistant' },
      { name: 'Text to Diagram', path: '/ai-design/text-diagram' },
      { name: 'Text to Design', path: '/ai-design/text-design' }
    ],
    'Templates': [
      { name: 'Design templates', path: '/templates/design' },
      { name: 'Premade Themes', path: '/templates/themes' },
      { name: 'Smart Components', path: '/templates/components' },
      { name: 'UI Presets', path: '/templates/presets' },
      { name: 'Images & Icons', path: '/templates/resources' }
    ],
    'Resources': [
      { name: 'Help Center', path: '/resources/help' },
      { name: 'Explore Visily', path: '/resources/explore' },
      { name: 'FAQs', path: '/resources/faqs' },
      { name: 'Blog', path: '/resources/blog' },
      { name: 'Release notes', path: '/resources/releases' }
    ],
    'Pricing': [{ name: 'View Plans', path: '/pricing' }]
  };

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const navigate = useNavigate();

  return (
    <div className='header font-[CustomFont] fixed w-full top-0 z-50 bg-[#0f172a]/80 backdrop-blur-lg'>
      <div className='header-container flex flex-col md:flex-row items-center justify-between px-4 md:px-9 py-4 md:py-6'>
        <div className='header-logo flex items-center'>
          <Link to="/" className='text-white text-xl md:text-2xl font-bold tracking-wider cursor-pointer hover:text-orange-400 transition-colors whitespace-nowrap'>
            Design Harmony
          </Link>
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
              {Object.entries(menuItems).map(([item, subItems], index) => (
                <li 
                  key={index} 
                  className='relative group'
                >
                  <div 
                    className={`py-2.5 md:py-0 hover:text-orange-400 transition-colors whitespace-nowrap flex items-center gap-1 ${
                      Array.isArray(subItems) ? 'cursor-pointer' : ''
                    }`}
                    onMouseEnter={() => handleMouseEnter(item)}
                  >
                    {item}
                    {Array.isArray(subItems) && (
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                  {Array.isArray(subItems) && activeDropdown === item && (
                    <div 
                      className="absolute left-0 mt-2 w-56 bg-white/30 backdrop-blur-md rounded-xl shadow-xl py-2 z-50"
                      onMouseEnter={() => handleMouseEnter(item)}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      <div className="py-1">
                        {subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path || '#'}
                            className="block px-4 py-2.5 text-sm text-gray-200 hover:bg-white/10 hover:text-orange-400 transition-all duration-200"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {subItem.name || subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>   
          </div>

          {/* Buttons */}
          <div className={`header-buttons w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block flex flex-col md:flex-row items-center gap-5 mt-6 md:mt-0`}>
            <button className='w-full md:w-auto bg-white/10 backdrop-blur-2xl text-white font-bold text-sm md:text-base px-6 py-2.5 rounded-xl cursor-pointer mb-2 md:mb-0 md:mr-4 hover:bg-white/20 transition-all duration-300'>
              Log in
            </button>
            <button className='w-full md:w-auto bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 font-bold text-sm md:text-base px-6 py-2.5 rounded-xl cursor-pointer'>
              Sign Up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header