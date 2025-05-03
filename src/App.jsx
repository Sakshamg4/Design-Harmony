import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ReactLenis, useLenis } from 'lenis/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Video from './components/Video'
import Marquee from './components/Marquee'
import VideoSection from './components/VideoSection'
import VideoSection2 from './components/VideoSection2'
import VideoSection3 from './components/Videosection3'
import VideoSection4 from './components/VideoSection4'
import KeepContentSafe from './components/KeepContentSafe'
import VideoCards from './components/VideoCards'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Brainstorming from './components/Brainstorming/index'

const App = () => {

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <Router>
      <ReactLenis root>
        <>
          <div className='w-full h-auto bg-gradient-to-b from-[#0f172a] to-[#1e293b]'>
            <div className='w-full h-full bg-[url("./assets/hero.png")] bg-cover bg-center bg-no-repeat bg-opacity-90'>
              <div className='backdrop-blur-sm'>
                <Header />
                <Routes>
                  <Route path="/" element={
                    <>
                      <Hero />
                      <Video />
                      <Marquee />
                      <VideoSection />
                      <Features />
                      <VideoSection2 />
                      <Testimonials />
                      <VideoSection3 />
                      <VideoSection4 />
                      <KeepContentSafe />
                      <VideoCards />
                      <AboutSection />
                    </>
                  } />
                  <Route path="/use-cases/brainstorming" element={<Brainstorming />} />
                </Routes>
                <Footer />
              </div>
            </div>
          </div>
        </>
      </ReactLenis>
    </Router>
  )
}

export default App