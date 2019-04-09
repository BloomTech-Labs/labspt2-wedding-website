import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import Button from 'react-button-component'
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

  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    min-width: 500px;
  }

  @media screen and (max-width: 599px){
    max-width: 400px;
  }
`;

const RightBox = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;

  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    min-width: 500px;
  }
`;

const SpecialBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    min-width: 500px;
  }
`;

const InputBox = styled.input`
  border-bottom: 1px solid #000000;
  width: 90%;
`;

const buttonDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '25px',
  marginTop: '25px',
  height: '100px',
  minWidth: '250px',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
}

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
                <Box>
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" value="email" placeholder="user@email.com" />
                </Box>
                <Box>
                  <label htmlFor="phone">Phone:</label>
                  <input type="text" name="Phone" value="Phone" placeholder="###-###-####" />
                </Box>
                <SpecialBox>
                  <input type="checkbox" name="emails?" value="false" />
                  <label for="checkbox">Emails?</label>
                  <input type="checkbox" name="texts?" value="false" />
                  <label for="checkbox">Texts?</label>
                </SpecialBox>
                <Box>
                  <label htmlFor="old">Old Password:</label>
                  <input type="password" name="old"  placeholder="********" />
                </Box>
                <Box>
                  <label htmlFor="new">New Password:</label>
                  <input type="password" name="new"  placeholder="********" />
                </Box>
              </SettingsBox>
              <SettingsBox>
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
                  <input type="wedding" name="wedding" placeholder="Wedding Location" style={{borderBottom: '1px solid black', width: '90%'}} /><FaEdit /><FaTrash />
                </RightBox>
              </SettingsBox>
              <SettingsBox>
                  <Button style={buttonDiv}>
                    <Link to="/">Save</Link>
                  </Button>
              </SettingsBox>
          </SettingsPage>
        </Router>
      )
    };
}