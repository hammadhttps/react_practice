import React, { useEffect, useState } from 'react'

const Custome_hook = () => {
    const [data,setdata]=useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();
            setdata(data);
        };
        fetchData();
    }, []);
  return (
    <div>
        {data && (
            <p key={data.id}>{data.title}</p>
        )}
    </div>
  )
}

export default Custome_hook;