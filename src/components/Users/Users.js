import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import User from "../User/User";

export const Users = () => {
useEffect( ()=>{
    usersService.getAllUsers().then(value =>setUsers(value) );
},[])
    const [users,setUsers]=useState(null);
    return (
        <div>
            {
                users&&users.map((user)=><User key={user.id} user={user} />)
            }
        </div>
    );
};

export default Users;