import React from 'react';
import { useStateContex } from '../context/StateContex'; 
import Empty from './Empty';
// Correct the import path and name
import { AiFillDelete } from 'react-icons/ai';
const Cart = () => {
    const { state , dispatch } = useStateContex();
    const cartData = state.cart;
    //console.log(cartData);

  //console.log(cart);
  
  return (
    <div className='grid grid-cols-4'>
      <div className="flex items-center gap-5">
      {cartData?.map(item => (
        <div key={item.id} className="flex flex-row flex-wrap items-center gap-4" >
          <img src={item?.image} className='h-32 border-2 rounded p-4' alt="" />
          <div className="">
            <h3>{item?.title}</h3>
            <p>{item?.price}</p>
            <p>{item?.qty}</p>
            <button onClick={()=>dispatch({type:"Remove-From-Card" , payload:item})}><AiFillDelete/></button>
          </div>
        </div>
      ))}
       <div className="">
    <Empty/>
  </div>
  <div className="col-span-1">
    <div className="">
      <h1 >Total Price_10000</h1>
      <button className='px-5 py-2 bg-info text-primary rounded shadow-lg'>Check Out</button>
    </div>
  </div>
    </div>
   
    </div>
  );
}

export default Cart;
