import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import styled from 'styled-components'

import background from '../media/ScrapBookBackground.jpg'
import bells from '../media/bells.png'
import PhotoButton from '../../weddingPhotos/photoButton'

const WP1Body = styled.div`
  margin: 0 auto;
  background-image: url(${background});
  width: 100%;
  max-width: 1080px;
  height: 232.5vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`

const BellWrapper = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
`

const Bell1 = styled.img`
  width: 30%;
  height: 7vh;
`

const Bell2 = styled.img`
  width: 30%;
  height: 7vh;
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

const PrettyWCWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 5%;
`

const StoryWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 5%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background: rgb(157, 242, 188);
  opacity: 0.8;
`

const Story = styled.h1``

const RSVPWrapper = styled.div``

class WeddingPage1 extends Component {
  constructor() {
    super()

    this.state = {}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
    event.preventDefault()
  }

  render() {
    return (
      <WP1Body>
        <div>
          <BellWrapper>
            <Bell1 src={bells} alt="It's some bells" />
            <Bell2 src={bells} alt="It's some more bells" />
          </BellWrapper>
          <PhotoButton />
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
          <RSVPWrapper>
            <button>
              {/* This will need to be linked to the answers page once it exists. */}
              RSVP
            </button>
          </RSVPWrapper>
          <PrettyWCWrapper />
          <StoryWrapper>
            <Story>Our Story</Story>
          </StoryWrapper>
          <StoryWrapper>
            <Story>Our Story</Story>
            <p>{this.props.siteInfo.story}</p>
            <Story>Proposal Story</Story>
            <p>{this.props.siteInfo.proposalStory}</p>
          </StoryWrapper>
        </div>
      </WP1Body>
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
)(WeddingPage1)
