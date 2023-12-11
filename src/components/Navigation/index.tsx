import React from 'react'
import { Logo } from '../shared/Logo';
import Link from 'next/link';

function Navigation() {
  const navlinks = [
    {text:"Home", path: "/home"},
    {text:"Shop", path: "/shop"},
    {text:"About", path: "/about"},
    {text:"Contact", path: "/contact"},
  ]
  return (
    <div className='flex flex-row w-full h-[100px] bg-white sticky'>
        <Logo />
        <div className='flex flex-row items-center'>
          {navlinks.map((item, index)=> (
            <Link className='flex text-black' href={item.path} key={index}>{item.text}</Link>
          ))}
        </div>
    </div>
  )
}

export default Navigation;