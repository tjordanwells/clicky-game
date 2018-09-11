import React from 'react';
import logo from '../images/logo.svg';

const Footer = () => (
    <nav className="navbar navbar-dark bg-dark">
      <div className="footer navbar-brand">
        <img src={logo} width="30" height="30" className="d-inline-block align-bottom" alt="" />
        Memory Click
      </div>
    </nav>

);

export default Footer;