import React, { Component } from 'react';

import LandingPage from "./components/landingPage/LandingPage";
import Settings from "./components/clientSettings/Settings";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;