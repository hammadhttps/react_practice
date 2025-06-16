import React from 'react'
import { useState } from 'react'

const Switcher = () => {
    const [sw,setsw]=useState(false);
  return (
    <div>
        {sw?(
            <span>Dark</span>
        ):(
            <span>Light</span>
        )} 
        <br />
        <input type="text" placeholder={sw?'dark':'light'}/>
        <button onClick={()=>{
            setsw(!sw);
        }}>Switch</button>

    </div>
  )
}


export default Switcher