import React from 'react';
import User from "../components/user";

const Users = (props :any) => {

    const {users} = props

    return (
        <div className="container">
            <h1>Users List</h1>
            <User users={users}/>
        </div>
    );
};

export default Users;

// Only runs on server side
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log("User data", data)
    return {
        props: {
            users: data
        }
    }
}
