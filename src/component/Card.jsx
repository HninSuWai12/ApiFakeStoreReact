import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import { useStateContex } from '../context/StateContex'
const Card = ({product}) => {
  // console.log(product);
  const {dispatch} = useStateContex()
  return (
   
<div className="w-80 border-2 p-5 hover:shadow-xl transform transition hover:scale-105">
<img src={product?.image} alt="" className='h-[200px] mx-auto my-3' />
<h3 className='text-header font-bold tracking-wider my-3'>{product?.title?.substring(0,25)}...</h3>
<div className="flex items-center gap1">
<AiFillStar className="text-danger"/>
<small className='text-info font-semibold'>{product?.rating?.rate}</small>
</div>
<div className="">
<p className='text-header font-semibold text-xl'>${product?.price}</p>
</div>
<button onClick={()=>dispatch({type:"Add-Cart" , payload:product})} className='bg-info text-primary px-5 py-2 rounded shadow-lg transform transition hover:scale-90'>Add To Card</button>
<Link to={ `/detail/${product.id}` }>
<button className='bg-header text-primary px-5 py-2 rounded shadow-lg transform transition hover:scale-90 ml-2'>Detail</button>
</Link>
</div>
    
  )
}

export default Card