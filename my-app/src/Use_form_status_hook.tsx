import React from 'react'
import Form_button from './Form_button'

const Use_form_status_hook = () => {
  const myAction=async(FormData:any)=>{
    await new Promise(resolve=>setTimeout(resolve,2000));
     
    const newPost={
        name:FormData.get('name'),
        email:FormData.get('email'),

    }
     console.log(newPost);
     
  }
    return (
    <form action={myAction}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" required/>
         <label htmlFor="email" >Email</label>
         <input type="email"  name='email' required />
         <Form_button/>
    </form>
  )
}

export default Use_form_status_hook