import React, { Component } from 'react';
import Button from 'react-button-component';

const button = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
    height: '100px',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    fontSize: '20px',
}

const buttonDiv = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25px',
}

const billing = {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
}

const billBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    height: 'auto',
    border: '1px solid #000000'
}

const billInput = {
    width: '90%',
    height: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
    marginBottom: '5px',
}

export default class Billing extends Component {
    render() {
        return (
             <div style={billing}>
                <h2>Billing</h2>
                <div style={billBox}>
                    <label for="card-holder">Cardholder Name</label>
                    <input style={billInput} type="text" id="card-holder" placeholder="Cardholder Name" />
                    <label for="card-number">Card Number</label>
                    <input style={billInput} type="text" id="card-number" placeholder="Card Number" />
                    <label for="card-exp">Exp Date</label>
                    <input style={billInput} type="text" id="card-exp" placeholder="Exp Date" />
                    <label for="card-code">Special Code</label>
                    <input style={billInput} type="text" id="card-code" placeholder="Special Code" />
                    <label for="card-zip">Billing Zip</label>
                    <input style={billInput} type="text" id="card-zip" placeholder="Billing Zip" />
                </div>
                <div style={buttonDiv}>
                    <Button style={button} onClick={() => alert('Welcome to our site!')}>
                        Buy Now
                    </Button>
                </div>
             </div>
        );
    }
}