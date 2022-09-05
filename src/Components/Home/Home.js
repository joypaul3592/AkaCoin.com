import React from 'react';
import Akacoin from './Akacoin/Akacoin';
import Ammount from './Ammount/Ammount';
import Footer from './Footer/Footer';
import Guide from './Guide/Guide';
import Hero from './Hero/Hero';
import Wallet from './Wallet/Wallet';

const Home = () => {
    return (
        <div className=' overflow-hidden'>
            <div className=' bg-[#F4F5FA]'>
                <Hero />
            </div>
            <Akacoin />
            <Wallet />
            <Guide />
            <Wallet />
            <Ammount />
            <Footer />
        </div>
    );
};

export default Home;