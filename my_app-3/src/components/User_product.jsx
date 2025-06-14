import React from 'react'

const User_product = () => {
    const userinfo = [
        { name: "John Doe", age: 30, city: "New York" },
        { name: "Jane Smith", age: 25, city: "Los Angeles" },
        { name: "Alice Johnson", age: 28, city: "Chicago" },
        { name: "Bob Brown", age: 35, city: "Houston" },
        { name: "Charlie White", age: 22, city: "Phoenix" }
    ];
    const product_info = [
        { productName: "Laptop", price: 1200, category: "Electronics" },
        { productName: "Smartphone", price: 800, category: "Electronics" },
        { productName: "Tablet", price: 600, category: "Electronics" },
        { productName: "Headphones", price: 200, category: "Accessories" },
        { productName: "Smartwatch", price: 300, category: "Wearables" }
    ];

    const style_for_ul={
    display: "flex",
    flexDirection: "column",    
    listStyleType: "none",
    padding: "10px",
    backgroundColor: "lightblue",
    borderRadius: "5px",
    margin: "10px 0"
    };
  return (
           <div>
            {userinfo.map(({name,age,city})=>(
                <ul style={style_for_ul} key={Math.random()}>
                  <h2>Name:{name}</h2>
                  <h3>Age:{age}</h3>
                  <h4>City:{city}</h4>
                  </ul>
            ))};

            {product_info.map(({productName, price, category})=>(
                <ul style={style_for_ul} key={Math.random()}>
                  <h2>Product Name: {productName}</h2>
                  <h3>Price: ${price}</h3>
                  <h4>Category: {category}</h4>
                </ul>
            ))
        };
           </div>
  )
}

export default User_product