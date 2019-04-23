import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
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

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
          <Router>
            <FormCenter>
                <form onSubmit={this.handleSubmit}>
                <FormField>
                    <FormLabel htmlFor="email">E-Mail Address</FormLabel>
                    <FormInput type="email" id="email" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                  </FormField>

                  <FormField>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormInput type="password" id="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </FormField>

                  <FormField>
                      <FormButton>Sign In</FormButton>
                  </FormField>
                </form>
                
            </FormCenter>
          </Router>
        );
    }
}

export default SignIn;