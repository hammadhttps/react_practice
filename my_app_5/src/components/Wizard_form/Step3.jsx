import React from 'react'

const Step3 = ({data,dispatch}) => {
    const handle_submit=()=>{
        alert("Form Submitted!/n"+JSON.stringify(data,null,2));

    }
  return (
    <div>
        <h4>Review your Info:</h4>
        <p><b>Name:</b>{data.name}</p>
        <p><b>Email:</b>{data.email}</p>
        <p><b>Gender</b>{data.gender}</p>
        <p><b>Subscribed:</b> {data.subscribe ? 'Yes' : 'No'}</p>
        <button onClick={()=>dispatch({type:'Prev'})}>Back</button>
        <button onClick={handle_submit}>Submit</button>
    </div>
  )
}

export default Step3