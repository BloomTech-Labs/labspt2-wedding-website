import React, { Component } from "react";
import Login from './login';
import DemoCarousel from "./Carousel";
import SideNav from '../sidenav';
import Pricing from '../pages/pricing';
import RSVP from '../pages/rsvp';

export default class LandingPage extends Component {
  render(){
    return (
        <div>
            <DemoCarousel />
            <Login />
            <br />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'black'
            }}>
              <SideNav />
              <Pricing />
              <div><a href="#">Logout</a></div>
            </div>
            <br />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'black'
            }}>
              <SideNav />
              <RSVP />
              <div><a href="#">Logout</a></div>
            </div>
            
        </div>
    )
  }
};  

