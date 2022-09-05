import React from 'react';
import "@fontsource/lato";
import { SiGithub } from "react-icons/si";
import planImg from '../../../assect/Plant Bitcoin.png'
import coin1 from '../../../assect/Bitcoin.png'
import coin2 from '../../../assect/Bitcoin1.png'
import coin3 from '../../../assect/Bitcoin2.png'
import coin4 from '../../../assect/Bitcoin3.png'
import coin5 from '../../../assect/Bitcoin4.png'

const Hero = () => {
    return (
        <div style={{ fontFamily: 'Lato' }} className=' max-w-6xl lg:flex  px-5 items-center  mx-auto text-left lg:py-10 py-5 lg:pt-28 pt-16'>
            <div className=' w-[65%]'>
                <p data-aos="fade-down-right" style={{ fontFamily: 'Lato' }} className=' text-[#0E133A] md:text-2xl text-xl font-semibold'>Introducing <span className=' text-[#1F33D8] ml-1'>AKA</span><span className='text-[#FFCD37]'>COIN</span>
                </p>
                <h1 data-aos="fade-up-right" className=' text-[#0E133A] md:text-6xl text-5xl font-bold md:leading-[80px] my-6'>
                    Living Ecosystem
                    Decentralized Token
                </h1>
                <p data-aos="fade-up-left" className=' text-[#5B5D6D] md:w-[95%] w-full mb-16'>Akacoin is a open source peer-to-peer digital currency, community-run technology that supports cryptocurrencies and thousands of decentralized applications.</p>
                <div className=' md:flex items-center gap-6 '>
                    <button data-aos="fade-down-left" style={{ fontFamily: 'Lato' }} className=' text-base font-medium bg-[#1F33D8] py-3 px-10 rounded-3xl text-white '>Get Started</button>
                    <button data-aos="zoom-in-up" style={{ fontFamily: 'Lato' }} className=' text-base font-medium bg-white text-black py-3 px-10 rounded-3xl flex items-center mt-3 md:mt-0 hover:bg-[#1F33D8] hover:text-white'><SiGithub className=' mr-2' />Source</button>
                </div>
            </div>
            <div className=' relative md:mt-28 mt-10  lg:mt-0 md:px-10 lg:px-0'>
                <img data-aos="fade-down" className=' z-30' src={planImg} alt="planImg" />
                <img data-aos="fade-up" className=' hidden md:block absolute lg:-top-20 -top-5 lg:-left-10 left-0' src={coin1} alt="coin1" />
                <img data-aos="fade-left" className='hidden md:block absolute bottom-40 left-2' src={coin2} alt="coin2" />
                <img data-aos="fade-left" className='hidden md:block absolute bottom-20 right-12' src={coin3} alt="coin3" />
                <img data-aos="fade-down-left" className='hidden md:block absolute -top-8 right-2' src={coin5} alt="coin5" />

            </div>
            <img data-aos="fade-left" className=' absolute top-[22%] right-0 hidden xl:block' src={coin4} alt="coin4" />
        </div>
    );
};

export default Hero;