import React, { useState } from 'react'

const Example_1 = () => {
    const [count,setcount]=useState(()=>{
        let count=10;
        return count;
    })
    const increment=()=>{
        setcount(count+1)
    }
  return (
     <div>
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
   </div>
  )
}

export default Example_1