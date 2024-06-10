'use client'
import React, {useEffect, useState} from 'react'
import Product from '../components/Product';

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(json => setProducts(json))
          .catch(error => console.error('Error fetching products:', error));
      }, []);
     

  return (
    <div>
        <div className="shopTitle">
            <h1 className='mt-[100px] text-center text-2xl'>My "Boutique"</h1>
            <div className='w-[100%] h-auto grid grid-cols-4 gap-4 place-items-center'>
                {products.map((product) => (
                    <div key={product.id} className="productCard">
                    <Product image={product.image} title={product.title} price={product.price} description={product.description}/>
            </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ShopPage