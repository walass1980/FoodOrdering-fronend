import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProduct = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 flex flex-col h-screen justify-around text-red-500 md:flex-row'>
     {/*IMAGE CONTAINE*/}
     {singleProduct.img && (<div className='relative'>
      <Image src={singleProduct.img} key={singleProduct.id} alt='' className='object-contain' fill/>
     </div>
    )}
     {/*TEXT CONTAINER*/}
     <div className=''>
     <h1 className=''>{singleProduct.title}</h1>
     <p className=''>{singleProduct.desc}</p>
     <Price id={singleProduct.id} price={singleProduct.price} options={singleProduct.options}/>
     </div>
    </div>
  )
}

export default SingleProduct