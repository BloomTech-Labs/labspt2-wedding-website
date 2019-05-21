// Imports
import React, { Component } from 'react'
import styled from 'styled-components'

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script'
import linkFunction from './LinkFunction'

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2%;
`

const Input = styled.input`
  width: 80%;
  padding: 0.5%;
`

class Search extends Component {
  // Define Constructor
  constructor(props) {
    super(props)

    // Declare State
    this.state = {
      query: '',
      url: '',
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
    console.log('addres', addressObject)
    let address = addressObject.address_components
    const formattedAddress = addressObject.formatted_address
    const lat = addressObject.geometry.location.lat()
    const lng = addressObject.geometry.location.lng()
    const place_id = addressObject.place_id

    // Check if address is valid
    if (address) {
      // Set State
      // this.setState({
      //   query: addressObject.name,
      //   url: linkFunction(lat, lng, place_id),
      // })
      console.log('address exists')
      this.props.handlePlaceSelect(
        addressObject.name,
        formattedAddress,
        linkFunction(lat, lng, place_id)
      )
    }
  }

  render() {
    console.log(this.props.state)
    return (
      <InputWrap>
        <Script
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyAJfBhKctGiH0CzM2oygDTaRcqpkHxqzpw&libraries=places'
          onLoad={this.handleScriptLoad}
        />
        <Input
          id='autocomplete'
          placeholder='Enter Your Venue Address Here...'
          // value={this.state.query}
          value={this.props.state.query}
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
