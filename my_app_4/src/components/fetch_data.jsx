import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Fetch_data = () => {
    const [data,setdata]=useState([]);
  
    useEffect(()=>{
        async function getData(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>
            response.json())
            .then(data =>
                setdata(data))
            }

     getData();
    },[]);

  return (
    <div>
      <ul>
        {data.map(todo=>(
            <section key={todo.id}>
           <li >title:{todo.title}</li>
           <li >body:{todo.body}</li>
           </section>

        ))}
      </ul>
    </div>
  )
}

export default Fetch_data