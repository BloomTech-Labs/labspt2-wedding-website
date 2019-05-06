import React, { Component } from 'react'
import styled from 'styled-components'
// import './pricing.css'
import StripeBtn from '../Stripe/stripeBtn'

import PremiumCard from './PremiumCard'
import PricingReviews from './PricingReviews'

const Pricingheader = styled.div`
  border: 10px solid red;
  border-radius: 15px;
  padding: 35px;
  background-color: #f8f8f8;
`

const H1 = styled.h1`
  font-weight: bold;
  display: flex;
  justify-content: center;
`
const H2 = styled.h2`
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 20px;
`
const StripeB = styled.button`
  color: green;
`

class Pricing extends Component {
  render() {
    return (
      <div>
        <Pricingheader>
          <H1>Why choose Premium?</H1>
          <PremiumCard />
          <H2> Continue for free or subscribe to Join Our Big Day Premium.</H2>
          <PricingReviews />
          <StripeBtn />
        </Pricingheader>
      </div>
    )
  }
}

export default Pricing
