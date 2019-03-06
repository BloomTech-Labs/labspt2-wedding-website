import React, { Component } from 'react';

import LandingPage from "./components/landingPage/LandingPage";
import Dashboard from "./components/clientDashboard/Dashboard";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Dashboard />
      </div>
    );
  }
}

export default App;