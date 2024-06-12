'use client'

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { BiCart } from "react-icons/bi";
import Button from 'react-bootstrap/Button'; 
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../CartContext';

export default function Header() {
  const { isSignedIn } = useAuth(); 
  const [show, setShow] = useState(false);
  const cart = useContext(CartContext)

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const itemsCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)


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
          <Button onClick={handleShow}>Cart ({itemsCount} items) </Button>
        </div>
        <div className="text-white">
          {!isSignedIn && (
            <>
              <Link href="/sign-in" className='text-gray-300 hover:text-white mr-4'>Sign In</Link>
              <Link href="/sign-up" className='text-gray-300 hover:text-white mr-4'>Sign Up</Link>
            </>
          )}
          {isSignedIn && (
            <Link href="/profile" className='text-gray-300 hover:text-white mr-4'>Profile</Link>
          )}
          <div className="ml-auto">
            <UserButton afterSignOutUrl='/' />
          </div>
        </div>
      </nav>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {itemsCount > 0 ? 
        <>
            <p>Items in your cart:</p>
            {cart.items.map((currentItem, idx) => (
              <h1 key={idx}>{currentItem.title}</h1>

            ))}
              <h1>Total: {cart.getTotalcost().toFixed(2)}</h1>
              <Button variant='success'>Purchase items!</Button>
        </>
        :

            <h1>This is the modal body</h1>
        }
        </Modal.Body>
      </Modal>
    </div>
  );
}
