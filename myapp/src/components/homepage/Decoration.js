import React from 'react';
import decor from "../../assets/assets/Decoration.svg"
const Decoration = (props) => {
    return (
        <div className='giveSection'>
            <h3>{props.text}</h3>
           <img src={decor} alt=''/>
        </div>
    );
};

export default Decoration;