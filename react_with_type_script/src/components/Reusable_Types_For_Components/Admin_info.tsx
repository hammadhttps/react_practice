import {  type Info } from "./User_info";


type admin_info=Info & {admin:string}; 


const Admin_info = ({username,email,age,admin}:admin_info) => {
  return (
    <div>
        <ul>
            <li>{username}</li>
            <li>{email}</li>
            <li>{age}</li>
            <li>{admin}</li>
        </ul>
    </div>
  )
}

export default Admin_info