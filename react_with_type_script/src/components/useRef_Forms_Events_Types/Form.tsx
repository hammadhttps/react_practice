import { useRef, useState, type FormEvent } from "react"
 type FormData={
    name: string;
    email: string;
    phone: string;
    }
 

const Form = () => {
    const [submitted,setSubmittedData]=useState<FormData>({
        name: "",
        email: "",
        phone: "",
        });

const name=useRef<HTMLInputElement>(null);
const email=useRef<HTMLInputElement>(null);
const phone=useRef<HTMLInputElement>(null);

const handle_submit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    const nameval=name.current!.value;
     const emailval=email.current!.value;
    const phoneval=phone.current!.value;

    setSubmittedData({
        name:nameval,
        email:emailval,
        phone:phoneval,
    });
}
 
  return (
    <form onSubmit={handle_submit} >
      <input type="text" placeholder="Enter Text" ref={name}  />
        <input type="email" placeholder="Enter Text" ref={email}  />
         <input type="text" placeholder="Enter Text" ref={phone}  />
     <button type="submit">Submit</button>
    <hr />
    <h1>Submitted Data</h1>
    <h2>{submitted.name}</h2>
    <h2>{submitted.email}</h2>
    <h2>{submitted.phone}</h2>
    
    
    </form>
  )
}

export default Form