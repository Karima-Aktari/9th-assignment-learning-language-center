import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="row mt-4 bg-footer">
            <div className="col-md-6">
                <nav className="d-flex  flex-column footer">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </nav>
            </div>
            <div className="col-md-6 pt-4 align-items-center ">
                <h2>Learning Language Center</h2>
                <div className=" d-flex justify-content-center">
                    <p><i className="fab fa-facebook-square text-info fs-1 p-1"></i></p>
                    <p><i className="fab fa-facebook-messenger text-info fs-1 p-1"></i></p>
                    <p><i className="fab fa-instagram text-warning fs-1 p-1"></i></p>
                    <p><i className="fab fa-skype text-info fs-1 p-1"></i></p>
                </div>
            </div>
            <p className="text-white"><i className="fas fa-at text-white"></i>Stay with us</p>
        </div>
    );
};

export default Footer;