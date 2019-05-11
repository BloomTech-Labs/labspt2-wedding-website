import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import styled from 'styled-components'

import CountDown from '../CountDown';
import background from '../media/background3.jpg'
import Modal from 'react-modal'
import RsvpModal from '../../modals/rsvp'
Modal.setAppElement('#root')

const WP1Body = styled.div`
  margin: 0 auto;
  background-image: url(${background});
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const WPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WhoWrapper = styled.div`
  padding: 3%;
  width: 80%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
  border-radius: 8px;
  background: rgba(177, 221, 241, 0.9);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const WhenWrapper = styled.div`
  padding: 3%;
  width: 80%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
  border-radius: 8px;
  background: rgba(177, 221, 241, 0.9);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const RSVPWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
`

const Button = styled.button`
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px;
  font-size: 1em;
  font-weight: 500;
  background: #52c4b9;
  cursor: pointer;
  margin: 5% auto;
  width: 30.3%;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  @media only screen and (max-width: 500px) and (min-width: 300px) {
    width: 60%;
    margin: 3% auto;
  }
  @media only screen and (max-width: 700px) and (min-width: 501px) {
    // width: 60%;
    margin: 3% auto;
  }
`

const StoryWrapper = styled.div`
  padding: 3%;
  width: 80%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
  border-radius: 8px;
  background: rgba(177, 221, 241, 0.9);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const H1 = styled.h1`
  font-size: 2em;
  text-shadow: 0px 0px 0px #000000;
`

const H2 = styled.h2`
  font-size: 1.5em;
  text-shadow: 0px 0px 0px #000000;
  margin: 1%;
`

const P = styled.p`
  font-size: 1em;
  text-shadow: 0px 0px 0px #000000;
`

class WeddingPage3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
  }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }
  render() {
    return (
      <WP1Body>
        <WPWrapper>
          <WhoWrapper>
            <H1>
              {this.props.siteInfo.partnerName1} &amp;{' '}
              {this.props.siteInfo.partnerName2}'s Wedding
            </H1>
          </WhoWrapper>
          <WhenWrapper>
            <H1>{moment(this.props.siteInfo.weddingDate).format('ll')}</H1>
            <CountDown />
            <H2>{this.props.siteInfo.venueLocation}</H2>
          </WhenWrapper>
          <RSVPWrapper>
            <Button onClick={this.handleModal}>
              {/* This will need to be linked to the answers page once it exists. */}
              RSVP
            </Button>
            <Modal isOpen={this.state.modal}>
              <RsvpModal
                user={this.props.siteInfo}
                handleClose={this.handleModal}
              />
            </Modal>
          </RSVPWrapper>
          <StoryWrapper>
            <H2>Our Story</H2>
            <P>{this.props.siteInfo.story}</P>
            <H2>Proposal Story</H2>
            <P>{this.props.siteInfo.proposalStory}</P>
          </StoryWrapper>
        </WPWrapper>
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
)(WeddingPage3)
