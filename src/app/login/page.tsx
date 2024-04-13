import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <div className=''>
      {/*BOX*/}
      <div className=''>
        {/*IMAGE CONTANER*/}
        <div className='relative'>
          <Image src="/loginBg.png" alt='' fill/>
        </div>
        {/*FORM CONTAINER*/}
        <div className=''>
          <h1 className=''>Welcome</h1>
          <p className=''>Log into your account or create a new one using social buttons</p>
          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
            <Image src="/google.png" alt='' width={20} height={20} className='object-contain'/>
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default LoginPage 