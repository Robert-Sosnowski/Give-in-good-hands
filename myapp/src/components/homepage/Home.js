import React from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import Foursteps from './Foursteps';
import GiveThings from './GiveThings';
import AboutUs from './AboutUs';
import Helping from './Helping';
const Home = () => {
    return (
        
        <div className='container'>
            <HomeHeader/>
            <HomeThreeColumns/>
            <Foursteps/>
            <GiveThings/>
            <AboutUs/>
            <Helping/>
        </div>
    );
};

export default Home;