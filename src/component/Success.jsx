import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center animate__backInDown ">
        <div className="bg-secondary p-20 rounded shadow-lg mt-10  ">
    <h1>Thanks for Purchase</h1>
    <button onClick={()=> navigate('/')} className='bg-danger text-primary px-5 py-2 sahdow-lg uppercase rounded '>go Shopping</button>
</div> 
    </div>
 )
}

export default Success