import React from 'react'

const Comp_2 = ({count,onClickHandler}) => {
  const H_click=()=>{
    onClickHandler();
  }
  return (
    <section>
      <h1>{count}</h1>
      <button onClick={H_click}>Decrement</button>
    </section>
    
  )
}

export default Comp_2;