import React from "react";

const Item=({post,onClick})=>{
    return(
        <li onClick={onClick}  style={{cursor:'pointer',marginBottom:10
        }}>{post.title}</li>
    );

}

export  default Item;