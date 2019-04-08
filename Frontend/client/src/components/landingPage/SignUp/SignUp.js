import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components'

const FormCenter = styled.div`
  margin-bottom: 100px;
`;

const FormField = styled.div`
  margin-bottom: 40px;
`;

const FormLabel = styled.div`
  display: block;
  text-transform: uppercase;
  font-size: .9em;
  color: white;
`;

const FormInput = styled.input`
    width: 85%;
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    border-bottom: 1px solid #445366;
    font-size: 1em;
    font-weight: 300;
    padding-bottom: 10px;
    margin-top: 10px;
`;

const FormCBLabel = styled.div`
  color: #646F7D;
  font-size: .9em;
`;

const FormCheckBox = styled.input`
  position: relative:
  top: 1.5px;
`;

const FormButton = styled.button`
    background-color: #52C4B9;
    color: white;
    border: none;
    outline: none;
    border-radius: 25px;
    padding: 15px 70px;
    font-size: .8em;
    font-weight: 500;
`;

class SignUp extends Component {
    render() {
        return (
          <Router>
              <FormCenter>
              <form onSubmit={this.handleSubmit}>
                <FormField>
                  <FormLabel htmlFor="name" >Full Name</FormLabel>
                  <FormInput type="text" id="name" placeholder="Enter your full name" name="name" />  
                </FormField>
                <FormField>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormInput type="text" id="password" placeholder="Enter your password" name="password" />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <FormInput type="text" id="email" placeholder="Enter your E-mail" name="name" />
                </FormField>

                <FormField>
                  <FormCBLabel>
                    <FormCheckBox type="checkbox" name="hasAgreed" /> I agree all statments in <a className="FormField__TermsLink" href="http://">terms of service</a>
                  </FormCBLabel>
                </FormField>
                
                <FormField>
                  <FormButton>Sign Up</FormButton>
                </FormField>
              </form>
            </FormCenter>
          </Router>
        );
    }
}

export default SignUp;