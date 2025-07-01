import {useForm, type SubmitHandler} from 'react-hook-form'
const Form = () => {

    interface FormData{
        name:string;
        email:string;
        password:string;
    }

    const{register,handleSubmit,formState:{errors,isSubmitting},}=useForm<FormData>();
      const onSubmit:SubmitHandler<FormData>=data=>{
        console.log(data);
      }
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' {...register('name',{required:'Name required'})} />
                {errors.name&&<p>{errors.name.message}</p>}
                <label htmlFor="email">Email:</label>
                <input type="email" id='email' {...register('email',{required:'Email required'})} />
                {errors.email&&<p>{errors.email?.message}</p>}
                
            </div>
            <div>
                <input type="password" {...register('password',{minLength:{value:8,message:"password must be atleast 8 chars"}})} placeholder='Password'/>
                {errors.password && (<div style={{color:"red"}}>{errors.password.message}</div>)}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form