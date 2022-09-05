import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RiAdminFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { FaWallet } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";



const Dashbord = () => {
    return (
        <div>
            <div className='   text-center '>

                <div className='py-10 flex items-center h-full max-w-6xl mx-auto px-10 '>
                    <div data-aos="fade-down" className=' bg-gray-200 rounded-lg w-52 py-7 fixed   mx-auto top-[35%]  '>
                        <nav className=''>

                            <NavLink
                                to={'admin'}
                                className={({ isActive }) => (` text-md font-medium flex items-center my-6 mx-4 ${isActive ? 'text-blue-700 ' : 'text-black'}`)}
                            ><RiAdminFill className={({ isActive }) => (`text-yellow-400 ${isActive ? 'text-red-400 mr-3  ' : 'text-yellow-400'}`)} />
                                <p className={({ isActive }) => (` absolute mt-[4px] text-black  text-md font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-black'}`)}
                                >Admin</p>
                            </NavLink>


                            <NavLink
                                to={'addwallet'}
                                className={({ isActive }) => (` text-md font-medium flex items-center my-6 mx-4 ${isActive ? 'text-blue-700 ' : 'text-black'}`)}
                            ><FaWallet className={({ isActive }) => (`text-yellow-400 ${isActive ? 'text-red-400 mr-3  ' : 'text-yellow-400'}`)} />
                                <p className={({ isActive }) => (` absolute mt-[4px] text-black  text-md font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-black'}`)}
                                >Add Wallet</p>
                            </NavLink>


                            <NavLink
                                to={'makeadmin'}
                                className={({ isActive }) => (` text-md font-medium flex items-center my-6 mx-4 ${isActive ? 'text-blue-700 ' : 'text-black'}`)}
                            ><HiUserGroup className={({ isActive }) => (`text-yellow-400 ${isActive ? 'text-red-400 mr-3  ' : 'text-yellow-400'}`)} />
                                <p className={({ isActive }) => (` absolute mt-[4px] text-black  text-md font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-black'}`)}
                                >Make Admin</p>
                            </NavLink>


                            <NavLink
                                to={'managewallet'}
                                className={({ isActive }) => (` text-md font-medium flex items-center my-6 mx-4 ${isActive ? 'text-blue-700 ' : 'text-black'}`)}
                            ><MdAccountBalanceWallet className={({ isActive }) => (`text-yellow-400 ${isActive ? 'text-red-400 mr-3  ' : 'text-yellow-400'}`)} />
                                <p className={({ isActive }) => (` absolute mt-[4px] text-black  text-md font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-black'}`)}
                                >Manage Wallet</p>
                            </NavLink>


                        </nav>
                    </div>
                    <div className=' w-full md:px-6 px-3 ml-48'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;