import React, { Component } from 'react';
import Nav from './components/nav';
import Header from './components/header';
import Game from './components/game';
import Footer from './components/footer';

const App = () =>
  <div className='wrapper'>
    <Nav />
    <Header />
    <Game />
    <Footer />
  </div>;

export default App;
