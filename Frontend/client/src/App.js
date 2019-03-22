import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LandingPage from "./components/landingPage/LandingPage";
import Login from "./components/landingPage/Login";
import WeddingPage1 from "./components/design/weddingPage1/WeddingPage1";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/design1" component={WeddingPage1} />
      </div>
    );
  }
}

export default App;