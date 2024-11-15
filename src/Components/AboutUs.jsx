// AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-text">
                <h2>About Us</h2>
                <p>
                    At TAG & Co., we are dedicated to serving our clients with integrity,
                    innovation, and expertise. Founded by Saurabh Agarwal and Mukul Giria,
                    our firm has quickly become a recognized name in the field of chartered
                    accountancy since 2017. Our vision is to provide accurate accounting,
                    financial, and advisory services, empowering our clients to thrive in a
                    complex world.
                </p>
            </div>
            <div className="founders">
                <div className="founder">
                    <div className="founder-name">
                        <p className='f'>Saurabh Agarwal</p>
                        <p>Co - Founder</p>
                    </div>
                </div>
                <div className="founder">
                    <div className="founder-name">
                        <p className='f'>Mukul Giria</p>
                        <p >Co - Founder</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
