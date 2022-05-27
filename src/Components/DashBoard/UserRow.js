import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')} `
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success(`Successfully Make a admin`)
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button className="btn btn-xs btn-primary" onClick={makeAdmin}>Make Admin</button>}</td>
            <td><button className="btn btn-xs btn-error">Remove User</button></td>
            <ToastContainer />
        </tr >
    );
};

export default UserRow;