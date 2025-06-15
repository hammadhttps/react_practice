import React, { useState } from 'react'
import Pop_up_component from './Pop_up_component';

const Portal = () => {
    const [inputvalue,setinputvalue]=useState('');
    const [copied,set_copied]=useState(false);

    const handle_copy=()=>{
        navigator.clipboard.writeText(inputvalue).then(()=>{
            set_copied(true);
            setTimeout(()=>set_copied(false),2000);
        });
    }
  return (
    <div>
        <input type="text" value={inputvalue} onChange={e=>setinputvalue(e.target.value)} />
        <button onClick={handle_copy}>Copy</button>
        <Pop_up_component copied={copied}/>
    </div>
  )
}

export default Portal