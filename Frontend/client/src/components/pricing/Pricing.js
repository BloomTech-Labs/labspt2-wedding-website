import React, { Component } from 'react'
import styled from 'styled-components'
// import './pricing.css'
//import StripeBtn from '../Stripe/stripeBtn'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImageHeader,
  CardText,
  CardTitle,
} from 'styled-card-component'

import {
  Googlecard,
  Uploadcard,
  Blogcard,
  Registycard,
  SetColor,
} from './PremiumCardStyles'

import Example from './PremiumCard'

const Pricingheader = styled.div`
  border: 10px solid red;
  border-radius: 15px;
  padding: 35px;
`

const H1 = styled.h1`
  font-weight: bold;
  display: flex;
  justify-content: center;
`

class Pricing extends Component {
  render() {
    return (
      <div>
        <Pricingheader>
          <H1>Why choose Premium?</H1>
          <div class='container'>
            <Example />
          </div>
        </Pricingheader>
      </div>
    )
  }
}

export default Pricing
