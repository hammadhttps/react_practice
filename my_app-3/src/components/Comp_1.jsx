import React from 'react'

const Comp_1 = ({count,onClickHandler}) => {
    const increment=()=>onClickHandler();
  return (
   <section>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
    </section>
  )
}

export default Comp_1;