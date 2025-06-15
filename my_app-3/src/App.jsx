import React from 'react'
import Greet from './components/Greet'
import User_product from './components/User_product';
import Props_case from './components/props_case';
import Prop_case_2 from './components/prop_case_2';
import Cond_rendering from './components/Cond_rendering';
import Cond_rend_2 from './components/Cond_rend_2';
import Greetings_and_Weather from './components/Greetings_and_Weather';
import Icons_ from './components/icons_';
import {useState} from  "react";
import Comp_2 from './components/Comp_2';
import Comp_1 from './components/comp_1';
import Example_1 from './components/Example_1';
import Example_2 from './components/Example_2';
import Example_3 from './components/Example_3';
import Todo_ from './components/Todo_';
import Portal from './components/Portal';

const App = () => {
  const[friends,setfriends]=useState(["alex","john","ali"]);
  const [counter,setCount]=useState(0);
  //const [name,setName]=UseState("");
  const increment=()=>setCount(counter+1);
  const decrement = () => setCount(counter > 0 ? counter - 1 : 0);
  const add_friend= () =>setfriends([...friends,"hammad"]);
  const rm_friend=()=>setfriends(friends.filter(f=>f!='hammad'))
  const update_friend =()=>setfriends(friends.map(f=>f=='hammad'?'Alex':f))
  
  //for object 
  const[movie,setmovie]=useState(
    {
      title:"MI-7",
      rating:"9.8/10",
      bussiness:"$10 Million"
    }
  );

  // const change_rating=()=>{
  //   const copy_movie={...movie,
  //     rating:Math.ceil(Math.random()*10)
  //   }
  //   setmovie(copy_movie);
  //}

  const change_rating=()=>{
  setmovie({...movie,rating:Math.ceil(Math.random()*10)   });
  }

  //array of objects
  const[movies_objs,set_objs]=useState([{id:1,title:'spiderman'}
    ,{id:2,title:'batman'},
  {id:3,title:'superman'}]);



  const handle_click=()=>{
    
     set_objs(movies_objs.map(m=>m.id==1?{...movies_objs,title:"title changed"}:m))
    
  }

  
  
  return (


    

//     //<Greet />
//    // <User_product />
//   /* <Props_case
//     img="https://picsum.photos/200/300"
//     alt="Random Image"
//     name="John Doe"
//     age={30}
//     isLoggedIn={() => "Yes, user is logged in"}
//     products={['Laptop', 'Smartphone', 'Tablet']}
//   ></Props_case>*/

//   //<Prop_case_2 name="John Doe" fatherName="Doe Kittfisher" GrandFather="Fisher" Child="Ali DOe" ></Prop_case_2>
//   //<Cond_rendering />
//   //<Cond_rend_2 />
//  // <Greetings_and_Weather Weather="Sunny" Name="Ali" illness="False" temp="25C" cond="Raining"></Greetings_and_Weather>
//    <Icons_></Icons_>

    //  <section>
    //   <h1>{counter}</h1>       
    //   <button onClick={increment}>+</button> 
    //   <button onClick={decrement}>-</button> 
    //  </section>


   //for object
  //  <section>
  //   <h1>{movie.title}</h1>
  //   <h2>{movie.rating}</h2>
  //   <h3>{movie.bussiness}</h3>
  //   <button onClick={change_rating}>Change Ratings</button>
  //  </section>


  //array of objects
  // <section>
  //   <ul>
  //   {movies_objs.map(m=>(
  //     <li key={Math.random()}>{m.title}</li>
  //   ))}
  //   </ul>
  //   <button onClick={handle_click}>Change movie</button>
  // </section>

// {/* <section>
//   <Comp_1 count={counter} onClickHandler={()=>setCount(counter+1)}></Comp_1>
//   <Comp_2 count={counter} onClickHandler={()=>setCount(counter-1)}></Comp_2>
// </section> */}
//  <div>
//   <Example_1/>
//   <Example_2/>
//   <Example_3/>
//   <Todo_/>
//  </div>


//portal
<section>
  <Portal/>
</section>
    


)};

export default App;