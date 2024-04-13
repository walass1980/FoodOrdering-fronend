import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <div className=''>
      {/*BOX*/}
      <div className=''>
        {/*IMAGE CONTANER*/}
        <div className=''>
          <Image src="/loginBg.png" alt='' fill/>
        </div>
        {/*FORM CONTAINER*/}
        <div className=''>
          <h1 className=''>Welcome</h1>
          <p className=''>Log into your account or create a new one using social buttons</p>
          <button className=''>
            <Image src="/google.png" alt='' width={20} height={20} />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default LoginPage 