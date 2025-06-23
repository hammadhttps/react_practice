import React from "react";
import { UseCart } from "./UseCart";


function ProductModal({product,onClose}){

    const {dispatch}=UseCart();

    const handleAdd=()=>{
        dispatch({type:"ADD",product});
        onClose();
    };
    
    return(
     <div style={{
        position:"fixed",
        top:50,
        left:'50%',
        transform:'translateX(-50%)',
        backgroundColor:'#fff',
        padding:20,
        border:'1px solid #ccc',
        zIndex:1000
     }}>
     <button onClick={onClose}>❌ Close</button>
     <h2>{product.name}</h2>
     <img src={product.image} alt={product.name} width='100%'/>
     <p>{product.description}</p>
     <p><b>${product.price.toFixed(2)}</b></p>
     <button onClick={handleAdd}>Add to Cart</button>
     </div>
        
    );

}

export default ProductModal;
