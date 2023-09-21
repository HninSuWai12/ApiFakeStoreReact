import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { getData } from '../api';

const StateContex = createContext();
export const StateContexProvider =({children})=>{
    const [productList , setProductList] = useState([]);
    const [search , setSearch] = useState("");

   const initialStste={
    products:[],
    cart:[],
   }
   const reducer = (state , action)=>{
    switch(action.type){
        case "GET-PRODUCTS":
            return {...state , products:action.payload};
            case "Add-Cart":
                // return {...state ,
                //      cart:[
                //     ...state.cart , {...action.payload , qty: 1}
                // ] };
                const item = action.payload;
                const isExisted = state.cart.find(c =>c.id === item.id)
                if(isExisted){
                    return{
                        ...state , cart:state.cart.map(c => c.id === item.id? {...item}:{...c})
                    } 
                }else{
                    return{
                        ...state , cart:[...state.cart ,{...item}]
                    }
                }
                case "Remove-From-Card":
                    return{...state , cart: state.cart.filter(item=>item.id !== action.payload.id)
                    }
                    case "Empty":
                        return{...state , cart:[]
                        }
            default:
                return state;
    }
   }
   const [state , dispatch]= useReducer(reducer , initialStste);

   const getProducts = async()=>{
    const data = await getData('/products');
    // dispatch({type:"GET-PRODUCTS" , payload:data})
    setProductList(data);
   }

   useEffect(()=>{getProducts()},[])

   useEffect(()=>{
         dispatch({type:"GET-PRODUCTS" , payload:productList})
    const filterProduct=productList.filter(pd=> pd.title.toLowerCase().includes(search.toLowerCase()));
    dispatch({type:"GET-PRODUCTS" , payload:filterProduct})


   },[productList , search])
   const data={state , search , setSearch , dispatch}
    return(
        <StateContex.Provider value={data}>
            {children}
        </StateContex.Provider>
    )
}
export const useStateContex = () => useContext(StateContex);
