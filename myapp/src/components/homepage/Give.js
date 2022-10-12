import React from 'react';
import { Link } from 'react-router-dom';
const Give = () => {
    return (
        <section className='giveSection'>
            <h3>Zacznij Pomagać!</h3>
            <h3>Oddaj niechciane rzeczy w dobre ręce</h3>
            <div><Link to="/login">Oddaj rzeczy</Link></div>
            <div><Link to="/login">Zorganizuj zbiórkę</Link></div>
        </section>
    );
};

export default Give;