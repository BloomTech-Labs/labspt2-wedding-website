import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LandingPage from "./components/landingPage/LandingPage";
import Login from "./components/landingPage/login/Login";
import Design from "./components/design/Design";
import WeddingPage1 from "./components/design/weddingPage1/WeddingPage1";
import WeddingPage2 from "./components/design/weddingPage2/WeddingPage2";
import WeddingPage3 from "./components/design/weddingPage3/WeddingPage3";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/design" component={Design} />
        <Route exact path="/design1" component={WeddingPage1} />
        <Route exact path="/design2" component={WeddingPage2} />
        <Route exact path="/design3" component={WeddingPage3} />
      </div>
    );
  }
}

export default App;