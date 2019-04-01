import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
      email: '',
      password: '',
      partner1: '',
      partner2: '',
      weddingLocation: '',
      weddingDate: new Date(),
    }
    this.hadleChangeDate = this.hadleChangeDate.bind(this)
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
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
    this.props.editUser(userId, this.state)
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
                value='email'
                placeholder='user@email.com'
              />
            </div>
            <div style={box}>
              <label htmlFor='phone'>Phone:</label>
              <input
                type='text'
                name='Phone'
                value='Phone'
                placeholder='###-###-####'
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
              <input type='password' name='old' placeholder='********' />
            </div>
            <div style={box}>
              <label htmlFor='new'>New Password:</label>
              <input type='password' name='new' placeholder='********' />
            </div>
            <div style={buttonDiv}>
              <button onClick={this.handleSave}>Save</button>
            </div>
          </div>
          <div style={settingsBox}>
            <div style={rightBox}>
              <input
                type='partner'
                name='partner'
                placeholder='Partner Name'
                style={{ borderBottom: '1px solid black', width: '90%' }}
              />{' '}
              <FaEdit />
              <FaTrash />
            </div>
            <div style={rightBox}>
              <input
                type='partner'
                name='partner'
                placeholder='Partner Name'
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
                selected={this.state.weddingDate}
                onSelect={this.handleSelect} //when day is clicked
                onChange={this.hadleChangeDate} //only when value has changed
              />
            </div>
            <div style={rightBox}>
              <input
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.fetching,
  userInfo: state.userInfo,
})

export default connect(
  mapStateToProps,
  { editUser }
)(Settings)
