import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import GoogleSuggest from '../googleSuggest'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { editUser } from '../../actions'
import styled from 'styled-components'

import 'react-datepicker/dist/react-datepicker.css'

const SettingsPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`

const SettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 25px;
  border-radius: 8px;
  margin: 3% auto;
  width: 80%;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
    justify-content: center;
    height: 250px;
  }
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin: 3% auto;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
  }
`

const BoxArea = styled.div`
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`

const RightBox = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  align-items: center;

  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    min-width: 500px;
  }
`

const SpecialBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 150px;
  height: 10px;
  margin: 0 auto;
`

const Input = styled.input`
  margin-bottom: 6%;
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

const Button = styled.button`
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px;
  font-size: 1em;
  font-weight: 500;
  background: #52c4b9;
  cursor: pointer;
  margin: 5% auto;
  width: 30.3%;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 500px) and (min-width: 300px) {
    width: 60%;
    margin: 3% auto;
  }
  @media only screen and (max-width: 700px) and (min-width: 501px) {
    // width: 60%;
    margin: 3% auto;
  }
`

const IconBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60px;
  height: 30px;
`

const DateBox = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
`

const Label = styled.label`
  margin-right: 3%;
`

const ButtonLink = styled(Link)`
  text-decoration: none;
`

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        email: this.props.userInfo.email,
        password: '',
        partnerName1: this.props.userInfo.partnerName1,
        partnerName2: this.props.userInfo.partnerName2,
        venueLocation: this.props.userInfo.venueLocation,
        weddingDate: this.props.userInfo.weddingDate,
      },
      currentPassword: '',
      search: '',
    }
    this.handleChangeDate = this.handleChangeDate.bind(this)
  }

  inputHandler = e => {
    const { userInfo } = { ...this.state }
    const currentState = userInfo
    const { name, value } = e.target
    currentState[name] = value
    this.setState({
      user: value,
    })
    console.log('input handled')
  }

  handleChangeDate = date => {
    this.setState({
      userInfo: { ...this.state.userInfo, weddingDate: date },
    })
  }

  handleSave = e => {
    e.preventDefault()
    const userId = this.props.userInfo.id
    this.props.editUser(userId, this.state.userInfo)
    this.props.history.push('/')
    // needs to wait until loading = false to push to dashboard
  }

  handleLocationChange(fieldValue) {
    this.setState({
      // search: e.target.value, value: e.target.value
      search: fieldValue,
      userInfo: { ...this.state.userInfo, venueLocation: fieldValue },
    })
  }

  handleSelectSuggest(suggest) {
    console.log(suggest)
    this.setState({
      search: '',
      userInfo: { ...this.state.userInfo, venueLocation: suggest },
    })
  }

  render() {
    console.log('settings state', this.state)
    return (
      <div>
        <SettingsPage>
          <SettingsBox>
            <Box>
              <label htmlFor='email'>Email:</label>
              <LeftInput
                type='email'
                name='email'
                value={this.state.userInfo.email}
                placeholder='user@email.com'
                onChange={this.inputHandler}
              />
            </Box>
            <SpecialBox>
              <Input type='checkbox' name='emails?' value='false' />
              <label for='checkbox'>Emails?</label>
              <Input type='checkbox' name='texts?' value='false' />
              <label for='checkbox'>Texts?</label>
            </SpecialBox>
            <Box>
              <label htmlFor='old'>Old Password:</label>
              <LeftInput
                type='password'
                name='old'
                placeholder='********'
                value={this.state.currentPassword}
                onChange={this.inputHandler}
              />
            </Box>
            <Box>
              <label htmlFor='new'>New Password:</label>
              <LeftInput
                type='password'
                name='new'
                value={this.state.userInfo.password}
                placeholder='********'
                onChange={this.inputHandler}
              />
            </Box>
          </SettingsBox>
          <SettingsBox>
            <Box>
              <InputBox
                type='text'
                name='partnerName1'
                placeholder='Partner Name'
                value={this.state.userInfo.partnerName1}
                onChange={this.inputHandler}
                style={{ borderBottom: '1px solid black', width: '90%' }}
              />{' '}
              <IconBox>
              <FaEdit />
              <FaTrash />
              </IconBox>
            </Box>
            <Box>
              <InputBox
                type='text'
                name='partnerName2'
                value={this.state.userInfo.partnerName2}
                placeholder='Partner Name'
                onChange={this.inputHandler}
                style={{ borderBottom: '1px solid black', width: '90%' }}
              />{' '}
              <IconBox>
              <FaEdit />
              <FaTrash />
              </IconBox>
            </Box>
            <DateBox>
              <Label for='calander'>Wedding Date</Label>
              <DatePicker
                selected={this.state.userInfo.weddingDate}
                onChange={this.handleChangeDate} //only when value has changed
              />
            </DateBox>
            <Box>
              <GoogleSuggest
                onChange={this.handleLocationChange.bind(this)}
                suggest={this.handleSelectSuggest.bind(this)}
                search={this.state.search}
                value={this.state.userInfo.venueLocation}
              />
              <IconBox>
              <FaEdit />
              <FaTrash />
              </IconBox>
            </Box>
          </SettingsBox>
          <RightBox>
            <Button onClick={this.handleSave}>Save</Button>
          </RightBox>
        </SettingsPage>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.fetching,
  userInfo: state.userInfo,
})

export default withRouter(
  connect(
    mapStateToProps,
    { editUser }
  )(Settings)
)
