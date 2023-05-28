import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/workout.jpg';
import './Navbar.css';

const Navbar = () => (
    <div className="navbar-container">

        <div> <img src={Logo} alt="logo" className="navbar-logo" /></div>
        <div className="navbar-links">
            <Link to="/" className="navbar-link active">Home</Link>
            <Link to="/BmiCalculator" className="navbar-link">BMI Calculator</Link>
        </div>
    </div>
);

export default Navbar;
