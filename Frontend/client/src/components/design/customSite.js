import React, { Component } from 'react'

import Axios from 'axios'

import WeddingPage1 from './weddingPage1/WeddingPage1'
import WeddingPage2 from './weddingPage2/WeddingPage2'
import WeddingPage3 from './weddingPage3/WeddingPage3'

const URL = 'https://joinourbigday.herokuapp.com'

class CustomSite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // everything needed for the site should be stored here
      loading: true,
      // story: '',
      // siteDesign: '',
      // proposalStory: '',
      // userId: '',
      site: null,
    }
  }

  //backend get : {url}/customSite/:siteUrl (this.props.match.params.customSite)

  //backend route still not tested, still need to seed data to test

  /* here we make a call to the custom site route using the site url from the match.params.customSite it should return an 
  array with 2 objects 

    - first object should be from the custom site table for that site url (siteInfo)
    {
      id,
      userUrl, <--- (this.props.match.params.customSite)
      story,
      proposalStory,
      siteDesign, <---- integer
      userId,
    }
    - second  object should be information necessary from userInfo for that userId (userInfo)
    {
      partnerName1,
      partnerName2,
      weddingDate,
      weddingParty,
      venueLocation,
      isPremium,
    }
    */

  //we Should send all that to state and pass the state to the weddingSite depending on the design chosen by the user
  componentDidMount() {
    Axios.get(`${URL}/customSite/${this.props.match.params.customSite}`)
      .then(res => {
        console.log(res.data[0])
        this.setState({ site: res.data[0], loading: false })
      })
      .catch(error => {
        throw 'There was a problem processing your request. Please try again.'
      })
  }

  render() {
    console.log(this.state)
    /* 
      if statements for loading when loading is true show loading text/animation

      if loading = false, return the weddingSite depending on the design chosen that should be on state (from custom site table) 
      and pass state (nessesary info) through props

      if userUrl is not found on the db.. return a not found type of page/message
    */

    // if (!userUrl) {
    //   throw "Error 404: Page Not Found"
    // }

    if (this.state.loading) {
      return <div>Loading Site</div>
    } else {
      if (!this.state.site) {
        return <div>does not exist</div>
      } else {
        if (this.state.site.siteDesign === 1) {
          return <WeddingPage1 siteInfo={this.state.site} />
        }
        if (this.state.site.siteDesign === 2) {
          return <WeddingPage2 siteInfo={this.state.site} />
        }
        if (this.state.site.siteDesign === 3) {
          return <WeddingPage3 siteInfo={this.state.site} />
        }
      }
    }
  }
}

export default CustomSite
