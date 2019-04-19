// Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Login from "./components/landingPage/login/Login";
import Design from "./components/design/Design";
import WeddingPage1 from "./components/design/weddingPage1/WeddingPage1";
import WeddingPage2 from "./components/design/weddingPage2/WeddingPage2";
import WeddingPage3 from "./components/design/weddingPage3/WeddingPage3";
import Pricing from "./components/pricing/Pricing";
import RSVP from "./components/rsvp/rsvp";
import Billing from "./components/billing/Billing";
import Settings from "./components/settings/Settings";
import DashBoard from "./components/clientDashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/design" component={Design} />
          <Route path="/design1" component={WeddingPage1} />
          <Route path="/design2" component={WeddingPage2} />
          <Route path="/design3" component={WeddingPage3} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/rsvp" component={RSVP} />
          <Route path="/billing" component={Billing} />
          <Route path="/settings" component={Settings} />
          <Route path="/dashboard" component={DashBoard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
