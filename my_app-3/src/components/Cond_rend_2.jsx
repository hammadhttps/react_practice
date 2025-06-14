import React from 'react'

const Cond_rend_2 = () => {
   const cart=[{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' }];
  return (
    <div>
    <h1>Cart</h1>
    {cart.length>0&&<h2> You have items {cart.length} in your cart</h2>}
    {cart.length === 0 ? (
      <h2>No items in the cart</h2>
    ) : (
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    )}


    </div>
  )
}

export default Cond_rend_2