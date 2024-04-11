import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const MenuPage= () => {
  return (
    <div className='p-4 lg:p-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
    {menu.map(category=>(
     <Link href={category.slug} 
     key={category.id} 
     className='' 
     style={{backgroundImage:`url(${category.img})`}}>
      <div className=''>
        <div className=''>
          <h1>{category.title}</h1>
          <p>{category.desc}</p>
          <button className=''>Explore</button>
        </div>
      </div>
     </Link>
    ))}
    </div>
  )
}

export default MenuPage