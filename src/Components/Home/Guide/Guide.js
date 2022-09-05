import React from 'react';
import guide1 from '../../../assect/guide1.png'
import guide2 from '../../../assect/guide2.png'
import guide3 from '../../../assect/guide3.png'
import guide4 from '../../../assect/guide4.png'
const Guide = () => {
    return (
        <div className=' max-w-6xl mx-auto py-16 px-10'>
            <h1 data-aos="fade-down" className=' text-[#0E133A] text-5xl font-bold lh-[57px] mb-16'>Quick Start Guide</h1>
            <div className=' grid lg:grid-cols-2 grid-cols-1 gap-y-28 gap-x-36'>
                <div data-aos="zoom-out" className=' bg-white hover:shadow-md cursor-pointer md:flex items-center py-3 rounded-md px-2'>
                    <div>
                        <div className=' h-[160px] w-[160px] bg-[#FFD456] rounded-full mx-auto md:mx-0'>
                            <img src={guide1} alt="guide1" />
                        </div>
                    </div>
                    <div className=' ml-5 text-left mt-4 md:mt-0'>
                        <h1 className=' text-2xl font-bold leading-[32px] text-[#0E133A] mb-5'>1. Create a wallet</h1>
                        <p className=' font-medium text-[#5B5D6D] leading-[24px]'>Create a Wallet using either a desktop computer or an mobile device.</p>
                    </div>
                </div>

                <div data-aos="fade-up-left" className=' bg-white hover:shadow-md cursor-pointer md:flex  items-center py-3 rounded-md px-2'>
                    <div>
                        <div className=' h-[160px] w-[160px] bg-[#FFD456] rounded-full mx-auto md:mx-0'>
                            <img src={guide2} alt="guide1" />
                        </div>
                    </div>
                    <div className=' ml-5 text-left mt-4 md:mt-0'>
                        <h1 className=' text-2xl font-bold leading-[32px] text-[#0E133A] mb-5'>2. Buy ETH</h1>
                        <p className=' font-medium text-[#5B5D6D] leading-[24px]'>You can buy Ethereum (ETH) directly on MetaMask or transfer it.</p>
                    </div>
                </div>

                <div data-aos="fade-down-right" className=' bg-white hover:shadow-md cursor-pointer md:flex  items-center py-3 rounded-md px-2'>
                    <div>
                        <div className=' h-[160px] w-[160px] bg-[#FFD456] rounded-full mx-auto md:mx-0'>
                            <img src={guide3} alt="guide1" />
                        </div>
                    </div>
                    <div className=' ml-5 text-left mt-4 md:mt-0'>
                        <h1 className=' text-2xl font-bold leading-[32px] text-[#0E133A] mb-5'>3. Connect your wallet</h1>
                        <p className=' font-medium text-[#5B5D6D] leading-[24px]'>Access your wallet to AoaSwap by clicking ‘Connect to a wallet’.</p>
                    </div>
                </div>

                <div data-aos="fade-left" className=' bg-white hover:shadow-md cursor-pointer md:flex  items-center py-3 rounded-md px-2'>
                    <div>
                        <div className=' h-[160px] w-[160px] mx-auto md:mx-0 bg-[#FFD456] rounded-full'>
                            <img src={guide4} alt="guide1" />
                        </div>
                    </div>
                    <div className=' ml-5 text-left mt-4 md:mt-0'>
                        <h1 className=' text-2xl font-bold leading-[32px] text-[#0E133A] mb-5'>4. Swap ETH to AKO</h1>
                        <p className=' font-medium text-[#5B5D6D] leading-[24px]'>You can start swapping as you have ETH available! Press ‘Select a token’ .</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;