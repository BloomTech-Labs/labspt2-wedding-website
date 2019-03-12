import React, { Component } from "react";
import Login from './login';
import DemoCarousel from "./Carousel";

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
              <div><a href="#">Logout</a></div>
            </div>
            <br />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'black'
            }}>
              <div><a href="#">Logout</a></div>
            </div>
            
        </div>
    )
  }
};  

