import React,{createContext,useContext} from "react";
import { useReducer } from "react";

export const CartContext=createContext();


function cartReducer(state,action){
    switch(action.type){
        case 'ADD':
            return [...state,action.product];
            case 'REMOVE':
                return state.filter(item=>item.id!==action.id);
                default:
                    return state;
                    }
                }

                
export function CartProvider({children})
{
    const [cart, dispatch] = useReducer(cartReducer, []);
    return(
        <CartContext.Provider value={{cart,dispatch}}>
            {children}
        </CartContext.Provider>
    );
}
