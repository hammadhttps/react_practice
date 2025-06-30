import type { FC } from "react";

type User_shape={
   name:string;
   Age:number;
   Gender:string;
};

/*
interface UserShape{

name: string;
Age: number;
Gender: string;

}
*/
// const User = ({name,Age,Gender}:User_shape) => {
//   return (
//     <div>
//         <h1>{name}</h1>
//         <h2>{Age}</h2>
//         <h3>{Gender}</h3>
//     </div>

//   )
// }


const User:FC<User_shape>=({name,Age,Gender})=>{
    return <div>
<h1>{name}</h1>
<h2>{Age}</h2>
<h3>{Gender}</h3>

    </div>
};

export default User;