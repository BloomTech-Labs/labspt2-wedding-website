
// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from "./components/landingPage/LandingPage";
import Login from './components/landingPage/login/Login';


class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Route exact path="/" component={LandingPage} ></Route>
          <Route exact path="/login" component={Login} ></Route>
        </div>
      </Router>
    );
  }
}

export default App;