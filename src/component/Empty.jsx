import React from 'react'
import { useStateContex } from '../context/StateContex'

const Empty = () => {
  const {dispatch} = useStateContex();
  const handelremove = ()=>{
    dispatch({type:"Empty"});
  }
  return (
    <div onClick={handelremove}>
      To Remove Cards
    </div>
  )
}

export default Empty
