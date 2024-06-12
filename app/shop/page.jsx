'use client'
import React, {useEffect, useState} from 'react'
import Product from '../components/Product';
import { itemsList } from '../itemsList';





const ShopPage = () => {
    
  return (
    <div>
    <h1 className='mt-[100px] text-center text-5xl my-10'>My "Boutique"</h1>
    <div className='w-[100%] h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {itemsList.map((item) => (
        <div key={item.id} className="flex justify-center items-stretch">
          <Product
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}
          />
        </div>
      ))}
    </div>
  </div>
    
  )
}

export default ShopPage