import React, { Component } from "react";
import { Link } from "react-router-dom";

import Sidenav from "../sidenav/sidenav";

export default class Design extends Component {
  render() {
    return (
      <div>
        {/* <div>
          <Sidenav />
        </div> */}
        <div>
          <Link to="/design1">Design 1</Link>
        </div>
        <div>
          <Link to="/design2">Design 2</Link>
        </div>
        <div>
          <Link to="/design3">Design 3</Link>
        </div>
      </div>
    );
  }
}
