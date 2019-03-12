import React, { Component } from "react";
import DemoCarousel from "./Carousel";
import { Route, Link } from "react-router-dom";
import Login from "./login";

import styled from "styled-components";

const LogInButton = styled.button`
position: absolute;
z-index: 1;
margin: 3%;
`

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>
          <LogInButton>
            <Link to="/login">Log In or Sign Up</Link>
          </LogInButton>
          <Route exact path="/login" component={Login} />
        </div>
        <DemoCarousel />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "black"
          }}
        />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "black"
          }}
        />
      </div>
    );
  }
}
