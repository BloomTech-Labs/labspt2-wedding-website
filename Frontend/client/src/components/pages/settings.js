import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './settings.css'

import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
// import ScrollAnimation from 'react-animate-on-scroll';
import 'react-datepicker/dist/react-datepicker.css'

const SettingsPage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  max-width: 1800px;
  min-width: 1025px;
  margin: 0 auto;
  justify-content: space-around;
  border: 1px solid white;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

const SettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  background-color: #ffffff;
  margin: 0 25px;
  height: 300px;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`

const BoxArea = styled.div``

const RightBox = styled.div``

const SpecialBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const InputBox = styled.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;
  margin: 10px 0;
`

const LeftInput = styled.input`
  width: 50%;
  height: 28px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;
  margin: 10px 0;
`

let date = new Date();
date.setDate(date.getDate() + 1);  // tomorrow
const minDateValue = date.toISOString();  // convert to ISO string

export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    })
  }

  render() {
    return (
      <Router>
        <div className='settingsPage'>
          <div className='settingsBox'>
            <div>
              <Box>
                <label htmlFor='email'>Email:</label>
                <LeftInput
                  type='email'
                  name='email'
                  value='email'
                  placeholder='user@email.com'
                />
              </Box>
              <Box>
                <label htmlFor='phone'>Phone:</label>
                <LeftInput
                  type='text'
                  name='Phone'
                  value='Phone'
                  placeholder='###-###-####'
                />
              </Box>
              <SpecialBox>
                <input type='checkbox' name='emails?' value='false' />
                <label for='checkbox'>Emails?</label>
                <input type='checkbox' name='texts?' value='false' />
                <label for='checkbox'>Texts?</label>
              </SpecialBox>
              <Box>
                <label htmlFor='old'>Old Password:</label>
                <LeftInput type='password' name='old' placeholder='********' />
              </Box>
              <Box>
                <label htmlFor='new'>New Password:</label>
                <LeftInput type='password' name='new' placeholder='********' />
              </Box>
            </div>
          </div>
          <div className='settingsBox'>
            <div>
              <div className='rightBox'>
                <InputBox
                  type='partner'
                  name='partner'
                  placeholder='Partner Name'
                />{' '}
                <FaEdit />
                <FaTrash />
              </div>
              <div className='rightBox'>
                <InputBox
                  type='partner'
                  name='partner'
                  placeholder='Partner Name'
                />{' '}
                <FaEdit />
                <FaTrash />
              </div>
              <SpecialBox>
                <label for='calander'>Wedding Date</label>
                <DatePicker
                  selected={this.state.date}
                  onSelect={this.handleSelect} //when day is clicked
                  onChange={this.handleChange} //only when value has changed
                  minDate={minDateValue} 
                />
              </SpecialBox>
              <div className='rightBox'>
                <InputBox
                  type='wedding'
                  name='wedding'
                  placeholder='Wedding Location'
                  style={{ borderBottom: '1px solid black', width: '90%' }}
                />
                <FaEdit />
                <FaTrash />
              </div>
            </div>
          </div>
          <div>
            <button className='saveButton'>
              <Link to='/'>Save</Link>
            </button>
          </div>
        </div>
      </Router>
    )
  }
}
