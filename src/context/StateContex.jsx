import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { getData } from '../api';

const StateContex = createContext();
export const StateContexProvider =({children})=>{
    const [search , setSearch] = useState("");

   const initialStste={
    productList:[],
   }
   const reducer = (state , action)=>{
    switch(action.type){
        case "GET-PRODUCTS":
            return {...state , productList:action.payload};
            default:
                return state;
    }
   }
   const [state , dispatch]= useReducer(reducer , initialStste);
   const getProducts = async()=>{
    const data = await getData('/products');
    dispatch({type:"GET-PRODUCTS" , payload:data})
   }
   useEffect(()=>{getProducts()},[])
   const data={state , search , setSearch}
    return(
        <StateContex.Provider value={data}>
            {children}
        </StateContex.Provider>
    )
}
export const useStateContex = () => useContext(StateContex);
