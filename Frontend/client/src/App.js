import React, { Component } from 'react'

import LandingPage from './components/landingPage/LandingPage'

import './App.css'
import StripeBtn from './components/Stripe/stripeBtn'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LandingPage />
        <StripeBtn />
      </div>
    )
  }
}

export default App
