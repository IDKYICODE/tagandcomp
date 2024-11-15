import React from "react";
import "./Teams.css";

const Teams = () => {
  return (
    <div className="container">
      {/* Introductory Section */}
      <div className="intro-section">
        <h2>Everything You Need Is Here</h2>
        <h1>Your Accounting Done Right.</h1>
        <p>
          At Tagcompany, We Offer A Wide Range Of Professional Services To Meet
          Your Financial Needs. Our Services Include Auditing, Taxation,
          Financial Advisory, GST And Income Tax Laws, Litigation, And Business
          Consulting. Our Team Of Experts Is Dedicated To Providing End-To-End
          Financial Advisory, Tax Consulting, And Business Advisory Under One
          Roof, With A Focus On Individual Client Needs. We Pride Ourselves On
          Our Ability To Offer Comprehensive Tailored Solutions To Meet Your
          Unique Financial Needs.
        </p>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="service">
          <div className="icon-container">
            <span className="icon">📊</span>
          </div>
          <h3>Accounting</h3>
          <p>
            Our Expert Accountants Ensure Accurate And Timely Financial
            Reporting, Helping Businesses Maintain Transparency And Compliance.
          </p>
        </div>
        <div className="service">
          <div className="icon-container">
            <span className="icon">🧾</span>
          </div>
          <h3>GST</h3>
          <p>
            Navigate The Complexities Of Goods And Services Tax (GST) With Our
            Comprehensive GST Services, Including Registration, Filing, And
            Compliance.
          </p>
        </div>
        <div className="service">
          <div className="icon-container">
            <span className="icon">💰</span>
          </div>
          <h3>Income Tax</h3>
          <p>
            From Tax Planning To Filing, Our Team Provides Expert Guidance To
            Individuals And Businesses, Optimizing Tax Strategies And Minimizing
            Liabilities.
          </p>
        </div>
        <div className="service">
          <div className="icon-container">
            <span className="icon">🔍</span>
          </div>
          <h3>Audit & Assurance</h3>
          <p>
            Trust Our Experienced Auditors To Conduct Thorough Audits And
            Provide Valuable Insights To Enhance Internal Controls And Mitigate
            Risks.
          </p>
        </div>
        <div className="service">
          <div className="icon-container">
            <span className="icon">🚀</span>
          </div>
          <h3>Start-Up Consultancy</h3>
          <p>
            Launch Your Venture With Confidence With Our Start-Up Consultancy
            Services, Including Business Planning, Financial Forecasting, And
            Regulatory Compliance.
          </p>
        </div>
        <div className="service">
          <div className="icon-container">
            <span className="icon">📈</span>
          </div>
          <h3>Valuation & Financial Modeling</h3>
          <p>
            Make Informed Business Decisions With Our Valuation And Financial
            Modeling Services, Tailored To Your Specific Industry And
            Objectives.
          </p>
        </div>
        <div className="service">
          <div className="icon-container">
            <span className="icon">👨‍💼</span>
          </div>
          <h3>Virtual CFO</h3>
          <p>
            Access Strategic Financial Expertise Without The Overhead Costs Of A
            Full-Time CFO, With Our Virtual CFO Services Designed To Support
            Your Business Growth.
          </p>
        </div>
        <div className="service">
          <div className="icon-container">
            <span className="icon">📝</span>
          </div>
          <h3>Secretarial Services</h3>
          <p>
            Ensure Compliance With Regulatory Requirements And Streamline
            Corporate Governance With Our Secretarial Services, Covering Company
            Law And Regulatory Filings.
          </p>
        </div>
        <div className="service">
          <div className="icon-container">
            <span className="icon">👨‍👩‍👧‍👦</span>
          </div>
          <h3>Family Tax Planning</h3>
          <p>
            Protect And Maximize Your Family’s Wealth With Our Specialized Tax
            Planning Services, Tailored To Your Unique Financial Goals And
            Circumstances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
