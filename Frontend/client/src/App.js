// Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Login from "./components/landingPage/login/Login";
import Design from "./components/design/Design";
import WeddingPage1 from "./components/design/weddingPage1/WeddingPage1";
import WeddingPage2 from "./components/design/weddingPage2/WeddingPage2";
import WeddingPage3 from "./components/design/weddingPage3/WeddingPage3";
import Pricing from "./components/pricing/Pricing";
import RSVP from "./components/rsvp/rsvp";
import Billing from "./components/pages/billing";
import Settings from "./components/pages/settings";
import DashBoard from "./components/pages/Dashboard";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/design1" component={WeddingPage1} />
          <Route exact path="/design2" component={WeddingPage2} />
          <Route exact path="/design3" component={WeddingPage3} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/rsvp" component={RSVP} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/dashboard" component={DashBoard} />
        </div>
      </Router>
    );
  }
}

export default App;
