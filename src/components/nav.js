import React, { Component } from 'react';
import logo from '../images/logo.svg';

class Nav extends Component {
    state = {
        score: 0,
        guess: ''
    };

    render() {
      return (
        <nav className="navbar navbar-dark bg-dark sticky-top">
          <a className="navbar-brand ml-4" href="#">
            <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="" />
            Memory Click
          </a>
          <h2 className="navbar-brand d-inline-block align-top mr-5">Guess here</h2>
          <h2 className="navbar-brand d-inline-block align-top mr-5">Score here</h2>
        </nav>
      );
    }

}

export default Nav;
