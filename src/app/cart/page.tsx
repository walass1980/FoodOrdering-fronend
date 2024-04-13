import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500'>
      {/*PRODUCT CONTAINER*/}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll'>
       {/*SINGLE ITEM*/}
       <div className='flex items-center justify-between mb-4'>
        <Image src="/temporary/p1.png" width={100} height={100} alt=''/>
        <div className=''>
          <h1 className='uppercase text-xl font-bold'>sicilian</h1>
          <span>Large</span>
        </div>
        <h2 className='font-bold'>$79.90</h2>
        <span className='cursor-pointer'>X</span>
       </div>
       <div className='flex items-center justify-between mb-4'>
        <Image src="/temporary/p1.png" width={100} height={100} alt=''/>
        <div className=''>
          <h1 className='uppercase text-xl font-bold'>sicilian</h1>
          <span>Large</span>
        </div>
        <h2 className='font-bold'>$79.90</h2>
        <span className='cursor-pointer'>X</span>
       </div>
       <div className='flex items-center justify-between mb-4'>
        <Image src="/temporary/p1.png" width={100} height={100} alt=''/>
        <div className=''>
          <h1 className='uppercase text-xl font-bold'>sicilian</h1>
          <span>Large</span>
        </div>
        <h2 className='font-bold'>$79.90</h2>
        <span className='cursor-pointer'>X</span>
       </div>
      </div>
      {/*PAYMENT CONTAINER*/}
      <div className='h-1/2 p-4 bg-fuchsia-50 gap-4 flex flex-col justify-center'>
       <div className='flex justify-between'>
        <span className=''>Subtotal (3 items)</span>
        <span className=''>$81.70</span>
        </div>
        <div className='flex justify-between'>
        <span className=''>Service Cost</span>
        <span className=''>$0.00</span>
        </div>
        <div className='flex justify-between'>
        <span className=''>Delivery Cost</span>
        <span className='text-green-700'>FREE</span>
        </div>
        <hr className=''/>
       <button className='bg-red-500 text-white p-3 rounded-md w-1/2'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage