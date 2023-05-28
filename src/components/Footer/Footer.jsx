import React from 'react';
import Logo from '../../assets/images/workout.jpg';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <img src={Logo} alt="logo" className="footer-image" />
                <p className="footer-text">Made by Merkhat</p>
            </div>
        </div>
    );
};

export default Footer;
