import React from 'react'

const Product = ({image, title, price}) => {
  return (
    <div className='rounded-2xl w-[300px] h-[350px] m-[100px] flex flex-col items-center justify-center'>
        <img  src={image} alt="photo" className='w-[200px]'/>
        <div className='text-center'>
        <p>hello</p>
            <p>{title}</p>
            <p>{price}</p>
        </div> 
        <button className='bg-transparent border-2 border-gray-900 min-w-[100px] px-2.5 py-1.5 rounded-[15px]'>Add To Cart</button>
    </div>
  )
}

export default Product