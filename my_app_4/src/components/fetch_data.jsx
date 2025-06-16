import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Fetch_data = () => {
    const [data,setdata]=useState([]);
  
    useEffect(()=>{
        async function getData(){
        fetch('https://jsonplaceholder.typicode.com/todos')
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
           <li key={todo.id} >{todo.title}</li>

        ))}
      </ul>
    </div>
  )
}

export default Fetch_data