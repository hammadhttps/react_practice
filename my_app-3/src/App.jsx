import React from 'react'
import Greet from './components/Greet'
import User_product from './components/User_product';
import Props_case from './components/props_case';
import Prop_case_2 from './components/prop_case_2';
const App = () => {
  return (
    //<Greet />
   // <User_product />
  /* <Props_case
    img="https://picsum.photos/200/300"
    alt="Random Image"
    name="John Doe"
    age={30}
    isLoggedIn={() => "Yes, user is logged in"}
    products={['Laptop', 'Smartphone', 'Tablet']}
  ></Props_case>*/

  <Prop_case_2 name="John Doe" fatherName="Doe Kittfisher" GrandFather="Fisher" Child="Ali DOe" ></Prop_case_2>
)};

export default App;