import React from 'react';

const User = ({users} : {users : []}) => {

    return (
        <ul className="list-group">
            {
                users.map(({id, name, email}) => (
                    <li className="list-group-item" key={id}>{name} - {email}</li>
                ))
            }
        </ul>
    );
};

export default User;
