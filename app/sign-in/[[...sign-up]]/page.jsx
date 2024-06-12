import React from 'react'
import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <>
    <div className='p-10 mt-10'>
        <SignIn />
    </div>
    </>
  )
}

export default SignInPage