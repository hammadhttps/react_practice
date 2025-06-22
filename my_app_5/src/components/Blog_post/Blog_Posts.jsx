 import React, { useState, useEffect } from "react";
import List from './List';
import Details from "./Details";
import { blogPosts } from "./data";

const Blog_Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setPosts(blogPosts);
        }, 500)
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            {selectedPost
                ? (<Details post={selectedPost} goBack={() => setSelectedPost(null)} />)
                : (<List posts={posts} onSelect={setSelectedPost} />)}
        </div>
    );
}

export default Blog_Posts;