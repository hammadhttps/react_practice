import { products } from "./Product";

import Product_list from "./Product_list";
import ProductModal from "./ProductModal";
import CartIcon from "./CartIcon";
import { useState } from "react";

function Ecommerce()
{
  const [selectedProduct,setSelectedPost]=useState(null);
  
  return(
    <div style={{padding:20}}>
        <h1>🛒 Mini Shop</h1>
        <CartIcon/>
        <Product_list products={products} onSelect={setSelectedPost}/>
        {selectedProduct&&(
            <ProductModal product={selectedProduct} onClose={()=>setSelectedPost(null)}/>
        )}
    </div>
  );
}


export default Ecommerce;