import React from 'react';
import { Link } from 'react-router-dom';
const GiveThings = () => {
    return (
        <section className="giveSection">
            <div class="btnGroup">
                <Link to="/login">Oddaj rzeczy</Link>
            </div>
        </section>
    );
};

export default GiveThings;