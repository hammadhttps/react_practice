import React from 'react'

const Greet = () => {
    const get_date = new Date();
    const date=get_date.getDate();
    const month=get_date.getMonth()+ 1; // Months are zero-indexed in JavaScript
    const year=get_date.getFullYear();
    const name="John Doe";
    const greeting = `Hello ${name}, today is ${date}/ ${month}/ ${year}`;
    const numbers = [1, 2, 3, 4, 5];
    const userinfo=[{name: "John Doe", age: 30, city: "New York"},
    {name: "Jane Smith", age: 25, city: "Los Angeles"},
    {name: "Alice Johnson", age: 28, city: "Chicago"},
    {name: "Bob Brown", age: 35, city: "Houston"},
    {name: "Charlie White", age: 22, city: "Phoenix"}
    ];
    
      
    
    

    const style_for_h1 = {
        color: "black",
        fontWeight: "bold",
        paddingTop: "250px",
        fontSize: "20px",
        backgroundColor: "lightgray",
        textAlign: "center",
        fontFamily: "Arial, sans-serif"

    };
    const style_for_ul = {
         display: "flex",
        flexDirection: "row",
        listStyleType: "none",
        padding: "10px",
        backgroundColor: "lightblue",
        borderRadius: "5px",
        margin: "10px 0"
    };
  return (
    <div>

        <h1 style={style_for_h1}>{greeting}</h1>
        {userinfo.map(({Name,age,City}) => (
            <ul style={style_for_ul} key={Math.random()}>
                <li>Name: {Name}</li>
                <li>Age: {age}</li>
                <li>City: {City}</li>
            </ul>
        ))};
        {numbers.map((number, index) => (
        <ul style={style_for_ul} key={index}>
            <li>{number}</li>
            </ul>
        ))};
    </div>
  );
};

export default Greet