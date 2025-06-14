import React from 'react'

const Cond_rendering = () => {
    const items= [1, 2, 3, 4, 5];
  return (
    <>
    <h1>Cart</h1>
    <ul>
        {items.length > 0 ? (
            items.map((item) => <li key={item}>Item {item}</li>)
        ) : (
            <li>No items in the cart</li>
        )}
        </ul>
    </>

  )
}

export default Cond_rendering