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

 
 const App = () => {
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
    </div>

   )
 }
 
 export default App