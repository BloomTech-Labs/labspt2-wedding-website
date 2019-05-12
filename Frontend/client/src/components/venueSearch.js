// Imports
import React, { Component } from 'react'
import styled from 'styled-components';

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script'

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2%;
`

const Input = styled.input`
  width: 80%;
  padding: .5%;
`

class Search extends Component {
  // Define Constructor
  constructor(props) {
    super(props)

    // Declare State
    this.state = {
      city: '',
      query: '',
      address: null,
      lat: null,
      lng: null,
    }
  }

  handleInputChange = e => this.setState({ query: e.target.value })

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
    console.log(addressObject)
    let address = addressObject.address_components

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        city: address[0].long_name,
        query: addressObject.name,
        address: addressObject.formatted_address,
        lat: addressObject.geometry.location.lat(),
        lng: addressObject.geometry.location.lng(),
      })
    }
  }

  render() {
    return (
      <InputWrap>
        <Script
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyAJfBhKctGiH0CzM2oygDTaRcqpkHxqzpw&libraries=places'
          onLoad={this.handleScriptLoad}
        />
        <Input
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
    )
  }
}

export default Search
