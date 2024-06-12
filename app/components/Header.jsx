'use client';

import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { BiCart } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../CartContext';
import CartItem from './CartItem';
import MyLogo from "../../public/next.svg"

export default function Header() {

  // Use authentication hook to get the sign-in status
  const { isSignedIn } = useAuth();

  
  const [show, setShow] = useState(false);
 
   // Get the cart context
  const cart = useContext(CartContext);

  

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

   // Calculate the total number of items in the cart
   const itemsCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

   // Function to handle the checkout process
   const checkout = async () => {
     try {
       const response = await fetch('http://localhost:4000/checkout', {
         method: "POST",
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({ items: cart.items })
       });
       const data = await response.json();
       if (data.url) {
         window.location.assign(data.url); // Redirect to the checkout URL
       }
     } catch (error) {
       console.error('Error during fetch:', error);
     }
   };
 
   // Handle the purchase button click
   const handlePurchaseClick = () => {
     if (isSignedIn) {
       checkout(); n
     } else {
       cart.clearCart(); 
     }
   };
 
   // clear the cart when the user signs out
   useEffect(() => {
     if (!isSignedIn) {
       cart.clearCart();
     }
   }, [isSignedIn]);

  return (
    <div className=' top-0 right-0 left-0 fixed z-10 p-3'>
      <nav className='bg-transparent/20 py-4 px-6 flex items-center justify-between mb-5 border rounded-lg'>
        <div className='flex items-center'>
          <Link href="/">
            <div className="text-lg uppercase font-bold text-white">
              <Image src="https://i.postimg.cc/wvz9TjhJ/my-Eshop-Logo.png" className='w-[80px] rounded-full'/>
            </div>
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <Link href='/shop' className='mx-4 text-white no-underline  px-4 text-2xl border rounded-xl font-bold tracking-widest hover:bg-gray-500/70'>Shop</Link>
          {itemsCount > 0 ?
          <><Button onClick={handleShow}>Cart ({itemsCount} items)</Button></>
          :
          ""
          }
          
        </div>
        <div className="text-white flex">
          {!isSignedIn && (
            <>
              <Link href="/sign-in" className='text-white hover:text-red-900 mr-4'>Sign In</Link>
              <Link href="/sign-up" className='text-white hover:text-gray-300 mr-4'>Sign Up</Link>
            </>
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
              {cart.items.map((currentItem, id) => (
                <CartItem key={id} id={currentItem.id} quantity={currentItem.quantity} />
              ))}
              <h1>Total: {cart.getTotalcost().toFixed(2)}</h1>
              <Button variant='success' onClick={handlePurchaseClick}>Purchase items!</Button>
            </>
            :
            <h1>There is no items in your cart</h1>
          }
        </Modal.Body>
      </Modal>
    </div>
  );
}
