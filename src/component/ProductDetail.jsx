import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../api';
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useStateContex } from '../context/StateContex';
const ProductDetail = () => {
    const {dispatch} = useStateContex();
    const {id} =useParams()
    const [product , setProduct] = useState({});
    const [productsCategory , setProductsCategory]= useState([]);
    const getDetailProduct = async ()=>{
        const data = await getData(`/products/${id}`);
        setProduct(data);
    }
    const getCategory = async ( ) => {
        const datas=(await getData(`/products/category/${product.category}`))
         const filterData =datas?.filter((item) => item.id !== product.id)
       // console.log(filterData);
         setProductsCategory(filterData);
    }
    useEffect(() => {
        getDetailProduct();
      }, [id]);
      
    useEffect(()=>{
        //getDetailProduct()
        getCategory()
    },[product , productsCategory])
  return (
    <div className="">
        <div className=" border-2 my-20 mt-2 w-2/5 mx-auto p-5 hover:shadow-xl transform transition hover:scale-105">
    <img src={product?.image} alt="" className='h-[200px] mx-auto my-3' />
    <h1 className='text-header font-bold tracking-wider my-3'>{product?.title}</h1>
    <h3>Description</h3>
    <p className='font-header leading-6'>{product?.description}</p>
    <div className="flex items-center gap1">
    <AiFillStar className="text-danger"/>
    <small className='text-info font-semibold'>{product?.rating?.rate}</small>
    </div>
    <div className="">
    <p className='text-header font-semibold text-xl'>${product?.price}</p>
    </div>
    
<div className="mt-3">
<button onClick={()=>dispatch({type:"Add-Cart" , payload:product})} className='bg-info text-primary px-5 py-2 rounded shadow-lg transform transition hover:scale-90'>Add To Card</button>
    <Link to='/success'>
    <button className='bg-header ml-3 text-primary px-5 py-2 rounded shadow-lg transform transition hover:scale-90'>Buy Now</button>
    </Link>
</div>
    


    </div>
    <div className="my-20 mx-auto">
    <h1 className="text-2xl font-semibold text-header">You may also like.</h1>
    <div className="flex flex-wrap gwp-7 my-10 mx-auto">
        {productsCategory?.map(item=>(
        
        <div
        //  onClick={()=>setProduct(item)}
          key={item.id}>
            <img src={item?.image} className='h-52 border-2 shadow-lg p-5 rounded' alt="" />
            <p className='text-secondary font-semibold mt-1'>${item?.price}</p>
        </div>
        ))}
    </div>
</div>
    </div>

  )
}

export default ProductDetail