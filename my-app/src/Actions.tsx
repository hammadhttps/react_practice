

const Actions = () => {
    const formAction = (formdata: FormData) => {
      const userdata = {
        name: formdata.get('name'),
        email: formdata.get('email'),
        password: formdata.get('password'),
      };
      console.log(userdata);
      
    }
  return (
   <form action={formAction}>
    <label htmlFor="name">
        Name:
    </label>
    <input type="text" id="name" name="name"/>
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button type="submit">Submit</button>

   </form>
  )
}

export default Actions;