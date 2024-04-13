import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProduct = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 flex flex-col h-screen justify-around text-red-500 md:flex-row items-center gap-8'>
     {/*IMAGE CONTAINER*/}
     {singleProduct.img && (<div className='relative w-full h-1/2 md:h-[70%]'>
      <Image src={singleProduct.img} key={singleProduct.id} alt='' className='object-contain' fill/>
     </div>
    )}
     {/*TEXT CONTAINER*/}
     <div className='h-1/2 flex flex-col gap-4 md:h-[70%] justify-center md:gap-6 xl:gap-8'>
     <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{singleProduct.title}</h1>
     <p className=''>{singleProduct.desc}</p>
     <Price id={singleProduct.id} price={singleProduct.price} options={singleProduct.options}/>
     </div>
    </div>
  )
}

export default SingleProduct