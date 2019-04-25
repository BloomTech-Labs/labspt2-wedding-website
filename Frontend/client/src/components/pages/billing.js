import React, { Component } from 'react'
import Button from 'react-button-component'
import styled from 'styled-components'
import './billing.css'

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
    justify-content: center;
    align-items: center;
    height: 100vh;

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

const BillingArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 50%;
    align-items: top;
    background-color: white;  
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
    padding: 25px 0 50px 0;

    @media only screen and (max-width: 1024px) and (min-width: 400px) {
      height: 65%;
    }
`;

const BillBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 0 auto;
    height: auto;

`;

const BillInput = styled.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255,255,255,0.3);
  transition: 0.3s all;
  margin: 10px 0;
`;

const H2 = styled.h2`
  text-align: center;
  padding-bottom: 50px;
  font-size: 24px;
`

export default class Billing extends Component {
    render() {
        return (
             <BillingDiv>
             <BillingArea>
                <H2>Billing</H2>
                <BillBox>
                    <label for="card-holder">Cardholder Name</label>
                    <BillInput className="inputField" type="text" id="card-holder" placeholder="Cardholder Name" />
                    <label for="card-number">Card Number</label>
                    <BillInput className="inputField" type="text" id="card-number" placeholder="Card Number" />
                    <label for="card-exp">Exp Date</label>
                    <BillInput className="inputField" type="text" id="card-exp" placeholder="Exp Date" />
                    <label for="card-code">Special Code</label>
                    <BillInput className="inputField" type="text" id="card-code" placeholder="Special Code" />
                    <label for="card-zip">Billing Zip</label>
                    <BillInput className="inputField" type="text" id="card-zip" placeholder="Billing Zip" />
                </BillBox>
             </BillingArea>
                <ButtonDiv>
                    <Button style={newButton} onClick={() => alert('Welcome to our site!')}>
                        Buy Now
                    </Button>
                </ButtonDiv>                 
             </BillingDiv>
        );
    }
}
