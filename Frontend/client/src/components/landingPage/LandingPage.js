import React, { Component } from "react";
import Login from './login';
import DemoCarousel from "./Carousel";
// import SignUp from "./SignUp/SignUp";
// import SignIn from "./SignIn/SignIn";

export default class LandingPage extends Component {
  render(){
    return (
        <div>
            <DemoCarousel />
            <Login />
            {/* <SignUp />
            <SignIn /> */}
        </div>
    )
  }
};  

