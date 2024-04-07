import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between'>
      {/*LOGO*/}
      <div>
        <Link href="/">Massimo</Link>
      </div>
      {/*MOBILE MENU*/}
      <div> 
          <Menu/>   
      </div>
    </div>
  )
}

export default Navbar