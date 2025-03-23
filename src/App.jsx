import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Video from './components/Video'

const App = () => {
  return (

    <>
    <div className='w-full h-auto bg-[#1b0755]'>
        <div className='w-full h-full bg-[url("./assets/hero.png")] bg-cover bg-center bg-no-repeat'>
            <Header />
            <Hero />
            <Video />
        </div>
    </div>
    </>
  )
}

export default App