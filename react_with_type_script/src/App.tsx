
import User from './components/User'
import Button from './components/Button'
import type { Info,AdminInfo } from './types';
import User_info from './components/User_info';
import Admin_Info from './components/Admin_Info';
import Main from './components/Reusable_Types_For_Components/Main';


 const App = () => {
  const user:Info={
    id:1,
    name:"john ali",
    email:"@gmail.com" 
  };
  const admin:AdminInfo={
    id:2,
    name:"jane smith",
    email:"@gmail.com",
    role:"admin",
    lastLogin: new Date(), 
  }

   return (
     <div>
      <Main></Main>
      <User_info user={user} ></User_info>
      <Admin_Info admin={admin}></Admin_Info>
      <User name="Hammad" Age={20} Gender="Male"/>
      <Button label='Click' onClick={()=>console.log('Clicked')
      } disabled={false}></Button>
     </div>
   )
 }
 
 export default App