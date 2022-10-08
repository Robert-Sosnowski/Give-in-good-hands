import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='NavbarItems'>
            <ul className='loginSection'>
                <li> <Link to="/login"> Zaloguj</Link></li>
                <li> <Link to="/register">Załóż konto</Link></li>

            </ul>
            <ul className='menuSection'>
                <li>Start</li>
                <li>O co chodzi?</li>
                <li>O Nas</li>
                <li>Fundacja i organizacje</li>
                <li>Kontakt</li>
            </ul>
        </nav>
    );
};

export default Navbar;