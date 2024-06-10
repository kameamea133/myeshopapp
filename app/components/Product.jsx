import React from 'react'

const Product = ({image, title, price, description}) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden relative'>
        <img  src={image} alt="photo" className='w(full object-cover h-64'/>
        <div className='p-4'>
        
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-white bg-red-500 rounded-md p-2 absolute top-2 right-2 mb-2'>{price}€</p>
            <p className='text-gray-700 mb-4 text-sm'>{description}</p>
        <button className='bg-green-500 hover:bg-green-600 p-2 rounded-md text-white'>Add To Cart</button>
        </div> 
    </div>
  )
}

export default Product