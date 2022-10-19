import React from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import Foursteps from './Foursteps';
import GiveThings from './GiveThings';
const Home = () => {
    return (
        
        <div className='container'>
            <HomeHeader/>
            <HomeThreeColumns/>
            <Foursteps/>
            <GiveThings/>
        </div>
    );
};

export default Home;