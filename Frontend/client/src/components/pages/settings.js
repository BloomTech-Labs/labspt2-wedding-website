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
import Page from '../Page'
 
import "react-datepicker/dist/react-datepicker.css";

const SettingsPage = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SettingsBox = styled.div`
  width: 500px;
  border: 1px solid black;
  justify-content: left;

`;

const Box = styled.div`
  display: flex;

`;

const RightBox = styled.div`

`;

const SpecialBox = styled.div`

`;

const InputBox = styled.input`

`;

const buttonDiv = {

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