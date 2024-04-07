import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Carticon from './Carticon'

const Navbar = () => {
  const user = false
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between border-b-2 border-b-red-500 uppercase'>
      {/*LEFT MENU*/}
      <div className='hidden md:flex gap-4'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
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
      <div className='hidden md:flex gap-4'>
        {
        !user? (<Link href="/">Login</Link>):(
        <Link href="/orders">Orders</Link>)}
        <Carticon/>
      </div>
    </div>
  )
}

export default Navbar