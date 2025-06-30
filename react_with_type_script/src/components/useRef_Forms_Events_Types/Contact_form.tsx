import { useState, type ChangeEvent, type FormEvent } from "react"

interface Contact_form_state{
    name: string;
    email: string;
    phone: string;
}

const Contact_form = () => {
  const [formdata,setformdata]=useState<Contact_form_state>({
        name:'',
        email:'',
        phone:'',
    });
    const handle_change=(event:ChangeEvent<HTMLInputElement>)=>{
          const {name,value}=event.target;
          setformdata({...formdata,[name]:value});
          }
    
    const handle_submit=(e:FormEvent<HTMLFormElement>)=>{

        e.preventDefault();
        console.log(formdata);


    }      
  return (
    <div>
        <form onSubmit={handle_submit}>
            <label htmlFor="">Name:
                <input type="text"name="name"value={formdata.name}onChange={handle_change} />
            </label>
             <label htmlFor="">Email:
                <input type="text"name="email"value={formdata.email}onChange={handle_change} />
            </label>
             <label htmlFor="">Phone:
                <input type="text"name="phone"value={formdata.phone}onChange={handle_change} />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact_form