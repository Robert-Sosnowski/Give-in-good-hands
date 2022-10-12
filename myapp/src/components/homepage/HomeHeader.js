import React from 'react';
import Navbar from '../Navbar/Navbar';
import Backgruond from '../../assets/assets/Home-Hero-Image.jpg'
import Give from './Give';
const HomeHeader = () => {
    return (
        
            <section style={{ height: "100vh", display: "flex", backgroundColor: "white", }}>
                <div
                    style={{
                        width: "50vw",
                        backgroundImage: `url(${Backgruond})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        height: "100%",
                        backgroundPosition: "-235px"
                    }}
                />
                <div style={{ width: "50vw", }}>
                    <Navbar />
                    <Give />
                </div>

            </section>
          
    );
};

export default HomeHeader;