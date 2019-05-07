import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../../actions'
import { withRouter } from 'react-router'

import styled from 'styled-components'

import DatePicker from 'react-datepicker'
import GoogleSuggest from '../googleSuggest'

const USBody = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: white;
  margin: 5% auto;
  width: 80%;
`

const H1 = styled.h1`
  margin: 3%;
`
const Label = styled.label`
  font-size: 1.5em;
  margin: 1%;
`

const Input = styled.input`
  padding: 0.5%;
  margin-left: 1%;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  border-radius: 25px;
  color: white;
  border: none;
  outline: none;
  padding: 15px 70px;
  font-size: 0.8em;
  font-weight: 500;
  background: #52c4b9;
  margin: 5%;
`

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

  handleChangeDate = date => {
    console.log('datePicker', date)
    this.setState({
      userInfo: { ...this.state.userInfo, weddingDate: date },
    })
    console.log('datePicker', date)
  }

  handleSubmit = e => {
    e.preventDefault()
    const userId = this.props.userInfo.id
    console.log('usersetup id', userId)
    console.log(this.state.userInfo)
    if (this.state.userInfo.username === '') {
      const userInfo = {
        weddingParty: this.state.userInfo.weddingParty,
        venueLocation: this.state.userInfo.venueLocation,
        partnerName1: this.state.userInfo.partnerName1,
        partnerName2: this.state.userInfo.partnerName2,
        weddingDate: new Date(),
      }
      this.props.editUser(userId, userInfo)
      this.props.history.push('/')
    } else {
      this.props.editUser(userId, this.state.userInfo)
      this.props.history.push('/')
    }
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
      <USBody>
        <FormWrapper>
          <H1>User Setup</H1>
          <Form>
            {!this.props.userInfo.username ? (
              <FormWrapper>
                <Label htmlFor=''>Username</Label>
                <Input
                  type='text'
                  placeholder='Create a username'
                  name='username'
                  value={this.state.userInfo.username}
                  onChange={this.inputHandler}
                />
              </FormWrapper>
            ) : null}
            <Label htmlFor=''>Partner 1</Label>
            <Input
              type='text'
              placeholder='Partner Name'
              name='partnerName1'
              value={this.state.userInfo.partnerName1}
              onChange={this.inputHandler}
            />
            <Label htmlFor=''>Partner 2</Label>
            <Input
              type='text'
              placeholder='Partner Name'
              name='partnerName2'
              value={this.state.userInfo.partnerName2}
              onChange={this.inputHandler}
            />
            <Label for='calander'>Wedding Date</Label>
            <DatePicker
              selected={this.state.userInfo.weddingDate}
              onChange={this.handleChangeDate} //only when value has changed
            />
            <Label htmlFor=''>Wedding Party</Label>
            <Input
              type='text'
              placeholder='Wedding party name'
              name='weddingParty'
              value={this.state.userInfo.weddingParty}
              onChange={this.inputHandler}
            />
            <Label htmlFor=''>Venue Location</Label>
            <GoogleSuggest
              onChange={this.handleLocationChange.bind(this)}
              suggest={this.handleSelectSuggest.bind(this)}
              search={this.state.search}
              value={this.state.userInfo.venueLocation}
            />
            <Button onClick={this.handleSubmit}> Done </Button>
          </Form>
        </FormWrapper>
      </USBody>
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
