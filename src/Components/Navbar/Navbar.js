import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { signOut } from 'firebase/auth';
import logo from '../../assect/Logo.png'
import icon from '../../assect/Vector.png'
import "@fontsource/lato";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { AiOutlineAntDesign } from "react-icons/ai";
import auth from '../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../Hook/useAdmin';



const Navbar = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const menuItem = <>
        <NavLink
            to={'/'}
            className={({ isActive }) => (` text-sm font-medium my-4 lg:my-0 hover:text-blue-500  mx-4 ${isActive ? 'text-blue-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase  ${isActive ? 'text-blue-500' : 'text-black'}`)}
            >Ecosystem</p>
        </NavLink>

        <NavLink
            to={'/buy'}
            className={({ isActive }) => (` text-sm font-medium my-4 lg:my-0 hover:text-blue-500  mx-4 ${isActive ? 'text-blue-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase  ${isActive ? 'text-blue-500' : 'text-black'}`)}
            >Buy</p>
        </NavLink>


        <NavLink
            to={'/ako'}
            className={({ isActive }) => (` text-sm font-medium  my-4 lg:my-0 hover:text-blue-500   mx-4 ${isActive ? 'text-blue-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-blue-500' : 'text-black'}`)}
            >What is AKO?</p>
        </NavLink>


        <NavLink
            to={'/buy2'}
            className={({ isActive }) => (` text-sm font-medium my-4 lg:my-0  hover:text-blue-500  mx-4 ${isActive ? 'text-blue-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-blue-500' : 'text-black'}`)}
            >Learn</p>
        </NavLink>

        <NavLink
            to={'/community'}
            className={({ isActive }) => (` text-sm font-medium my-4 lg:my-0 hover:text-blue-500   mx-4 ${isActive ? 'text-blue-500' : 'text-black'}`)}
        >
            <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-blue-500' : 'text-black'}`)}
            >Community</p>
        </NavLink>

        {
            admin &&
            <NavLink
                to={'/dashbord/admin'}
                className={({ isActive }) => (` text-sm font-medium my-4 lg:my-0 hover:text-blue-500   mx-4 ${isActive ? 'text-blue-500' : 'text-black'}`)}
            >
                <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-blue-500' : 'text-black'}`)}
                >Dashbord</p>
            </NavLink>
        }

    </>

    return (
        <>
            {
                <div style={{ fontFamily: 'Lato' }} className={`navbar bg-base-100`}>
                    <div class="navbar flex items-center max-w-6xl  mx-auto  justify-between px-2 ">
                        <div className='  w-full lg:w-40'>
                            <div class="dropdown ">
                                <label tabindex="0" class="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabindex="0" class="bg-white  menu menu-compact dropdown-content mt-3 px-2 py-0 shadow rounded-box w-52">
                                    {
                                        menuItem
                                    }
                                </ul>
                            </div>
                            <NavLink to={'/'} className=" flex justify-center w-full font-bold text-xl text-black"><img className=' w-28' src={logo} alt="logo" /></NavLink>
                        </div>
                        <div class=" hidden lg:flex">
                            <ul class="flex items-center gap-3  ">
                                {
                                    menuItem
                                }
                                <div className='dropdown '>
                                    <div tabindex="1" className=' relative cursor-pointer flex items-center hover:text-blue-500 ' >
                                        <img className=' w-4' src={icon} alt="icon" />
                                        <MdKeyboardArrowDown />
                                    </div>
                                    <div class={`dropdown-content absolute right-0 top-10 rounded-md  py-2 bg-white w-28 flex flex-col shadow-2xl text-left `}>
                                        {
                                            user?.uid ? <button
                                                style={{ fontFamily: 'Lato' }}
                                                onClick={() => signOut(auth)}
                                                className=" text-sm text-black  hover:bg-gray-200 px-4 py-2 flex items-center"
                                            >
                                                <BiLogOutCircle className='text-blue-600 mr-2' />
                                                <NavLink to="/">Logout</NavLink>
                                            </button> :
                                                <>
                                                    <NavLink to={'/login'} style={{ fontFamily: 'Lato' }} className=" text-sm text-black  hover:bg-gray-200 px-4 py-2 flex items-center"><BiLogInCircle className='text-blue-600 mr-2' />Log in</NavLink>
                                                    <NavLink to={'/signup'} style={{ fontFamily: 'Lato' }} className=" text-sm text-black flex hover:bg-gray-200 px-4 py-2 items-center"><AiOutlineAntDesign className=' text-blue-600 mr-2' /> Sign Up</NavLink>
                                                </>
                                        }
                                    </div>


                                </div>
                            </ul>
                        </div>

                    </div>

                </div >

            }
        </>
    );
};

export default Navbar;