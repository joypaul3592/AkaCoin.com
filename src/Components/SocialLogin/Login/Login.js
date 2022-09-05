import React, { useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsEyeSlash, BsGoogle } from "react-icons/bs";
import auth from '../../Firebase/firebase.init';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');
    const [user1] = useAuthState(auth)
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        console.log(data);
    };

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(user);


    if (user1 || googleUser) {
        toast('Login successfully')
        navigate(from, { replace: true });

    }



    if (error || googleError || passwordResetError) {
        signInError = <p className='text-primary mb-2'><small>{error?.message || googleError?.message}</small></p>
    }
    return (
        <div>
            <div className='py-16'>
                < div className="w-[400px] p-8 mx-auto border-2 border-primary bg-gray-50 items-center text-center shadow-xl rounded-xl">
                    <h1 className='w-56 text-center rounded p-2 mx-auto mb-8 mt-[-50px] bg-primary text-white font-medium text-xl'>Sign In</h1>
                    <div className="avatar mb-8 z-0">
                        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png" alt='' />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            placeholder='Email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                        <div className='relative'>
                            <input
                                placeholder="Password"
                                className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                type={showPass ? "text" : "password"}
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Must be 8 characters'
                                    }
                                })}
                            />
                            <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <div className="text-center mb-3 pb-1 justify-between">
                            <label htmlFor="remember" className="text-sm font-bold text-primary mb-2">Don't Have an Account? <Link to='/signUp' className='hover:underline'>Sign Up</Link></label>
                            <br />
                            <label for="my-modal-6" className=" hover:underline text-gray-400 mt-3">Forget password?</label>
                        </div>
                        <input
                            className="border cursor-pointer border-gray-300 bg-primary text-white text-sm uppercase font-bold rounded-lg block w-full p-2.5"
                            type="submit" value="Sign In" />

                    </form>
                    <div className='flex font-bold items-center my-3 text-[#FE4A55]'>
                        <hr className='border-primary h-px w-full mr-2 mt-1' />
                        <span>or</span>
                        <hr className='border-primary h-px w-full ml-2 mt-1' />
                    </div>
                    <button onClick={() => signInWithGoogle()} className="flex items-center justify-center bg-gray-50 border font-bold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 w-full p-2.5"> <BsGoogle className=' text-xl text-blue-700 mr-4' /> Continue with Google</button>
                    <ToastContainer></ToastContainer>

                </div>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2 bottom-5">✕</label>
                        <input
                            type="email"
                            placeholder='Please put your email'
                            className="mt-12 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className="mt-3 border border-gray-300 bg-primary text-white text-sm uppercase font-bold rounded-lg block w-full p-2.5"
                            onClick={async () => {
                                await sendPasswordResetEmail(email);
                                toast('Sent email');
                            }}
                        >
                            Reset password
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;