import type { FC } from 'react';
import type { Info } from '../types'

type InfoProp={
    user:Info;
}

const User_info:FC<InfoProp> = ({ user }) => {
    return (
        <div>
            <h1>User Info</h1>
            <h1>{user.name}</h1>
            <h2>{user.id}</h2>
            <h3>{user.email}</h3>
        </div>
    );
}

export default User_info