
import { useFormStatus } from 'react-dom'
const Form_button = () => {

  const {pending}=useFormStatus();
 
  return (
   <div>
      <button type='submit' disabled={pending}>
        {pending?'submitting..':'submit'}
      </button>
   </div>
  )
}

export default Form_button