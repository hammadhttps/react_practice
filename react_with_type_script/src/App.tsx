
import User from './components/User'
import Button from './components/Button'
import type { Info,AdminInfo } from './types';
import User_info from './components/User_info';
import Admin_Info from './components/Admin_Info';
import Main from './components/Reusable_Types_For_Components/Main';
import Counter from './components/Use_sate_types/Counter';
import User_profile from './components/Use_sate_types/User_profile';
import Form from './components/useRef_Forms_Events_Types/Form';
import Fpcus_input from './components/useRef_Forms_Events_Types/Fpcus_input';
import Contact_form from './components/useRef_Forms_Events_Types/Contact_form';
import Event_handling from './components/useRef_Forms_Events_Types/Event_handling';
import Counter from './components/Use_reducer';

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
      {/* <Main></Main>
      <User_info user={user} ></User_info>
      <Admin_Info admin={admin}></Admin_Info>
      <User name="Hammad" Age={20} Gender="Male"/>
      <Button label='Click' onClick={()=>console.log('Clicked')
      } disabled={false}></Button> */}

      {/* <Counter/>
      <User_profile/>
      <Form/>
      <Fpcus_input/> */}
      <Contact_form/>
      <Event_handling/>
     </div>
   )
 }
 
 export default App;