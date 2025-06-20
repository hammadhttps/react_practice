 import React from 'react'
import Switcher from './Switcher'
import Use_effect from './Use_effect'
import Fetch_data from './fetch_data'
import Context_api_eg from './Context_api_eg'
import Context_hook from './Context_hook'
import User_profile from './User_profile'
import { UserProvider } from './UserContext'
import UpdateUser from './UpdateUser'
import Use_reducer_eg from './Use_reducer_eg'
import Use_reduce_pract from './Use_reduce_pract'
import USe_ref_eg from './USe_ref_eg'
import Timer from './Timer'
import Custome_hook from './Custome_hook'
import Use_fetch from './Use_fetch'
import Unique_id from './Unique_id'

 
 const App = () => {
    const [data]=Use_fetch('https://jsonplaceholder.typicode.com/posts/1');
   return (
    //  <div>
    //     <Use_effect/>
    //     <Fetch_data/>
    //  </div>
     

    //context_api_eg
    // <div>
    //   <UserProvider>
    //   <User_profile/>
    //   <UpdateUser/>
    //   </UserProvider>
    // </div>

    //use reducer eg

    <div>
      <Use_reducer_eg/>
      <Use_reduce_pract/>
      <USe_ref_eg/>
      <Timer/>
      <Custome_hook/>
       {data && (
            <p key={data.id}>{data.title}</p>
        )}
        <Unique_id/>
    </div>

   )
 }
 
 export default App