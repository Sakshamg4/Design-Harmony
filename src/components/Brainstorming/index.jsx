import React from 'react'
import Breadcrumb from './Breadcrumb'
import HeroSection from './HeroSection'
import VideoSection from './VideoSection'
import IdeasFlow from './IdeasFlow'
import TextToDiagram from './TextToDiagram'
import Templates from './Templates'
import ScreenshotDesign from './ScreenshotDesign'
import videoBrainStorm from "../../assets/BRAINSTORM-compressed.mp4"

const Brainstorming = () => {
  return (
    <div className="w-full min-h-screen">
      <Breadcrumb />
      <HeroSection />
      <VideoSection videoSrc={videoBrainStorm} />
      <IdeasFlow />
      <TextToDiagram />
      <Templates />
      <ScreenshotDesign />
    </div>
  )
}

export default Brainstorming