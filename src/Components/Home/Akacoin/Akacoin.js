import React from 'react';
import waletimg from '../../../assect/Website.png'
import RectangleImg from '../../../assect/Mask Group.png'
import Rectangle2Img from '../../../assect/Rectangle 7.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ImPlay3 } from "react-icons/im";
import "@fontsource/lato";

const Akacoin = () => {
    return (
        <div style={{ fontFamily: 'Lato' }} className='px-5 max-w-6xl mx-auto py-16'>
            <h1 data-aos="fade-down" style={{ fontFamily: 'Lato' }} className=' text-[#0E133A] text-5xl  leading-[57px] font-bold md:mb-12 mb-6'>What Is Akacoin?</h1>
            <div className=' md:flex items-center mb-20'>
                <h1 data-aos="fade-right" className='text-[#0E133A] font-bold mb-5 md:mb-0 md:leading-[52px] md:text-4xl text-3xl text-left pr-5'>The fastest growing and community friendly</h1>
                <div data-aos="fade-left" data-aos-anchor-placement="center-bottom" className=' text-left'>
                    <p className=' text-base text-[#5B5D6D] leading-[28px] mb-5'>
                        Akacoin is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.
                    </p>
                    <button className='flex items-center text-lg font-semibold text-[#1F33D8]'>Explore Ecosystem <HiOutlineArrowNarrowRight className=' ml-4 mt-1' /> </button>
                </div>
            </div>
            <div className=' md:flex items-center justify-between'>
                <div data-aos="zoom-in-right" data-aos-anchor-placement="center-bottom" className=' bg-[#FDD557] rounded-xl mb-6 md:mb-0'>
                    <img src={waletimg} alt="waletimg" />
                </div>
                <div data-aos="zoom-in-left" className=' relative md:ml-10'>
                    <img src={RectangleImg} alt="RectangleImg" />
                    <img className=' absolute top-0 left-0 right-0 bottom-0' src={Rectangle2Img} alt="Rectangle2Img" />
                    <div className=' absolute top-[35%] left-0 bg-[#0C20CB] lg:px-7 px-4 lg:py-6 py-3 hover:bg-yellow-500 cursor-pointer  flex items-center text-white rounded-r-full'>
                        <div className=' text-left'>
                            <p className=' text-[12px] opacity-70 '>Learn Akacoin</p>
                            <h1 className=' lg:text-[24px] text-lg font-semibold lg;leading-[28px] '>Watch Video</h1>
                        </div>
                        <ImPlay3 className=' text-2xl lg:text-3xl text-white lg:ml-10 ml-5' />
                    </div>
                    <div className='absolute top-[35%] right-14 bg-[#0C20CB] lg:h-[92px] h-[75px] w-[75px] lg:w-[92px] rounded-full hover:bg-yellow-500 cursor-pointer  '>
                        <div className=' w-full h-full relative'>
                            <ImPlay3 className='text-2xl lg:text-3xl text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Akacoin;