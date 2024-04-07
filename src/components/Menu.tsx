"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const links =[
    {id:1, title: "Homepage", url:"/"},
    {id:1, title: "Menu", url:"/menu"},
    {id:1, title: "Workink Hours", url:"/"},
    {id:1, title: "Contact", url:"/"},
]
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
        {!open? (<Image src="/open.png" alt='' width={20} height={20} onClick={()=>setOpen(true)}/>)
        :(<Image src="/close.png" alt='' width={20} height={20} onClick={()=>setOpen(false)}/>
        )}
      <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-xl gap-8'>
     {links.map((item)=>(
        <Link href={item.url} key={item.id}>{item.title}</Link>
     ))}
      </div>  
    </div>
  )
}

export default Menu