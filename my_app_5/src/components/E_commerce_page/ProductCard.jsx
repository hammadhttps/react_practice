import React from "react";

function ProductCard({product,onClick})
{
    return(
        <div style={{
            border: '1px solid black',
            width: '200px',
            height: '200px',
            cursor:'pointer',
            padding:10
        }} onClick={onClick}>
            <img src={product.image} alt={product.name} width="%100" />
            <h4>{product.name}</h4>
            <p>${product.price.toFixed(2)}</p>
        </div>
    );

}

export default ProductCard;