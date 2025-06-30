import { useRef } from "react"


const Fpcus_input = () => {
const Input_ref=useRef<HTMLInputElement>(null);

   const handle_focus=()=>{
    Input_ref.current?.focus();
   }
  return (
    <div>
        <input type="text" ref={Input_ref} placeholder="CLick button" />
        <button onClick={handle_focus}>Focus Input</button>
    </div>
  )
}

export default Fpcus_input