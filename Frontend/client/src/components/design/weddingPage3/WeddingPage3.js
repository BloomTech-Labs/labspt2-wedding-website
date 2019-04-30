import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import styled from 'styled-components'

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

const WhoWrapper = styled.div`
  width: 80%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
  border-radius: 8px;
  background: rgba(177, 221, 241, 0.5);
`

const WhenWrapper = styled.div`
  width: 80%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
  border-radius: 8px;
  background: rgba(177, 221, 241, 0.5);
`

const RSVPWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
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
  margin: 3%;
`

const StoryWrapper = styled.div`
  width: 80%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
  border-radius: 8px;
  background: rgba(177, 221, 241, 0.5);
`

const H1 = styled.h1`
  font-size: 2em;
  text-shadow: 0px 0px 0px #000000;
`

const H2 = styled.h2`
  font-size: 1.5em;
  text-shadow: 0px 0px 0px #000000;
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
        <div>
          <WhoWrapper>
            <H1>
              {this.props.userInfo.partnerName1} &amp;{' '}
              {this.props.userInfo.partnerName2}'s Wedding
            </H1>
          </WhoWrapper>
          <WhenWrapper>
            <H1>{moment(this.props.userInfo.weddingDate).format('ll')}</H1>
            <H2>{this.props.userInfo.venueLocation}</H2>
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
)(WeddingPage3)
