import React from 'react'

type Props = {
  price:number
  id:number
  options?: { title: string; additionalPrice: number } []
}
const Price = ({price,id,options}:Props) => {
  return (
    <div>Price</div>
  )
}

export default Price