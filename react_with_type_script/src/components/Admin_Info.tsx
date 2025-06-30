import type { AdminInfo } from "../types";
import type { FC } from "react";


type Admins_info={
    admin:AdminInfo
};

const Admin_Info:FC<Admins_info> = ({admin}) => {
  return (
    <div>
      <h1>Admin Info</h1>
      <h2>{admin.name}</h2>
      <h3>{admin.id}</h3>
      <h3>{admin.email}</h3>
      <h2>{admin.role}</h2>
    </div>
  )
}

export default Admin_Info;