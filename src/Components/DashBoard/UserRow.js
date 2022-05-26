import React from 'react';

const UserRow = ({ user }) => {
    const { email } = user;
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td><button className="btn btn-xs btn-primary">Make Admin</button></td>
            <td><button className="btn btn-xs btn-error">Remove User</button></td>
        </tr>
    );
};

export default UserRow;