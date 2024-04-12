import React from 'react'

type Props = {
  price:number
  id:number
  options?: { title: string; additionalPrice: number } []
}
const Price = ({price,id,options}:Props) => {
  return (
    <div className='flex flex-col gap-4'>
    <h2 className='text-2xl font-bold'>${price.toFixed(2)}</h2>
    {/*OPTION CONTAINER*/}
    <div className='flex gap-4'>
     {options?.map(option=>(
     <button className='ring-1 ring-red-400 rounded-md' key={option.title}>{option.title}</button> 
     ))}
    </div>
    {/*QUANTITY AND ADD BUTTON*/}
    <div className=''>
    {/*QUANTIYI*/}
     <span>Quantity</span>
     <div className=''>
        <button>{'<'}</button>
        <span>1</span>
        <button>{'>'}</button>
    {/*CART BUTTON*/}
    <button className="">Add to Cart</button>
     </div>
    </div>
    </div>
  )
}

export default Price