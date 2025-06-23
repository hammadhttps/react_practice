import React from "react";
import { UseCart } from "./UseCart";

const CartIcon=()=>{
    const {cart}=UseCart();
    return(
        <div style={{float:'right'}}>
            🛍️ Cart ({cart.length})
        </div>
    );
}


export default CartIcon;