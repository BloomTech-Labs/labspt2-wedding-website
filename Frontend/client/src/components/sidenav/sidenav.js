import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// page imports
import Pricing from '../pricing/Pricing'
import RSVP from '../rsvp/rsvp'
import Billing from '../pages/billing'
import Settings from '../pages/settings'

// Other imports
import styled from 'styled-components'

// styling
const NavPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 15px;
    width: 100%;

    @media screen and (max-width: 1024px) {
        margin-left: 0;
        margin-right: 0;
        padding: 0;
        width: 100%;
    }

    @media screen and (max-width: 450px) {
        width: 90%;
        font-size: 10px;
`;

const MenuLogo = styled.h3`
    display: flex;
    justify-content: center;
    width: 92px;
    background-size: cover 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0;
    padding: 25px 0;
    text-decoration: none;
    text-transform: uppercase;

    @media screen and (max-width: 1024px) {
        text-align: center;
        width: 100%;
    }

    @media screen and (max-width: 450px) {
        width: 400px;
        font-size: 10px;
    }
`;

const SideNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    width: 20%;
    min-width: 150px;

    @media screen and (max-width: 1024px) {
    flex-direction: column; 
    width: 100%;
    }

    @media screen and (max-width: 450px) {
        width: 295px;
        font-size: 10px;
    }
`;

const Menu = styled.nav`
    background-color: #FFFFFF;
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    display: flex;
    padding: 0 40px;
    position: relative;
    height: 400px;

    @media screen and (max-width: 1024px) {
        display: flex;
        height: 100px; 
        width: 80%;
        align-items: center;
        margin-left: auto; 
        margin-right: auto;
        justify-content: center;
    }

    @media screen and (max-width: 450px) {
        width: 100%;
        font-size: 10px;
        height: 50px;
        align-items: center;
    }
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 10px 0;
    margin: 0;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: auto; 
        margin-right: auto;
        height: 100px;
        width: 100%;
    }

    @media screen and (max-width: 450px) {
        width: 250px;
        height: 50px;
        margin: 0;
    }
`;

const MenuListItem = styled.li`
    margin: 10px 0;
    text-align: left;

    @media screen and (max-width: 1024px) {
        display: flex;
        margin: 0 30px;
        text-align: center;
    }

    @media screen and (max-width: 450px) {
        width: 300px;
        margin: 0 5px;
                
    }
`;

const RTStyles = styled.div`
    display: flex;
    justify-content: end;
    align-items: end;
    height: 100vm;
    width: 50%;
    padding-left: 20%;

    @media screen and (max-width: 1024px) {
        padding: 0;
        margin: auto;

    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    color: #000000;
`;

const STLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: #010101;
`;

export default class Navigation extends Component {
    render() {
        return (
             <Router>
                    <NavPage>
                     <MenuLogo><StyledLink to="/">Home</StyledLink></MenuLogo>
                    <SideNav>
                        <Menu>
                            <div>
                                <MenuList>
                                    <MenuListItem><STLink to="/" >Home</STLink></MenuListItem>
                                    <MenuListItem><STLink to="/settings" >Settings</STLink></MenuListItem>
                                    <MenuListItem><STLink to="/pricing" >Pricing</STLink></MenuListItem>
                                    <MenuListItem><STLink to="/billing" >Billing</STLink></MenuListItem>
                                    <MenuListItem><STLink to="/rsvp" >RSVP</STLink></MenuListItem>
                                </MenuList>
                            </div>
                        </Menu>
                        <RTStyles>
                            <Route exact path="/"></Route>
                            <Route exact path="/settings" component={Settings}></Route>
                            <Route exact path="/pricing" component={Pricing}></Route>
                            <Route exact path="/billing" component={Billing}></Route>
                            <Route exact path="/rsvp" component={RSVP}></Route>
                        </RTStyles>
                    </SideNav>
                    </NavPage>
             </Router>
        );
    }
}