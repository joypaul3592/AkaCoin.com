import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../Firebase/firebase.init';


const AdminRow = ({ requser, index }) => {
    const [user] = useAuthState(auth)
    const { email, role } = requser;

    const makeAdmin = () => {

        console.log(user);
        const email1 = user?.email;
        console.log(email, email1);
        const reqUser = {
            email1: email1
        }
        console.log(reqUser)

        fetch(`https://aqueous-caverns-01571.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reqUser)
        },)
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Made Admin');

                }
            })
    }


    return (
        <tr>
            <td className='pl-14'>
                <div className="font-bold">{index + 1}</div>
            </td>
            <td>
                <div className="font-bold">{email}</div>
            </td>

            <td className='pl-8'>
                {role !== 'admin' ? <button onClick={makeAdmin} className='py-1 px-4 border border-green-800 hover:bg-green-800 hover:text-white text-green-800 rounded'>Make Admin</button> : <h1 className=' text-lg text-purple-800 ml-8 font-semibold'>Admin</h1>}
            </td>

        </tr>


    );
};

export default AdminRow;