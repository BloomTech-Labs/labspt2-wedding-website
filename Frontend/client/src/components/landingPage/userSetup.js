import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../../actions'
import { withRouter } from 'react-router'
import VenueSearch from '../venueSearch'
import styled from 'styled-components'
import Script from 'react-load-script'
import linkFunction from '../LinkFunction'

import DatePicker from 'react-datepicker'
import GoogleSuggest from '../googleSuggest'
const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2%;
`

const AddressInput = styled.input`
  width: 80%;
  padding: 0.5%;
`

const USBody = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  margin: 5% auto;
  width: 80%;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
  }
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
  width: 100%;
`

/*for some reason this element is not staying in step with the others. This sizing seems to fix the problem*/
const Input1 = styled.input`
  padding: 0.5%;
  margin-left: 1%;
  width: 167%;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 104%;
  }
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    width: 95%;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
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
        //formatted_address
        venueLocation: '',
        //return from link function
        addressUrl: '',
        partnerName1: '',
        partnerName2: '',
        weddingDate: new Date(),
      },
      search: '',
      query: '',
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

  handleScriptLoad = () => {
    // Initialize Google Autocomplete
    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete')
    )

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect)
  }

  handlePlaceSelect = e => {
    console.log(e)
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace()
    console.log('addres', addressObject)
    let address = addressObject.address_components
    const formattedAddress = addressObject.formatted_address
    const lat = addressObject.geometry.location.lat()
    const lng = addressObject.geometry.location.lng()
    const place_id = addressObject.place_id

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        query: addressObject.name,
        url: linkFunction(lat, lng, place_id),
      })
      this.setState({
        // search: e.target.value, value: e.target.value
        query: addressObject.name,
        userInfo: {
          ...this.state.userInfo,
          venueLocation: formattedAddress,
          addressUrl: linkFunction(lat, lng, place_id),
        },
      })
    }
  }

  handleSelectSuggest(suggest) {
    console.log(suggest)
    this.setState({
      search: '',
      userInfo: { ...this.state.userInfo, venueLocation: suggest },
    })
  }
  handleInputChange = e => this.setState({ query: e.target.value })

  render() {
    console.log(this.state.userInfo)
    return (
      <USBody>
        <FormWrapper>
          <H1>User Setup</H1>
          <Form>
            {!this.props.userInfo.username ? (
              <FormWrapper>
                <Label htmlFor=''>Username</Label>
                <Input1
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
            {/* <GoogleSuggest 
              onChange={this.handleLocationChange.bind(this)}
              suggest={this.handleSelectSuggest.bind(this)}
              search={this.state.search}
              value={this.state.userInfo.venueLocation}
            /> */}
            <VenueSearch />
            <InputWrap>
              <Script
                url='https://maps.googleapis.com/maps/api/js?key=AIzaSyAJfBhKctGiH0CzM2oygDTaRcqpkHxqzpw&libraries=places'
                onLoad={this.handleScriptLoad}
              />
              <AddressInput
                id='autocomplete'
                placeholder='Enter Your Venue Address Here...'
                value={this.state.query}
                onChange={this.handleInputChange}
                style={{
                  margin: '0 auto',
                  maxWidth: 800,
                }}
              />
            </InputWrap>
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
