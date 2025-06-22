import React from "react";
import CommentSection from "./CommentSection";


const Details=({post,goBack})=>{
    return (
        <div>
            <button onClick={goBack}>← Back</button>
            <h2>{post.title}</h2>
            <h2>{post.author}</h2>
            <h3>{post.category}</h3>
            <hr />
            <CommentSection postID={post.id}/>
        </div>
    );

}

export  default Details;