import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import DatePicker from 'react-datepicker'

import { connect } from 'react-redux'
import { editUser } from '../../actions'

import 'react-datepicker/dist/react-datepicker.css'

const settingsPage = {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  minWidth: '700px',
  justifyContent: 'space-between',
  height: '100vh',
  maxHeight: '600px',
  // marginLeft: 'auto',
  // marginRight: 'auto',
  marginTop: '100px',
}

const settingsBox = {
  display: 'flex',
  flexDirection: 'column',
  width: '45%',
}

const box = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '5px',
  marginTop: '20px',
}

const rightBox = {
  display: 'flex',
  marginBottom: '5px',
  marginTop: '20px',
  width: '100%',
}

const buttonDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '25px',
  marginTop: '25px',
  height: '50px',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
  width: '26%',
}

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        email: '',
        password: '',
        partnerName1: '',
        partnerName2: '',
        venueLocation: '',
        weddingDate: new Date(),
      },
      currentPassword: '',
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
      weddingDate: date,
    })
  }

  handleSave = e => {
    e.preventDefault()
    const userId = this.props.userInfo.id
    this.props.editUser(userId, this.state.userInfo)
    this.props.history.push('/')
    // needs to wait until loading = false to push to dashboard
  }

  render() {
    return (
      <div>
        <div style={settingsPage}>
          <div style={settingsBox}>
            <div style={box}>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                name='email'
                value={this.state.userInfo.email}
                placeholder='user@email.com'
                onChange={this.inputHandler}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
              }}>
              <input type='checkbox' name='emails?' value='false' />
              <label for='checkbox'>Emails?</label>
              <input type='checkbox' name='texts?' value='false' />
              <label for='checkbox'>Texts?</label>
            </div>
            <div style={box}>
              <label htmlFor='old'>Old Password:</label>
              <input
                type='password'
                name='old'
                placeholder='********'
                value={this.state.currentPassword}
                onChange={this.inputHandler}
              />
            </div>
            <div style={box}>
              <label htmlFor='new'>New Password:</label>
              <input
                type='password'
                name='new'
                value={this.state.userInfo.password}
                placeholder='********'
                onChange={this.inputHandler}
              />
            </div>
            <div style={buttonDiv}>
              <button onClick={this.handleSave}>Save</button>
            </div>
          </div>
          <div style={settingsBox}>
            <div style={rightBox}>
              <input
                type='text'
                name='partnerName1'
                placeholder='Partner Name'
                value={this.state.userInfo.partnerName1}
                onChange={this.inputHandler}
                style={{ borderBottom: '1px solid black', width: '90%' }}
              />{' '}
              <FaEdit />
              <FaTrash />
            </div>
            <div style={rightBox}>
              <input
                type='text'
                name='partnerName2'
                value={this.state.userInfo.partnerName2}
                placeholder='Partner Name'
                onChange={this.inputHandler}
                style={{ borderBottom: '1px solid black', width: '90%' }}
              />{' '}
              <FaEdit />
              <FaTrash />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
              }}>
              <label for='calander'>Wedding Date</label>
              <DatePicker
                selected={this.state.userInfo.weddingDate}
                onChange={this.handleChangeDate} //only when value has changed
              />
            </div>
            <div style={rightBox}>
              <input
                type='text'
                name='venueLocation'
                value={this.state.userInfo.venueLocation}
                onChange={this.inputHandler}
                placeholder='Wedding Location'
                style={{ borderBottom: '1px solid black', width: '90%' }}
              />
              <FaEdit />
              <FaTrash />
            </div>
          </div>
        </div>
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
