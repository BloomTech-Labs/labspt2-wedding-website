import React from 'react'
import ReactGoogleMapLoader from 'react-google-maps-loader'
import ReactGooglePlacesSuggest from 'react-google-places-suggest'

const API_KEY = 'AIzaSyCQM9M4GcHOPSAAR6CX_msHP75_9FWawVc'
class GoogleSuggest extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)

    this.handleSelectSuggest = this.handleSelectSuggest.bind(this)
  }
  handleInputChange(e) {
    const value = e.target.value
    this.props.onChange(value)
  }

  handleSelectSuggest(suggest) {
    this.props.suggest(suggest.suggest.formatted_address)
  }

  render() {
    console.log(this.props)
    return (
      <ReactGoogleMapLoader
        params={{
          key: API_KEY,
          libraries: 'places,geocode',
        }}
        render={googleMaps =>
          googleMaps && (
            <div>
              <ReactGooglePlacesSuggest
                autocompletionRequest={{ input: this.props.search }}
                googleMaps={googleMaps}
                onSelectSuggest={this.handleSelectSuggest}>
                <input
                  type='text'
                  name=''
                  value={this.props.value}
                  placeholder='Search a location'
                  onChange={this.handleInputChange}
                />
              </ReactGooglePlacesSuggest>
            </div>
          )
        }
      />
    )
  }
}

export default GoogleSuggest
