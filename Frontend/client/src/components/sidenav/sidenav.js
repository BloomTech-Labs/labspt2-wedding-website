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

    @media only screen and (max-width: 1024px) and (min-width: 400px) {
        margin: 0;
        padding: 0;
        width: 100%;
    }
`;

const MenuLogo = styled.h3`
    display: flex;
    justify-content: center;
    width: 100px;
    margin: 0;
    padding: 25px 0;

    @media only screen and (max-width: 1024px) and (min-width: 400px) {
        text-align: center;
        width: 100%;
    }
`;

const SideNav = styled.div`
    display: flex;
    flex-direction: row;
    width: 20%;
    min-width: 150px;

    @media only screen and (max-width: 1024px) and (min-width: 400px) {
        flex-direction: column;
        width: 100%;
    }
`;

const Menu = styled.nav`
    display: flex;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    position: relative;
    height: 400px;
    padding: 0 40px 0 0;

    @media only screen and (max-width: 1024px) and (min-width: 400px) {
        display: flex;
        height: 100px;
        width: 90%;
        justify-content: center;
        margin: 0 auto;
    }
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding; 10px;

    @media only screen and (max-width: 1024px) and (min-width: 400px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100px;
        width: 100%;
    }
`;

const MenuListItem = styled.li`
    display: flex;
    margin: 10px 0;
    text-align: left;

    @media only screen and (max-width: 1024px) and (min-width: 600px) {
        display: flex;
        margin: 0 30px;
        text-align: center;
    }

    @media only screen and (max-width: 599px){
        margin: 0 5px;
    }
`;

const RTStyles = styled.div`
    display: flex;
    width: 100%;
`;

const StyledLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: #010101;
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