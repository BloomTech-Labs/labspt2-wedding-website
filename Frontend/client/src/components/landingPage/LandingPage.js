import React, { Component } from "react";

import DemoCarousel from "./carousel";
import SignUp from "./SignUp/signUp";
import SignIn from "./SignIn/signIn";

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

