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
  /* display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-width: 1025px;
  justify-content: space-around;
  height: 100vh;
  max-height: 500px;
  margin-top: 50px; */

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  padding-top: 60px;
  /* width: 100vw;
    max-width: 1800px;
    min-width: 1025px; */
  margin: 0 auto;
  justify-content: space-around;
  width: 100%;
  max-width: 1280px;
  min-width: 1024px;

  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    /* flex-direction: column;
    width: 100%;
    min-width: 350px;
    width: 50%;
    margin-left: auto;
    margin-right: auto; */

    /* flex-direction: column;
    width: 100%;
    align-items: center; */
    flex-direction: column;
    width: 100%;
    min-width: 350px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`

const SettingsBox = styled.div`
  /* display: flex;
  flex-direction: column;
  width: 450px;
  justify-content: center; */

  display: flex;
  flex-direction: column;
  width: 450px;
  background-color: #ffffff;
  margin: 0 25px;
  height: 300px;
  padding: 10px 25px;
  border-radius: 5%;
  justify-content: center;

  @media only screen and (max-width: 1024px) and (min-width: 400px) {
    /* width: 100%;
    max-width: 350px;
    justify-content: center;
    margin: 0; */

    width: 100%;
    max-width: 350px;
    justify-content: center;
    margin: 0;
    height: 250px;
  }
`

const Box = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    min-width: 500px;
  }

  @media screen and (max-width: 599px) {
    max-width: 400px;
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
  margin-top: 10px;
  width: 100%;

  @media only screen and (max-width: 1024px) and (min-width: 600px) {
    min-width: 500px;
  }
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
  width: 50%;
  margin: 0 auto;
  height: 100px;
  font-size: 24px;
  text-transform: uppercase;
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
    this.hadleChangeDate = this.hadleChangeDate.bind(this)
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

  hadleChangeDate = date => {
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
              <input type='checkbox' name='emails?' value='false' />
              <label for='checkbox'>Emails?</label>
              <input type='checkbox' name='texts?' value='false' />
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
            <RightBox>
              <InputBox
                type='text'
                name='partnerName1'
                placeholder='Partner Name'
                value={this.state.userInfo.partnerName1}
                onChange={this.inputHandler}
                style={{ borderBottom: '1px solid black', width: '90%' }}
              />{' '}
              <FaEdit />
              <FaTrash />
            </RightBox>
            <RightBox>
              <InputBox
                type='text'
                name='partnerName2'
                value={this.state.userInfo.partnerName2}
                placeholder='Partner Name'
                onChange={this.inputHandler}
                style={{ borderBottom: '1px solid black', width: '90%' }}
              />{' '}
              <FaEdit />
              <FaTrash />
            </RightBox>
            <SpecialBox>
              <label for='calander'>Wedding Date</label>
              <DatePicker
                selected={this.state.userInfo.weddingDate}
                onChange={this.handleChangeDate} //only when value has changed
              />
            </SpecialBox>
            <RightBox>
              <GoogleSuggest
                onChange={this.handleLocationChange.bind(this)}
                suggest={this.handleSelectSuggest.bind(this)}
                search={this.state.search}
                value={this.state.userInfo.venueLocation}
              />
              <FaEdit />
              <FaTrash />
            </RightBox>
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
