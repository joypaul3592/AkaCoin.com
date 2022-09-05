import React, { useEffect, useState } from 'react';
import AdminRow from './AdminRow';


const MakeAdmin = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])


    return (
        <div className="w-full mt-10">
            <h1 className=' text-3xl font-bold mb-10'>Make Admin</h1>
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead >
                    <tr>
                        <th className='pl-10'>Count</th>
                        <th>Email</th>
                        <th className='pl-20'>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((requser, index) => <AdminRow key={requser._id} index={index} requser={requser} ></AdminRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MakeAdmin;