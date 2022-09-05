import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail, useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth';
import { BsEyeSlash, BsGoogle } from "react-icons/bs";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleloading, googleError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, myuser, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
    const [updateProfile, updating, updatError] = useUpdateProfile(auth);
    const [email, setEmail] = useState('');
    const [showPass, setShowPass] = useState(false);

    const onSubmit = async data => {
        const email = data?.email;
        const password = data?.password;
        const name = data?.name;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };
    let signUpError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [user] = useAuthState(auth)

    console.log(user);
    useEffect(() => {
        console.log(user);
        const email = user?.email;
        console.log(email)
        const currentUser = { email: email };
        if (email) {
            fetch(`https://aqueous-caverns-01571.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    toast('Successfully Sign up')
                    console.log(data, 'kaj hoice');
                    navigate('/');
                })
        }

    }, [user, myuser, googleUser])




    if (error || googleError || updatError || passwordResetError) {
        signUpError = <p className='text-primary mb-2'><small>{error?.message || googleError?.message}</small></p>
    }

    return (
        <div className='py-12'>
            < div className="w-[400px] p-8 mx-auto border-2 border-primary bg-gray-50 items-center text-center shadow-xl rounded-xl">
                <h1 className='w-56 text-center rounded p-2 mx-auto mb-8 mt-[-50px] bg-primary text-white font-medium text-xl'>Sign Up</h1>
                <div className="avatar mb-8 z-0">
                    <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.freepik.com/premium-vector/avatar-portrait-kid-caucasian-boy-round-frame-vector-illustration-cartoon-flat-style_551425-43.jpg?w=2000" alt='' />
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input
                        className="mb-5 bg-gray-50 border border-gray-300 text-accent text-sm rounded-lg block w-full p-2.5"
                        placeholder='Name'
                        {...register("name", { required: true })} />
                    {errors.firstName?.type === 'required' && "Name is required"}
                    <input
                        className="bg-gray-50 border border-gray-300 text-accent text-sm rounded-lg block w-full p-2.5"
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
                            className=" border border-gray-300 text-accent text-sm rounded-lg block w-full p-2.5"
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
                    {signUpError}
                    <div className="text-center mb-3 pb-1 justify-between">
                        <label htmlFor="remember" className="text-sm font-bold text-primary mb-2">Already Have an account? <Link to='/login' className='hover:underline'>Sign In</Link></label>
                        <br />
                        <label for="my-modal-6" className=" hover:underline text-gray-400 mt-3">Forget password?</label>
                    </div>
                    <input
                        className="border cursor-pointer border-gray-300 bg-primary text-white text-sm uppercase font-bold rounded-lg block w-full p-2.5"
                        type="submit" value="Sign Up" />

                </form>
                <div className='flex font-bold items-center my-3 text-[#FE4A55]'>
                    <hr className='border-primary h-px w-full mr-2 mt-1' />
                    <span>or</span>
                    <hr className='border-primary h-px w-full ml-2 mt-1' />
                </div>
                <button onClick={() => signInWithGoogle()} className="flex items-center justify-center bg-gray-50 border font-bold border-gray-300 text-accent text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 w-full p-2.5"> <BsGoogle className=' text-xl text-blue-700 mr-4' /> Continue with Google</button>
                <ToastContainer></ToastContainer>
            </div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2 bottom-5">✕</label>

                    <input
                        type="email"
                        placeholder='Please put your email'
                        className="mt-12 border border-gray-300 text-accent text-sm rounded-lg block w-full p-2.5"
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

    );
};

export default SignUp;