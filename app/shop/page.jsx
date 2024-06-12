'use client'
import React, {useEffect, useState} from 'react'
import Product from '../components/Product';
import { itemsList } from '../itemsList';
import CartProvider from '../CartContext';


const ShopPage = () => {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //       .then(res => res.json())
    //       .then(json => setProducts(json))
    //       .catch(error => console.error('Error fetching products:', error));
    //   }, []);
     

  return (
    
        <div className="shopTitle">
            <h1 className='mt-[100px] text-center text-2xl'>My "Boutique"</h1>
            <div className='w-[100%] h-auto grid grid-cols-4 gap-4 place-items-center'>
                {itemsList.map((item) => (
                    <div key={item.id} className="productCard">
                    <Product image={item.image} title={item.title} price={item.price} description={item.description} id={item.id}/>
            </div>
                ))}
            </div>
        </div>
    
  )
}

export default ShopPage