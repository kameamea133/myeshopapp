import React from 'react'
import Link from 'next/link'
import { auth} from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';
import { BiCart } from "react-icons/bi";

export default function Header() {
    const { userId } = auth();
    
  return (
    <div>
        <nav className='bg-blue-700 py-4 px-6 flex items-center justify-between mb-5'>
        <div className='flex items-center'>
            <Link href="/">
            <div className="text-lg uppercase font-bold text-white">
                Clerk App
            </div>
            </Link>
        </div>
        <div className='flex'>
            <Link href='/shop' className='mx-4 text-white'>Shop</Link>
            <Link href="/cart"><BiCart size={30} fill='pink'/></Link>
        </div>
        <div className="text-white">
            {!userId && (
                <>
                    <Link href="/sign-in" className='text-gray-300 hover:text-white mr-4'>Sign In</Link>
            <Link href="/sign-up" className='text-gray-300 hover:text-white mr-4'>Sign Up</Link>
                </>
            )} 
            {userId && (
                <Link href="/profile" className='text-gray-300 hover:text-white mr-4'>Profile</Link>
            )}
            <div className="ml-auto">
                <UserButton afterSignOutUrl='/'/>
            </div>
        </div>
        </nav>
    </div>
  )
}
