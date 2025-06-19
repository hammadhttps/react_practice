import React, { useRef } from 'react'

const USe_ref_eg = () => {
    const element=useRef(null);
    const focusInput=()=>{
        element.current.focus();
        element.current.value="Hammad";
    }
    
  return (
    <div>
        <input type="text" ref={element} />
        <button onClick={()=>focusInput()}>Focus and Write Name</button>
    </div>
  )
}

export default USe_ref_eg