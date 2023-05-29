import React from 'react';
import HeroBannerImg from '../../assets/images/banner.jpg';
import './HeroBanner.css';

const HeroBanner = () => {
    return (
        <div className="hero-banner-container">
            <div className="hero-banner-content">
                <h2 className="hero-banner-title">WORKOUT</h2>
                <h1 className="hero-banner-subtitle">
                    The harder you work <br /> The better you get
                </h1>
                <p className="hero-banner-description">
                    Check out the most effective exercises
                </p>
                <a href="src/components/HeroBanner/HeroBanner#exercises" className="hero-banner-link">
                    Check Exercises
                </a>
            </div>
            <img
                src={HeroBannerImg}
                alt="hero-banner"
                className="hero-banner-img"
            />
        </div>
    );
};

export default HeroBanner;
