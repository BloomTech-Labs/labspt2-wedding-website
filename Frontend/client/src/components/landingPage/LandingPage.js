import React, { Component } from 'react'

import DemoCarousel from './Carousel'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import Login from './login';
import SideNav from '../sidenav';
import Pricing from '../pages/pricing';
import RSVP from '../pages/rsvp';


export default class LandingPage extends Component {
  render() {
    return (
	<div>
      <div>
        <DemoCarousel />
        <SignUp />
        <SignIn />
      </div>

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
	</div>
    )
  }
}