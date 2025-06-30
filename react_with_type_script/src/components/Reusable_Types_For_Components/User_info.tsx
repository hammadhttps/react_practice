
export type Info={
    username:string;
    email:string;
    age:number;
}

const User_info = ({username,email,age}:Info) => {
  return (
    <div>
        <ul>
            <li>{username}</li>
            <li>{email}</li>
            <li>{age}</li>
        </ul>
    </div>
  )
}

export default User_info