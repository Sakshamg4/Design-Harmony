import React from 'react'
import Breadcrumb from './Breadcrumb'
import HeroSection from './HeroSection'
import VideoSection from './VideoSection'
import IdeasFlow from './IdeasFlow'
import videoBrainStorm from "../../assets/BRAINSTORM-compressed.mp4"

const Brainstorming = () => {
  return (
    <div className="w-full min-h-screen">
      <Breadcrumb />
      <HeroSection />
      <VideoSection videoSrc={videoBrainStorm} />
      <IdeasFlow />
    </div>
  )
}

export default Brainstorming