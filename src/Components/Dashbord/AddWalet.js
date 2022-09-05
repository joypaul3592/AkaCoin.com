import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import axios from 'axios';
import auth from '../Firebase/firebase.init';
import { useForm } from 'react-hook-form';

const AddWalet = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)




    const [walletData, setWalletData] = useState([])

    useEffect(() => {
        fetch('https://aqueous-caverns-01571.herokuapp.com/wallet')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setWalletData(data?.success)
            })
    }, [])



    const onSubmit = async (data) => {
        const ratting = data.ratting;
        if (parseInt(ratting) > 6) {
            return toast.error('Ratting Must be Under 5')
        }
        const reviewText = data.review;
        console.log(reviewText);


        if (walletData.length % 2 !== 0) {
            const walletinfo = {
                Text: reviewText,
                Name: data?.name,
                img: "https://i.ibb.co/NC3LK93/Frame-32.png",
                color1: "bg-[#FFD456]",
                color2: "bg-[#EEBC28]",
                color3: "text-[#0E133A]",
                btnColor: "bg-[#1F33D8]"
            }
            console.log(walletinfo);

            try {

                const { data } = await axios.post(`https://aqueous-caverns-01571.herokuapp.com/wallet`, walletinfo);

                if (!data.success) {
                    return toast.error(data.error)
                }
                console.log(data);
                toast.success('Successfully Added Review');
                reset()

            } catch (error) {
                toast.error(error.message)
            }
        } else {
            const walletinfo = {
                Text: reviewText,
                Name: data?.name,
                img: "https://i.ibb.co/TP6Vy3P/Frame-49.png",
                color1: "bg-[#1F33D8]",
                color2: "bg-[#0C20CB]",
                color3: "text-white",
                btnColor: "bg-[#EEBC28]"
            }
            console.log(walletinfo);

            try {

                const { data } = await axios.post(`https://aqueous-caverns-01571.herokuapp.com/wallet`, walletinfo);

                if (!data.success) {
                    return toast.error(data.error)
                }
                console.log(data);
                toast.success('Successfully Added Review');
                reset()

            } catch (error) {
                toast.error(error.message)
            }

        }




    };


    return (
        <div>
            <h1 className=' text-3xl font-bold mb-10 mt-20'>Add Wallet</h1>
            <div className='w-10/12  relative mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='md:w-10/12 w-full mx-auto'>

                    <div className="form-control w-full ">
                        <input
                            type="text"
                            placeholder="Your Wallet Name"
                            className="input input-bordered border-success w-full"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: ' Wallet name is required'
                                }

                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>
                            }

                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <textarea
                            type="text"
                            placeholder="Your Wallat Test"
                            className="textarea  textarea-success w-full pt-10"
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: 'Text is required'
                                }
                            })}
                        ></textarea>
                        <label className="label ">
                            {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.review?.message}</span>
                            }

                        </label>
                    </div>

                    <div className=' text-center'> <input type='submit' value='submit' className='py-1 mt-4 px-5 bg-blue-800 cursor-pointer text-white rounded' /></div>
                </form>

            </div>
        </div>
    );
};

export default AddWalet;