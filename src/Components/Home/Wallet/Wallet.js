import React, { useState } from 'react';
import { useEffect } from 'react';
import { TbDeviceMobile } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { CgArrowRight } from "react-icons/cg";

const Wallet = () => {

    const [walletData, setWalletData] = useState([])

    useEffect(() => {
        fetch('https://aqueous-caverns-01571.herokuapp.com/wallet')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setWalletData(data?.success)
            })
    }, [])


    return (
        <div className=' max-w-6xl mx-auto py-16 px-5'>
            <h1 data-aos="fade-down" className=' text-[#0E133A] text-5xl font-bold lh-[57px] md:mb-16 mb-10'>Choose Your Wallets</h1>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>

                {
                    walletData.map(wallet =>

                        <div key={wallet?.id} data-aos="zoom-in-down" className={`overflow-hidden shadow-xl ${wallet?.color1} xl:py-9 py-7 flex flex-col justify-between text-left  rounded-2xl relative -z-20`}>
                            <div className='xl:px-8 px-7 flex items-center xl:mb-8 mb-5'>
                                <img src={wallet?.img} alt="icobns" />
                                <h1 className={` ${wallet?.color3} text-3xl leading-[38px] font-bold ml-5`}>{wallet?.Name}</h1>
                            </div>
                            <p className={`xl:px-8 px-7 ${wallet?.color3}  font-medium leading-[28px] mb-6`}>{wallet?.Text}</p>
                            <div className={` ${wallet?.color3} flex items-center gap-3 xl:mb-[70px] mb-10 xl:px-8 px-7`}>
                                <TbDeviceMobile />
                                <RiComputerLine />
                                <BsGlobe />
                            </div>
                            <div >
                                <button className={`flex items-center text-md py-4 rounded-r-full font-medium text-white ${wallet?.btnColor} px-9`}>Choose Wallet <CgArrowRight className=' text-xl ml-2 mt-1' /> </button>
                            </div>
                            <div className={`absolute top-0 -right-40 h-24 rounded-full w-80 ${wallet?.color2} -z-10`}>
                            </div>
                            <div className={` absolute bottom-28 -right-20 h-16 rounded-full w-40 ${wallet?.color2} -z-10`}>
                            </div>
                        </div>
                    )
                }





            </div>
        </div>
    );
};

export default Wallet;