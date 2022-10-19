import React from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import Foursteps from './Foursteps';
import GiveThings from './GiveThings';
import AboutUs from './AboutUs';
const Home = () => {
    return (
        
        <div className='container'>
            <HomeHeader/>
            <HomeThreeColumns/>
            <Foursteps/>
            <GiveThings/>
            <AboutUs/>
        </div>
    );
};

export default Home;