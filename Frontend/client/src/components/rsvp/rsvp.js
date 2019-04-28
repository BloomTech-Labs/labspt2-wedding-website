import React, { Component } from 'react'
import Button from 'react-button-component'
import ScrollAnimation from 'react-animate-on-scroll';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom'
import GuestList from '../rsvp/GuestList'
import Page from '../Page'
import styled from 'styled-components'

const RSVPPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${'' /* height: 100%; */}
    width: 100%;
    max-width: 1280px;
    min-width: 1024px;
    margin: 0 auto;
`;

const RSVPForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 200px;
    border: 1px solid #000000;
    margin-bottom: 25px;
    align-items: center;
    justify-content: center;
    opacity: 1;
    background-color: white;
`;


const RSVPInput = styled.input`
  width: 60%;
  height: 28px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255,255,255,0.3);
  transition: 0.3s all;
  margin: 10px 0;
`;

const Radio = styled.input`
    width: 50px;
`;

const RSVPArea = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 12px;
    width: 150px;
    justify-content: left;
    padding: 10px 0;
`;

const FinePrint = styled.p`
    font-size: 10px;
    justify-content: end;
`;

const RSVPLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonArea = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-around;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: #FFFFFF;
    margin: 0 5px;
    width: 200px;
`;

const H2 = styled.h2 `
    font-size: 24px;
    color: #ffffff;
`;

const buttonStyles = {
    width: '200px', 
    border: '1px solid black', 
    height: '50px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: '20px', 
    marginLeft: 'auto', 
    marginRight: 'auto'
}


export default class RSVP extends Component {
    render() {
      return (
          <Router>
            <Page>
                <RSVPPage>
                    <H2>RSVP Guest List</H2>
                    <RSVPForm>
                    <label for="rsvpForm">Guest Name</label>
                        <RSVPInput type="text" name="first" placeholder="First Name" />
                        <RSVPInput type="text" name="last" placeholder="Last Name" />
                        <FinePrint>Ask each individual guest</FinePrint>
                    </RSVPForm>
                    <RSVPForm>
                    <label for="rsvpForm">Will you be attending our wedding?</label>
                        <RSVPArea>
                            <Radio type="radio" name="attending"/><label for="rsvpArea">Attending</label>
                            <Radio type="radio" name="non-attending" /><label for="rsvpArea">Not Attending</label>
                        </RSVPArea>
                        <FinePrint>Ask each individual guest</FinePrint>
                    </RSVPForm>
                    <ScrollAnimation animateIn="fadeInLeft">
                    <RSVPForm>
                        <label for="rsvpForm">What is your mailing address?</label>
                        <RSVPInput type="text" name="address" placeholder="address" />
                        <RSVPInput type="text" name="city-zip" placeholder="city, state and zip" />
                        <FinePrint>Ask once per household.</FinePrint>
                    </RSVPForm>                        
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp">
                    <RSVPForm>
                        <label for="rsvpForm">Are you friend or family of...?</label>
                        <RSVPArea>
                            <Radio type="radio" name="Bride"  /><label for="Bride">Bride Name</label>
                            <Radio type="radio" name="Groom"  /><label for="Groom">Groom Name</label>
                            <Radio type="radio" name="Both"  /><label for="Both">Both</label>
                            <FinePrint>Ask each individual guest</FinePrint>
                        </RSVPArea>
                    </RSVPForm>
                    <ButtonArea>
                        <Buttons>
                            <Button style={buttonStyles}>Add Question</Button>
                            <Button style={buttonStyles}>Save</Button>
                        </Buttons>
                        <RSVPLink>
                            <StyledLink to="/guestlist">Full Guest List</StyledLink>
                            <Route path='/guestlist' component={GuestList}/>
                        </RSVPLink>
                    </ButtonArea>                        
                    </ScrollAnimation>
                </RSVPPage>
            </Page>
          </Router>

      )
    };
}
