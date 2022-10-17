import React from 'react';
import decor from "../../assets/assets/Decoration.svg"
const Decoration = (props) => {
    return (
        <div>
            <h3 className='giveSection'>{props.text}</h3>
           <img src={decor} alt=''/>
        </div>
    );
};

export default Decoration;