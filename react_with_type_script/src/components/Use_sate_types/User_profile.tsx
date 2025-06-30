import { useState } from "react"

interface UserProfile{
    name:string;
    age:number;
    email:string
}

const User_profile = () => {
  const[profile,setProfile]= useState({
        name:'',
        age:0,
        email:''
    })
    const update_name=(name:string)=>{
        setProfile((prev)=>({...prev,name}));
    }
    const update_age=(age:string)=>{
        setProfile((prev)=>({...prev,age:Number(age)}));
    }
    const update_email=(email:string)=>{
        setProfile((prev)=>({...prev,email}));
    }
  return (
    <div>
        <h2>User Profile</h2>
        <input type="text" placeholder="Name"
        value={profile.name} onChange={e=>update_name(e.target.value)}/>
         <input type="number" placeholder="Age"
        value={profile.age} onChange={e=>update_age(e.target.value)}/>
     <input type="text" placeholder="Email"
        value={profile.email} onChange={e=>update_email(e.target.value)}/>
        <hr />
     <h2>Profile Summary</h2>
     <p>{profile.name}</p>
     <p>{profile.age}</p>
     <p>{profile.email}</p>
    </div>
    
  )
}

export default User_profile