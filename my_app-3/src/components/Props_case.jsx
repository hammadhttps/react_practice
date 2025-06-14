import React from 'react'

const Props_case = (props) => {
  return (
    <header style={{textAlign: 'center', marginTop: '20px'}}>
        <h1>Welcome {props.name}</h1>
        <img src={props.img}  alt={props.alt} />
        <h2>Your age  is {props.age}</h2>
        <h2>He is logged in or Not ? {props.isLoggedIn()}</h2>
        <h2>
        Your products are: {props.products.join(', ')}
        </h2>
    </header>
    
  )
}

export default Props_case;