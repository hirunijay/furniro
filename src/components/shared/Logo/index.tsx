import React from 'react'
import Image from 'next/image'
import logoImg from "@/assets/images/logo.png";
import { Montserrat_Subrayada } from 'next/font/google';

const logo = Montserrat_Subrayada({ 
    subsets: ['latin'],
    weight:["700"],
    variable: '--font-logo',
  });

export const Logo = () => {
  return (
    <div className='flex flex-row items-center justify-start'>
        <Image src={logoImg} alt='logo' height={32} width={50} />
        <div className={`${logo.variable} text-3xl font-[700]`}>Furniro</div>
    </div>
  )
}
