import React from 'react';

const Ammount = () => {
    return (
        <div className=' bg-[#FFD456] pb-2 mb-20'>
            <div className='bg-[#1F33D8] '>
                <div className=' max-w-6xl mx-auto py-16 lg:flex grid md:grid-cols-2 grid-cols-1 gap-12 justify-between items-center px-10'>
                    <div data-aos="zoom-out-left" className=' text-white md:text-left mx-auto md:mx-0 text-center'>
                        <p className=' text-base mb-5 opacity-70'>Transactions/Second</p>
                        <h1 className=' md:text-4xl text-2xl font-bold leading-[48px]'>2,905</h1>
                    </div>

                    <div data-aos="zoom-in" className=' text-white md:text-left text-center mx-auto md:mx-0'>
                        <p className=' text-base mb-5 opacity-70'>Total Transactions</p>
                        <h1 className=' md:text-4xl text-2xl font-bold leading-[48px]'>$64,540,470,129</h1>
                    </div>

                    <div data-aos="zoom-out" className=' text-white md:text-left text-center mx-auto md:mx-0'>
                        <p className=' text-base mb-5 opacity-70'>Avg. Cost/Transaction</p>
                        <h1 className=' md:text-4xl text-2xl font-bold leading-[48px]'>$0.00025</h1>
                    </div>

                    <div data-aos="zoom-out-right" className=' text-white md:text-left text-center mx-auto md:mx-0'>
                        <p className=' text-base mb-5 opacity-70'>Validator Nodes</p>
                        <h1 className=' md:text-4xl text-2xl font-bold leading-[48px]'>1,645</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Ammount;