import React from "react";
import ProductCard from "./ProductCard";

function Product_list({products,onSelect})
{
    return(
        <div style={{
            display:'flex',
            gap:20
        }}>
            {products.map(product=>(
                <ProductCard key={product.id}
                 product={product}
                 onClick={()=>onSelect(product)}/>
            ))}
        </div>
    );

}

export default Product_list;