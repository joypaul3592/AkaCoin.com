import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify';


const ManageWallet = () => {

    const [reload, setReload] = useState(false)
    const [walletData, setWalletData] = useState([])

    useEffect(() => {
        fetch('https://aqueous-caverns-01571.herokuapp.com/wallet')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setWalletData(data?.success)
            })
    }, [reload])

    const handelDelete = ({ id }) => {

        const isture = window.confirm('Want to delete this admin')
        if (isture) {

            fetch(`https://aqueous-caverns-01571.herokuapp.com/wallet/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast('Delete Successfully')
                    setReload(true)
                })
        }

    }

    return (
        <div className='w-2/3 mx-auto'>
            <h1 className=' text-3xl font-bold mb-10 mt-10'>Manage wallet</h1>
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead >
                    <tr>
                        <th className='pl-10'>Count</th>
                        <th>Email</th>
                        <th className='pl-20'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        walletData.map((data, idx) =>
                            <tr className=' shadow-lg  '>
                                <td className='pl-14'>
                                    <div className="font-bold">{idx + 1}</div>
                                </td>
                                <td>
                                    <div className="font-bold">{data.Name}</div>
                                </td>
                                <td className=' text-right'>
                                    <button onClick={() => handelDelete({ id: data?._id })} className=' bg-red-500 text-white font-semiblod border border-red-500 py-1 px-3 rounded hover:bg-white hover:text-red-500'>Delete</button>
                                </td>


                            </tr>
                        )
                    }
                </tbody >

            </table>
        </div>
    );
};

export default ManageWallet;