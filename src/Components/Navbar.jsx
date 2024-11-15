import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    
    <header className="header">
    <img src="./logo1.png" className="logo" alt="logo" />
    
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/">About Us</a>
      <a href="/">Services</a>
      <a href="/">Teams</a>
      <a href="/">Contact Us</a>
    </nav>
  </header>
  )
}

export default Navbar
