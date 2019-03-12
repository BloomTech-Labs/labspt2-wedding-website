import React, { Component } from "react";
import Login from './login';
import DemoCarousel from "./Carousel";

export default class LandingPage extends Component {
  render(){
    return (
        <div>
            <DemoCarousel />
            <br />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'black'
            }}>
            </div>
            <br />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'black'
            }}>
            </div>
        </div>
    )
  }
};  

