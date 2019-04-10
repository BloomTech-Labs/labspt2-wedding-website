import React, { Component } from 'react'
import Button from 'react-button-component'
import styled from 'styled-components'

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`

const newButton = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '200px',
  height: '100px',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
  fontSize: '20px',
}

const BillingDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 1024px;

  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    flex-direction: column;
    width: 100%;
    min-width: 350px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`

const BillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  height: auto;
  border: 1px solid #000000;
`

const BillInput = styled.input`
  width: 90%;
  height: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 5px;
`

const H2 = styled.h2`
  text-align: center;
`

export default class Billing extends Component {
  render() {
    return (
      <BillingDiv>
        <H2>Billing</H2>
        <BillBox>
          <label for='card-holder'>Cardholder Name</label>
          <BillInput
            type='text'
            id='card-holder'
            placeholder='Cardholder Name'
          />
          <label for='card-number'>Card Number</label>
          <BillInput type='text' id='card-number' placeholder='Card Number' />
          <label for='card-exp'>Exp Date</label>
          <BillInput type='text' id='card-exp' placeholder='Exp Date' />
          <label for='card-code'>Special Code</label>
          <BillInput type='text' id='card-code' placeholder='Special Code' />
          <label for='card-zip'>Billing Zip</label>
          <BillInput type='text' id='card-zip' placeholder='Billing Zip' />
        </BillBox>
        <ButtonDiv>
          <Button
            style={newButton}
            onClick={() => alert('Welcome to our site!')}>
            Buy Now
          </Button>
        </ButtonDiv>
      </BillingDiv>
    )
  }
}