import React from 'react'
import Greet from './components/Greet'
import User_product from './components/User_product';
import Props_case from './components/props_case';
import Prop_case_2 from './components/prop_case_2';
import Cond_rendering from './components/Cond_rendering';
import Cond_rend_2 from './components/Cond_rend_2';
import Greetings_and_Weather from './components/Greetings_and_Weather';
import Icons_ from './components/icons_';
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

  //<Prop_case_2 name="John Doe" fatherName="Doe Kittfisher" GrandFather="Fisher" Child="Ali DOe" ></Prop_case_2>
  //<Cond_rendering />
  //<Cond_rend_2 />
 // <Greetings_and_Weather Weather="Sunny" Name="Ali" illness="False" temp="25C" cond="Raining"></Greetings_and_Weather>
   <Icons_></Icons_>
)};

export default App;