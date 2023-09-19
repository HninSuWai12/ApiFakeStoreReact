import React from 'react';
import { useStateContex } from '../context/StateContex'; 
// Correct the import path and name
import { AiFillDelete } from 'react-icons/ai';
const Cart = () => {
    const { state , dispatch } = useStateContex();
    const cartData = state.cart;
    //console.log(cartData);

  //console.log(cart);
  
  return (
    <div className="flex items-center gap-5">
      {cartData?.map(item => (
        <div key={item.id} className="flex items-center gap-4" >
          <img src={item?.image} className='h-32 border-2 rounded p-4' alt="" />
          <div className="">
            <h3>{item?.title}</h3>
            <p>{item?.price}</p>
            <p>{item?.qty}</p>
            <button onClick={()=>dispatch({type:"Remove-From-Card" , payload:item})}><AiFillDelete/></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
