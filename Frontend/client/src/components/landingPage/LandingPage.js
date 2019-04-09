// importing dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled from 'styled-components'

// import Login from './login';
// import DemoCarousel from "./Carousel";
import SideNav from '../sidenav/sidenav'
// import Dashboard from '../pages/Dashboard'

const LPStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024) {
    width: 1000px;
    margin: 0;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  height: 100px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  width: 200px;
`;


export default class LandingPage extends Component {
  render() {
    return (
        <Router>
          <LPStyle>
          <Route path='/' component={SideNav}/>
            {/* <Route exact path="/" component={DemoCarousel}></Route>
            <ButtonDiv>
              <Link to="/login" component={Login}>Get Started</Link>
            </ButtonDiv>
            <Route exact path="/login" component={Login}></Route> */}
          </LPStyle>
        </Router>
    )
  }
}
