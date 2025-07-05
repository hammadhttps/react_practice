
const Posts = () => {
      const posts = [
        { id: 1, title: "First Post", content: "This is the first post." },
        { id: 2, title: "Second Post", content: "This is the second post." },
        { id: 3, title: "Third Post", content: "This is the third post." },
        {id: 2, title: "Second Post", content: "This is the second post." },
        {id: 2, title: "Second Post", content: "This is the second post." },
        {id: 2, title: "Second Post", content: "This is the second post." },
        {id: 2, title: "Second Post", content: "This is the second post." },
        {id: 2, title: "Second Post", content: "This is the second post." },
        {id: 2, title: "Second Post", content: "This is the second post." },
        {id: 2, title: "Second Post", content: "This is the second post." },
        {id: 2, title: "Second Post", content: "This is the second post." },
        {id: 2, title: "Second Post", content: "This is the second post." },
        {id: 2, title: "Second Post", content: "This is the second post." },
    ];
  return (
  

    <ul>
        {posts.map(post => (
            <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </li>
        ))}
    </ul> )
}

export default Posts