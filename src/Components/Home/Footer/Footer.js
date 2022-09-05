import React from 'react';
import logo from '../../../assect/Logo.png'
import { BsGithub, BsDiscord, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='pb-12 pt-2 '>
            <div className=' max-w-6xl mx-auto px-5  lg:flex grid md:grid-cols-2 grid-cols-1 gap-12 justify-between  '>
                <div data-aos="zoom-out-up" className='w-40 md:text-left text-center mx-auto md:mx-0'>
                    <img src={logo} alt="logo" />
                    <p className=' my-5 leading-[32px] text-[#0E133A] font-medium'>Living Ecosystem
                        Decentralized Token
                    </p>
                    <div className=' flex items-center gap-3'>
                        <BsGithub />
                        <BsDiscord />
                        <BsFacebook />
                        <BsInstagram />
                    </div>
                </div>
                <div data-aos="zoom-out-up" className='w-40  md:text-left text-center mx-auto md:mx-0'>
                    <h1 className=' text-[#0E133A] font-bold leading-[32px] mb-3'>Pages</h1>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Network Statistic</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>What is AkaCoin</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Wallets</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Quick Start Guide</p>
                </div>
                <div data-aos="zoom-out-up" className='w-40  md:text-left text-center mx-auto md:mx-0'>
                    <h1 className=' text-[#0E133A] font-bold leading-[32px] mb-3'>Learn</h1>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Blog</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Video</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Podcast</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Network states</p>
                </div>
                <div data-aos="zoom-out" className='w-40  md:text-left text-center mx-auto md:mx-0'>
                    <h1 className=' text-[#0E133A] font-bold leading-[32px] mb-3'>Support</h1>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Custommer Service</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>FAQ</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Community</p>
                </div>

                <div data-aos="zoom-in" className='w-40  md:text-left text-center mx-auto md:mx-0'>
                    <h1 className=' text-[#0E133A] font-bold leading-[32px] mb-3'>About AKA.Coin</h1>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>About us</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Privacy policy</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Term of use</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Quick start guide</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Language support</p>
                    <p className=' text-[#5B5D6D] mb-2 opacity-80'>Cookie policy</p>
                </div>
            </div>
            <p className=' text-center text-[#5B5D6D] font-medium mt-5 opacity-80 text-sm'>©2022 AKA.COIN. All right reserved</p>
        </div>
    );
};

export default Footer;