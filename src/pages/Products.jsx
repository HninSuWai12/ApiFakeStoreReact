import React, { useEffect, useState } from 'react'
import Card from '../component/Card';
import { useStateContex } from '../context/StateContex'

const Products = () => {
  const {state:{productList} , search } = useStateContex();
  const [products , setProducts] = useState([]);

  useEffect(()=>{
    setProducts(productList)
  },[productList , search])
  //console.log(productList);
  return (
    <div className='flex gap-10 flex-wrap justify-center my-10'>
      {products?.map(product => (<Card key={product.id} product={product} />))}
    </div>
  )
}

export default Products