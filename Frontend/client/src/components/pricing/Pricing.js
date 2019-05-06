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
      <div class='card'>
        <Pricingheader>
          <H1>Why choose Premium?</H1>
          <div class='container'>
            <Googlecard>a</Googlecard>
            <Blogcard>b</Blogcard>
            <Blogcard>c</Blogcard>
            <Registycard>d</Registycard>
          </div>
        </Pricingheader>
      </div>
    )
  }
}

export default Pricing
