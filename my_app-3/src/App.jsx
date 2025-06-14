import React from 'react'
import Greet from './components/Greet'
import User_product from './components/User_product';
import Props_case from './components/props_case';
const App = () => {
  return (
    //<Greet />
   // <User_product />
   <Props_case
    img="https://picsum.photos/200/300"
    alt="Random Image"
    name="John Doe"
    age={30}
    isLoggedIn={() => "Yes, user is logged in"}
    products={['Laptop', 'Smartphone', 'Tablet']}
  ></Props_case>
)};

export default App;