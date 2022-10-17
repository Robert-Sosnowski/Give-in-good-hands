import React from 'react';
import { Link } from 'react-router-dom';
import Decoration from './Decoration';
const Give = () => {
    return (
        <section className='giveSection'>
           
            <Decoration text='Zacznij Pomagać!
            
            Oddaj niechciane rzeczy w dobre ręce'/>
            <div class="btnGroup">
                <Link to="/login">Oddaj rzeczy</Link>
                <Link to="/login">Zorganizuj zbiórkę</Link>
            </div>
        </section>
    );
};

export default Give;