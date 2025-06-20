import React, { useId } from 'react'


const Unique_id = () => {
    const id = useId();
  return (
    <div>
        <label htmlFor={`${id}-a1`}>Email</label>
        <input type="email" id={`${id}-b2`} />
        <br />
        <label htmlFor="password"id={`${id}-b1`}></label>
        <input type="password" id={`${id}-b1`} />
    </div>
  )
}

export default Unique_id;