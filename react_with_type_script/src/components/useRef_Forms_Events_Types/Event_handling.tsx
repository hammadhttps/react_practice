import React from 'react'

const Event_handling = () => {
 
    const handle_change=(event:React.MouseEvent<HTMLButtonElement>)=>{
        console.log("clicked",event.currentTarget);  
    }

    const handle_enter=(e:React.MouseEvent<HTMLDivElement>)=>{
        console.log("entered",e.currentTarget);
        
    }


  return (
    <div onMouseEnter={handle_enter}>
        <h2>Event handling Eg</h2>
        <button onClick={handle_change}>CLick</button>
    </div>
  )
}

export default Event_handling