import { useEffect, useState } from 'react'

interface User{

    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;

}
const User_list = () => {
    const [user,setUsers]=useState<User[]>([]);
    const [loading,setloading]=useState<boolean>(true);
    const [error,seterror]=useState<string|null>(null);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data: User[] = await response.json();
                setUsers(data);
                setloading(false);
                seterror(null);
                console.log(data);
            } catch (error) {
                if (error instanceof Error) {
                    seterror(error.message);
                } else {
                    seterror('An unknown error occurred');
                }
                setloading(false);
                console.log(error);
            }
        };
        fetchUsers();
    }, []);

      if(loading)return <h1>loading...</h1>
      if(error)return <h1>Error:{error}</h1>

    return (
    <div>
        <table>
           <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
           </thead>
           <tbody>
            {user.map(user=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                         <td>{user.username}</td>
                          <td>{user.email}</td>
                           <td>{user.phone}</td>
                    </tr>
            ))}
           </tbody>
        </table>
    </div>
  )
}

export default User_list