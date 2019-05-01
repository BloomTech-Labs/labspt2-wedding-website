import React, { Component } from 'react'
import styled from 'styled-components'
import './pricing.css'
import StripeBtn from '../Stripe/stripeBtn'

const HRStyle = styled.hr`
  width: 50%;
`

const PricingLogo = styled.h1`
  text-align: center;
`

const H2 = styled.h2`
  text-align: center;
`

export default class Pricing extends Component {
  render() {
    return (
      <div className='pricePage'>
        <div className='priceArea'>
          <PricingLogo>Go Premium</PricingLogo>
          <HRStyle />
          <div className='boxStyle'>
            <ul>
              <li className='liStyle'>Planning Dashboard</li>
              <li className='liStyle'>Digital RSVPs</li>
              <li className='liStyle'>Website Hosting</li>
              <li className='liStyle'>Personal Wedding Website</li>
            </ul>
          </div>
          <HRStyle />
          <StripeBtn />
        </div>
      </div>
    )
  }
}
