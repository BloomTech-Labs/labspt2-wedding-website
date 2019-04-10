import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../../actions'
import { withRouter } from 'react-router'

import DatePicker from 'react-datepicker'
import GoogleSuggest from '../googleSuggest'

class UserSetup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        username: '',
        weddingParty: '',
        venueLocation: '',
        partnerName1: '',
        partnerName2: '',
        weddingDate: new Date(),
      },
      search: '',
    }
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

  handleSubmit = e => {
    e.preventDefault()
    const userId = this.props.userInfo.id
    console.log('usersetup id', userId)
    console.log(this.state.userInfo)
    this.props.editUser(userId, this.state.userInfo)
    this.props.history.push('/')
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
    return (
      <div>
        <h1>User Setup</h1>
        <form>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            placeholder='Create a username'
            name='username'
            value={this.state.userInfo.username}
            onChange={this.inputHandler}
          />
          <label htmlFor=''>Partner 1</label>
          <input
            type='text'
            placeholder='partner'
            name='partnerName1'
            value={this.state.userInfo.partnerName1}
            onChange={this.inputHandler}
          />
          <label htmlFor=''>Partner 2</label>
          <input
            type='text'
            placeholder='partner'
            name='partnerName2'
            value={this.state.userInfo.partnerName2}
            onChange={this.inputHandler}
          />
          <label for='calander'>Wedding Date</label>
          <DatePicker
            selected={this.state.userInfo.weddingDate}
            onChange={this.handleChangeDate} //only when value has changed
          />
          <label htmlFor=''>Wedding Party</label>
          <input
            type='text'
            placeholder='Wedding party name'
            name='weddingParty'
            value={this.state.userInfo.weddingParty}
            onChange={this.inputHandler}
          />
          <label htmlFor=''>Venue Location</label>
          <GoogleSuggest
            onChange={this.handleLocationChange.bind(this)}
            suggest={this.handleSelectSuggest.bind(this)}
            search={this.state.search}
            value={this.state.userInfo.venueLocation}
          />
          <button onClick={this.handleSubmit}> Done </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

export default withRouter(
  connect(
    mapStateToProps,
    { editUser }
  )(UserSetup)
)
