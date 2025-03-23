import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Video from './components/Video'
import Marquee from './components/Marquee'

const App = () => {
  return (
    <>
      <div className='w-full h-auto bg-gradient-to-b from-[#0f172a] to-[#1e293b]'> 
        <div className='w-full h-full bg-[url("./assets/hero.png")] bg-cover bg-center bg-no-repeat bg-opacity-90'>
          <div className='backdrop-blur-sm'>
            <Header />
            <Hero />
            <Video />
            <Marquee />
          </div>
        </div>
      </div>
    </>
  )
}

export default App