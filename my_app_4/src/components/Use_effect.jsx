import React from 'react'
import { useState,useEffect } from 'react';

const Use_effect = () => {

    const [value,setvalue]=useState(0);
    const [count,setcount]=useState(0);
    useEffect(()=>{
      console.log("call use effect");
      document.title=`Increment ${value}`;
      
    },[value,count]);
  return (
    <div>
        <h2>{value}</h2>
    <button onClick={()=>setvalue(value+1)}>Click ME</button>

        <button onClick={()=>setcount(count+1)}>Click ME</button>
    </div>
    
  )
}

export default Use_effect