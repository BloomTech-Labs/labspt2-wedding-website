import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

import './login.css';

import styled from 'styled-components'

const LoginPage = styled.div`
    height: 100vh;
    display: flex;
    color: white;
`;

const Aside = styled.div`
    display: flex;
    width: 50%;
    background-color: #66DAC7;

    @media screen and (max-width: 1024){
        width: 0%;
    }
`;

const LoginForm = styled.div`
    width: 50%;
    background-color: #2E4158;
    padding: 25px 40px;
    overflow: auto;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

const PageSwitch = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10%;
`;

const FormTitle = styled.div`
    color: #707C8B;
    font-weight: 300;
    margin-bottom: 50px;
`;

const StyledLink = styled(Link)`
    color: #707C8B;
    text-decoration: none;
    display: inline-block;
    font-size: 1.7em;
    margin: 0 10px;
    padding-bottom: 5px;
`;

class Login extends Component {
    render() {
        return (
             <Router>
                <LoginPage>
                    <Aside>
                        <img src="" alt=""/>
                    </Aside>
                    <LoginForm>
                    <PageSwitch>
                        <NavLink to="/sign-in" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink to="/" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</NavLink>
                    </PageSwitch>

                    <FormTitle>
                        <StyledLink to="/sign-in">Sign In</StyledLink> or <StyledLink to="/" className="FormTitle__Link--Active " >Sign Up</StyledLink>
                    </FormTitle>

                    <Route exact path="/" component={SignUp}>
                    </Route>
                    <Route exact path="/sign-in" component={SignIn}>
                    </Route>
                    </LoginForm>
                </LoginPage>
             </Router>
        );
    }
}

export default Login;