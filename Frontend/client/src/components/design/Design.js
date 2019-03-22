import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Sidenav from "../sidenav/sidenav";

export default class Design extends Component {
  render() {
    return (
      <div>
        <div>
          <Sidevav />
        </div>
        <div>
          <Link to="/design1">Design 1</Link>
        </div>
        <div>
          <Link to="/design2">Design 2</Link>
        </div>
        <div>
          <Link to="/design3">Design 3</Link>
        </div>
        <Route exact path="/design1" component={Design1} />
        <Route exact path="/design2" component={Design2} />
        <Route exact path="/design3" component={Design3} />
      </div>
    );
  }
}
