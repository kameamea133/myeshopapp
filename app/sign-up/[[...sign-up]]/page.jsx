import React from 'react'
import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <>
    <div className='p-10 mt-10'>
        <SignUp />
    </div>
    </>
  )
}

export default SignUpPage