import React from 'react'

const Step2 = ({data,dispatch}) => {
  return (
    <div>
        <label >Gender:</label>
        <br />
        <select value={data.gender} onChange={e=>dispatch({type:'Update',
            field:'gender',value:e.target.value
        })}>
            <option value="">--Select--</option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
        </select>
        <br />
        <label>
            <input type="checkbox"
            checked={data.subscribe} 
            onChange={e=>(
                {
                    type:'Update',
                    field:'subscribe',
                    value:e.target.checked
                }
            )}/>
             Subscribe to newsletter
        </label>
        <br />
        <button onClick={()=>dispatch({type:'Prev'})}>Back</button>
        <button onClick={()=>dispatch({type:'Next'})}>Next</button>
    </div>
  )
}

export default Step2;