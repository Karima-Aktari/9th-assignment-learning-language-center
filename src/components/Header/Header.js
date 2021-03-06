import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-img">
            <h1 className="text-dark">Learning Language Center</h1>
            <div className="header">
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </nav>
            </div>

        </div>
    );
};

export default Header;