import React, { useEffect } from 'react';
import { useState } from 'react';
import { TiArrowRightThick } from "react-icons/ti";
import { ImCancelCircle } from "react-icons/im";

const Admin = () => {

    const [admindata, setAdminData] = useState([])
    const [reload, setReload] = useState(false)
    useEffect(() => {
        fetch(`https://aqueous-caverns-01571.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdminData(data);
            })
    }, [reload])


    const handelDelete = ({ email }) => {
        const isture = window.confirm('Want to delete this admin')
        if (isture) {

            fetch(`https://aqueous-caverns-01571.herokuapp.com/admin/${email}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setReload(true)
                })
        }
    }





    return (
        <div>
            <h1 className=' text-3xl font-bold mb-10 mt-20'>Admin List</h1>
            {
                admindata?.map((data) =>
                    <div key={data._id}>
                        {
                            data?.role == "admin" &&
                            <div className=' bg-blue-500 text-white mb-4 w-1/2 mx-auto py-2 px-3 rounded-md flex justify-between items-center'>
                                <div className=' flex items-center '>
                                    <TiArrowRightThick className=' mr-3' />
                                    <h1 className='text-left'>{data?.email}</h1>
                                </div>
                                <ImCancelCircle onClick={() => handelDelete({ email: data?.email })} className=' cursor-pointer' />
                            </div>
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Admin;