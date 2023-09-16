import React from 'react'
import{BiShoppingBag} from 'react-icons/bi'
import{FaSearch , FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useStateContex } from '../context/StateContex'
const Navbar = () => {
  const {search , setSearch} = useStateContex();
  return (
    <nav className='flex justify-between items-center bg-gray-50 shadow-md px-5 py-2 my-5 rounded'>
        <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
            <BiShoppingBag className='text-4xl text-danger'/>
            <h1 className='uppercase tracking-wider text-xl font-semibold text-header'>Gogo-shop</h1>
        </div>
        </Link>
        <div className="flex item-centers gap-3">
            <div className="flex items-center gap-2 bg-header text-white rounded px-4 py-2">
            <FaShoppingCart />
            <small>10</small>
            </div>
            <div className="flex items-center gap-2 border-2 rounded px-3 py-2">
            <FaSearch   />
            <input value={search} onChange={e=>setSearch(e.target.value)} type="text" className='outline-none bg-transparent' placeholder='Search...' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar