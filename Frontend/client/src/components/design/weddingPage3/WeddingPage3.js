import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import styled from 'styled-components'

import background3 from '../media/rainbowbackground.jpg'
import heartWP3 from '../media/heartWP3.jpg'

const ContentWrapper = styled.div`
  background-image: url(${background3});
  width: 100%;
  height: 250vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`

const WP3Body = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1080px;
  background: #878d96;
`

const WhoWrapper = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  margin-top: 5%;
  font-size: 5rem;
`

const WhenWrapper = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  margin-top: 5%;
  font-size: 5rem;
`

const CoupleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 5%;
  padding-bottom: 5%;
`

const HeartWP3 = styled.img`
  width: 20%;
  height: 70vh;
`

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-bottom: 3%
  background: #878d96;
`

const RSVPWrapper = styled.div``

const Footer = styled.div`
  background: black;
  padding: 5%;
`

class WeddingPage3 extends Component {
  constructor() {
    super()

    this.state = {}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
    event.preventDefault()
  }
  //handleChange is for textarea input

  render() {
    return (
      <ContentWrapper>
        <RSVPWrapper>
          <button>
            {/* This will need to be linked to the answers page once it exists. */}
            RSVP
          </button>
        </RSVPWrapper>
        <WP3Body>
          <WhoWrapper>
            <h1>
              {this.props.userInfo.partnerName1} &amp;{' '}
              {this.props.userInfo.partnerName2}'s Wedding
            </h1>
          </WhoWrapper>
          <WhenWrapper>
            <h1>{moment(this.props.userInfo.weddingDate).format('ll')}</h1>
            <h2>{this.props.userInfo.venueLocation}</h2>
          </WhenWrapper>
          <CoupleWrapper>
            <HeartWP3 src={heartWP3} alt='A Heart' />
          </CoupleWrapper>
          <StoryWrapper>
            <Story>Our Story</Story>
          </StoryWrapper>
          
        </WP3Body>
        <Footer />
      </ContentWrapper>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  guests: state.guests,
})

export default connect(
  mapStateToProps,
  {}
)(WeddingPage3)
