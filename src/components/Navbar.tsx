import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Carticon from './Carticon'
import Image from 'next/image'

const Navbar = () => {
  const user = false
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between border-b-2 border-b-red-500 uppercase'>
      {/*LEFT MENU*/}
      <div className='hidden md:flex gap-4'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/">Contact</Link>
      </div>
      {/*LOGO*/}
      <div className='text-xl'>
        <Link href="/">Massimo</Link>
      </div>
      {/*MOBILE MENU*/}
      <div className='md:hidden'> 
          <Menu/>   
      </div>
      {/*RIGHT MENU*/}
     <div className='hidden md:flex gap-4 items-center'>
      <div className='flex items-center gap-2 cursor-pointer'>
        <Image src="/phone.png" alt="" width={20} height={20}/>
        <span>123 456 78</span>
      </div>
        {
        !user? (<Link href="/login">Login</Link>):(
        <Link href="/orders">Orders</Link>)
        }
        <Carticon/>
      </div>
    </div>
  )
}

export default Navbar