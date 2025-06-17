import React from 'react';
import { UserContext } from './UserContext';
import { useContext } from 'react';



const User_profile = () => {

    const {user}=useContext(UserContext)
  return (
    <div>
    <h1>{user.name}</h1>
    </div>
  )
}

export default User_profile