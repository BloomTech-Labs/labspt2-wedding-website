import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import DatePicker from "react-datepicker";
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'; 
import "react-datepicker/dist/react-datepicker.css";

const SettingsPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  min-width: 1025px;
  justify-content: space-around;
  height: 100vh;
  max-height: 500px;
  margin-top: 50px;

  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    flex-direction: column;
    width: 100%;
    min-width: 350px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }



`;

const SettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  justify-content: center;



  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    width: 100%;
    max-width: 350px;
    justify-content: center;
    margin: 0;
  }
`;

const Box = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    min-width: 500px;
  }

  @media screen and (max-width: 599px){
    max-width: 400px;
  }
`;

const BoxArea = styled.div`
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
`;

const RightBox = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  align-items: center;

  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    min-width: 500px;
  }
`;

const SpecialBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;

  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    min-width: 500px;
  }
`;

const InputBox = styled.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255,255,255,0.3);
  transition: 0.3s all;
  margin: 10px 0;
`;

const LeftInput = styled.input`
  width: 50%;
  height: 28px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255,255,255,0.3);
  transition: 0.3s all;
`;

const Button = styled.button`
  width: 50%;
  margin: 0 auto;
  height: 100px;
  font-size: 24px;
  text-transform: uppercase;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
`;


export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }


    render() {
      return (
        <Router>
          <SettingsPage>
              <SettingsBox>
              <BoxArea>
                <Box>
                  <label htmlFor="email">Email:</label>
                  <LeftInput type="email" name="email" value="email" placeholder="user@email.com" />
                </Box>
                <Box>
                  <label htmlFor="phone">Phone:</label>
                  <LeftInput type="text" name="Phone" value="Phone" placeholder="###-###-####" />
                </Box>
                <SpecialBox>
                  <input type="checkbox" name="emails?" value="false" />
                  <label for="checkbox">Emails?</label>
                  <input type="checkbox" name="texts?" value="false" />
                  <label for="checkbox">Texts?</label>
                </SpecialBox>
                <Box>
                  <label htmlFor="old">Old Password:</label>
                  <LeftInput type="password" name="old"  placeholder="********" />
                </Box>
                <Box>
                  <label htmlFor="new">New Password:</label>
                  <LeftInput type="password" name="new"  placeholder="********" />
                </Box>                  
              </BoxArea>

              </SettingsBox>
              <SettingsBox>
              <BoxArea>
                <RightBox>
                  <InputBox type="partner" name="partner" placeholder="Partner Name" /> <FaEdit /><FaTrash />
                </RightBox>
                <RightBox>
                  <InputBox type="partner" name="partner" placeholder="Partner Name"/> <FaEdit /><FaTrash />
                </RightBox>
                <SpecialBox>
                  <label for="calander">Wedding Date</label>
                  <DatePicker
                    selected={this.state.date}
                    onSelect={this.handleSelect} //when day is clicked
                    onChange={this.handleChange} //only when value has changed
                  />
                </SpecialBox>
                <RightBox>
                  <InputBox type="wedding" name="wedding" placeholder="Wedding Location" style={{borderBottom: '1px solid black', width: '90%'}} /><FaEdit /><FaTrash />
                </RightBox>                  
              </BoxArea>

              </SettingsBox>
              <SettingsBox>
                  <Button>
                    <ButtonLink to="/">Save</ButtonLink>
                  </Button>
              </SettingsBox>
          </SettingsPage>
        </Router>
      )
    };
}