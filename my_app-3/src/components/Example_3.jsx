import React, { useEffect, useState } from 'react'

const Example_3 = () => {
    const [name,setname]=useState(()=>{
        const savednum=localStorage.getItem('name')
        return savednum?JSON.parse(savednum):" ";
    })

    const handle_change=(event)=>
    {
        setname(event.target.value);
    }

    const handle_clear=()=>{
        setname("");
    }

     useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(name))
     },[name])

  return (
   <div>
    <h1>Your Name:{name}</h1>
    <input type="text" value={name} onChange={handle_change} placeholder='Enter your Name' />
      <button onClick={handle_clear}>Clear</button>
   </div>
  )
}

export default Example_3