import React, { useState } from 'react'

const Example_2 = () => {
    const[rand,setrand]=useState(()=>{
        return Math.floor(Math.random()*100);

    })
    const genr=()=>{
        const new_num=Math.floor(Math.random()*100)
        setrand(new_num);
    }
  return (
    <div>
        <h1>Random Number:{rand}</h1>
        <button onClick={genr}>Generater</button>
    </div>
  )
}

export default Example_2