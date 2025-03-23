import React from 'react'
import FastMarquee from 'react-fast-marquee'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import img9 from '../assets/9.png'
import img10 from '../assets/10.png'
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'

const Marquee = () => {
  const firstRow = [img1, img2, img3, img4, img5, img6];
  const secondRow = [img7, img8, img9, img10, img11, img12];

  return (
    <div className='w-full py-10 overflow-hidden bg-gradient-to-b from-[#1e293b] to-[#334155]'>
      {/* First Marquee - Moving Left */}
      <FastMarquee
        speed={30}
        direction="left"
        gradient={false}
        pauseOnHover={true}
        className="mb-8"
      >
        {[...firstRow, ...firstRow].map((img, index) => (
          <img 
            key={index}
            src={img}
            alt={`client-${index + 1}`}
            className='h-10 w-auto object-contain mx-12 opacity-100 brightness-200 hover:brightness-150 transition-all duration-300'
          />
        ))}
      </FastMarquee>

      {/* Second Marquee - Moving Right */}
      <FastMarquee
        speed={30}
        direction="right"
        gradient={false}
        pauseOnHover={true}
      >
        {[...secondRow, ...secondRow].map((img, index) => (
          <img 
            key={index}
            src={img}
            alt={`client-${index + 7}`}
            className='h-10 w-auto object-contain mx-12 opacity-100 brightness-200 hover:brightness-150 transition-all duration-300'
          />
        ))}
      </FastMarquee>
    </div>
  )
}

export default Marquee