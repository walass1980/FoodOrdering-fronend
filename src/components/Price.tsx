import React from 'react'

type Props = {
  price:number
  id:number
  options?: { title: string; additionalPrice: number } []
}
const Price = ({price,id,options}:Props) => {
  return (
    <div>
    <h2>${price.toFixed(2)}</h2>
    {/*OPTION CONTAINER*/}
    <div className=''>
     {options?.map(option=>(
     <button className='' key={option.title}>{option.title}</button> 
     ))}
    </div>
    {/*QUANTITY AND ADD BUTTON*/}
    <div className=''>
    {/*QUANTIYI*/}
     <span>Quantity</span>
     <div>
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