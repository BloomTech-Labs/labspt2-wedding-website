import React, { Component } from 'react'
import styled from 'styled-components'
// import './pricing.css'
import StripeBtn from '../Stripe/stripeBtn'

import PremiumCard from './PremiumCard'
import PricingReviews from './PricingReviews'
import Jumbo from './PremiumJumbo'

const Pricingheader = styled.div`
  border-radius: 8px;
  padding: 35px;
  background-color: #f8f8f8;
  width: 80%;
  margin: 3% auto;
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
          <Jumbo />
          <PremiumCard />
          <H2> Continue for free or subscribe to Join Our Big Day Premium.</H2>
          <PricingReviews />
          <H2>
            Thousands of users made their big day that much bigger with Join Our
            Big Day.{' '}
          </H2>
          <StripeBtn />
        </Pricingheader>
      </div>
    )
  }
}

export default Pricing
