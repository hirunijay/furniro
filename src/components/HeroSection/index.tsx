import React from 'react'
import Image from 'next/image';
import HeroImg from "@/assets/images/hero-section-image.jpg"

function HeroSection() {
  return (
    <div className='flex lg:h-[700px] items-center relative'>
      <Image src={HeroImg} alt='hero section image' className='object-cover'/>      
    </div>
  )
}

export default HeroSection;