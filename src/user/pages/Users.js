import React from "react";
import UsersList from "../components/UsersList";


const Users = () => {
    const USERS = [
        {
            id: "u1",
            name: "Mohamed Khairy",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SE3kLLGuRanIWZBSaaum9v6XXQpMsl6B1VcKICXlRZt1nGHhoGDWYF5siAjBt1NSEqU&usqp=CAU",
            places: 3
        }
    ];
    return (
        <UsersList items={USERS} />
    )
   
};

export default Users;