import React, { Component } from "react";

import DemoCarousel from "./Carousel";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

export default class LandingPage extends Component {
  render(){
    return (
        <div>
            <DemoCarousel />
            <SignUp />
            <SignIn />
        </div>
    )
  }
};  

