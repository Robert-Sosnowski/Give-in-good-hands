import React from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import Foursteps from './Foursteps';
const Home = () => {
    return (
        
        <div className='container'>
            <HomeHeader/>
            <HomeThreeColumns/>
            <Foursteps/>
        </div>
    );
};

export default Home;