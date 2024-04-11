import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map(item=>(
        <Link className='flex flex-col justify-between group w-full h-[60vh] p-4 border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 even:bg-fuchsia-50' href={`/product/${item.id}`} key={item.id}>
         {/*IMAGE CONTAINER*/}
         {item.img && (
         <div className='relative h-[80%]'>
         <Image src={item.img} alt='' fill className='object-contain'/>
         </div>
        )}
         {/*TEXT CONTAINER*/}
         <div className='flex items-center justify-between font-bold'>
        <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
        <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
        <button className='bg-red-500 hidden group-hover:block uppercase text-white p-2 rounded-md'>Add to Cart</button>
         </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage