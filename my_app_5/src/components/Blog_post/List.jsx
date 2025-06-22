 import React from "react";
import Item from "./Item";

const List = ({ posts, onSelect }) => {
    if (posts.length === 0)
        return <p>Loading posts...</p>;
    return (
        <ul>
            {posts.map((post) => (
                <Item key={post.id} post={post} onClick={() => onSelect(post)} />
            ))}
        </ul>
    );
};

export default List;