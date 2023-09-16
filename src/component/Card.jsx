import React from 'react'
import {AiFillStar} from 'react-icons/ai'
const Card = ({product}) => {
  return (
   
<div className="w-80 border-2 p-5 hover:shadow-xl transform transition hover:scale-105">
<img src={product?.image} alt="" className='h-[200px] mx-auto my-3' />
<h3 className='text-header font-bold tracking-wider my-3'>{product?.title?.substring(0,25)}...</h3>
<div className="flex items-center gap1">
<AiFillStar className="text-danger"/>
<small className='text-info font-semibold'>{product?.rating?.rate}</small>
</div>
<p className='text-secondary text-xl'>${product?.price}</p>
<button className='bg-info text-primary px-5 py-2 rounded shadow-lg transform transition hover:scale-90'>Add To Card</button>
<button className='bg-header text-primary px-5 py-2 rounded shadow-lg transform transition hover:scale-90 ml-2'>Detail</button>
</div>
    
  )
}

export default Card