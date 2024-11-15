// Services.js
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <div className="services-content">
        <h4 className="offer-title">Best Offer For You</h4>
        <h1 className="main-heading">Do More, In Less Time!</h1>
        <p className="description">
          Send Reminders To Your Debtors In Just A Few Clicks. Simply Set-Up And
          Automate Follow-Ups To Get Paid More Quickly.
        </p>
        <button className="discover-button">Discover All Service</button>
      </div>
      <div className="services-features">
        <div className="feature-block">
          <div className="icon certified-icon"></div>
          <h3>Certified Platform</h3>
          <p>Certification with plan and assessments</p>
        </div>
        <div className="feature-block">
          <div className="icon service-icon"></div>
          <h3>24/7 Service</h3>
          <p>Service that is available at every time and every day.</p>
        </div>
        <div className="feature-block">
          <div className="icon experience-icon"></div>
          <h3>12+ Years Experience</h3>
          <p>9+ years experience in accounting service</p>
        </div>
        <div className="feature-block">
          <div className="icon value-icon"></div>
          <h3>High Value, Low Price</h3>
          <p>Low Cost With Premium Service</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
