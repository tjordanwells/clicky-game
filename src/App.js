import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from './components/Game'

const App = () => (
  <Router>
    <Route exact path="/" component={Game} />
  </Router>
);

export default App;
