import React, { Component } from 'react'
import Button from 'react-button-component'
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
    height: 100%;
    width: 100%;
    min-width: 1024px;
    margin: 0 auto;

    @media only screen and (max-width: 1024px) and (min-width: 400px) {
        flex-direction: column;
        width: 100%;
        min-width: 350px;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }
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

    @media screen and (max-width: 600px){
        width: 370px;
        margin-left: auto;
    }
`;

const TextBox = styled.input`
    width: 250px;
    margin: 10px 25px;
    height: 25px;
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
    color: #010101;
    margin: 0 5px;
    width: 200px;
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
                    <h2>RSVP Guest List</h2>
                    <RSVPForm>
                    <label for="rsvpForm">Guest Name</label>
                        <TextBox type="text" name="first" placeholder="First Name" />
                        <TextBox type="text" name="last" placeholder="Last Name" />
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
                    <RSVPForm>
                        <label for="rsvpForm">What is your mailing address?</label>
                        <TextBox type="text" name="address" placeholder="address" />
                        <TextBox type="text" name="city-zip" placeholder="city, state and zip" />
                        <FinePrint>Ask once per household.</FinePrint>
                    </RSVPForm>
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
                </RSVPPage>
            </Page>
          </Router>

      )
    };
}