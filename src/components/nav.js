import React from 'react';
import logo from '../images/Rick_and_Morty_logo.png';

const Nav = props => (
  
  <nav className="navbar navbar-dark bg-dark sticky-top">
    <a className="navbar-brand ml-4" href="/">
      <img src={logo} height="100px" width="280px" className="d-inline-block align-top" alt="" />
    </a>
    <text className="navbar-brand d-inline-block align-top mr-5 response">{props.response}</text>
    <h3 className="navbar-brand d-inline-block align-top mr-5">Score: {props.score} | High Score: {props.highScore}</h3>
  </nav>
);

export default Nav;
