import React from 'react';
import Decoration from './Decoration';
import { Link } from 'react-router-dom';
const Helping = () => {
    return (<>
        <Decoration text="Komu pomagamy?" />
        <section className='Helping'>

            <div class="btnGroup">
                <Link>Fundacjom</Link>
                <Link>Organizacjom pozarządowym</Link>
                <Link> Lokalnym zbiórkom</Link>
            </div>

        </section>
    </>
    );
};

export default Helping;