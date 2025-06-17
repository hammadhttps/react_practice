import { useContext,useState } from 'react';
import React from 'react';
import { UserContext } from './UserContext';


const UpdateUser = () => {
    const {updateUser}=useContext(UserContext);
    const [newname,setNewname]=useState('');

    const handleSubmit=e=>{
        e.preventDefault();
        if(newname.trim()){
            updateUser(newname);
            setNewname('');
        }
    }
  return (
    <div>
        <h2>Update User Name</h2>
        <form onSubmit={handleSubmit}>
           <input type="text" value={newname} onChange={e=>setNewname(e.target.value)} />
           <button type='submit'>Enter</button>  
        </form>
    </div>
  )
}

export default UpdateUser