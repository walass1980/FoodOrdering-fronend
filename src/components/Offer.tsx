import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row'>
      {/*TEXT CONTAINER*/}
      <div className='flex-1'>
       <h1 className=''></h1>
       <p className=''></p>
       <button className=''>Order Now</button>
      </div>
      {/*IMAGE CONTAINER*/}
      <div className='relative w-full flex-1'>
      <Image src="/offerProduct.png" alt="" fill className='object-contain' />
      </div>
    </div>
  )
}

export default Offer