import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import styled from 'styled-components'

import arrow from '../media/arrow.png'
import BackgroundDesign2 from '../media/BackgroundDesign2.jpg'
import camper from '../media/camper.jpg'
import girl from '../media/girlwithglasses.jpg'
import heartArrow from '../media/heartArrow.png'
import love from '../media/love.jpg'

import Modal from 'react-modal'
import RsvpModal from '../../modals/rsvp'
Modal.setAppElement('#root')

const WP1Body = styled.div`
  margin: 0 auto;
  background-image: url(${BackgroundDesign2});
  width: 100%;
  max-width: 1080px;
  height: 232.5vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`

const HeaderWrapper = styled.div`
  background: rgb(158, 143, 110);
  width: 70%;
  margin: 0 auto;
  -webkit-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
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

const Camper = styled.img`
  width: 10%;
  height: 13vh;
  margin: 4% 0% 0% 37%;
  position: absolute;
  -webkit-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  -ms-transform: rotate(-20deg); /* IE 9 */
  -webkit-transform: rotate(-20deg); /* Safari 3-8 */
  transform: rotate(-20deg);
  border: 1px solid black;
`

const Girl = styled.img`
  width: 12%;
  height: 17vh;
  margin: 30% 3%;
  position: absolute;
  -webkit-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
  border: 1px solid black;
`

const NavAndCoupleWrapper = styled.div`
  display: flex;
`

const Arrow = styled.img`
  width: 33%;
  height: 13vh;
`

const Heart = styled.img`
  width: 30%;
  margin: 5%;
  -ms-transform: rotate(-20deg); /* IE 9 */
  -webkit-transform: rotate(-20deg); /* Safari 3-8 */
  transform: rotate(-20deg);
`

const Love = styled.img`
  width: 25%;
  margin: 3% 3% 3% 21%;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
  -webkit-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
`

const RSVPWrapper = styled.div``

class WeddingPage2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
    event.preventDefault()
  }
  //handleChange is for textarea input

  handleModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    return (
      <WP1Body>
        <div>
          <HeaderWrapper>
            <WhoWrapper>
              <h1>
                {this.props.siteInfo.partnerName1} &amp;{' '}
                {this.props.siteInfo.partnerName2}'s Wedding
              </h1>
            </WhoWrapper>
            <WhenWrapper>
              <h1>{moment(this.props.siteInfo.weddingDate).format('LL')}</h1>
              <h2>{this.props.siteInfo.venueLocation}</h2>
            </WhenWrapper>
          </HeaderWrapper>
          <NavAndCoupleWrapper>
            <RSVPWrapper>
              <button onClick={this.handleModal}>
                {/* This will need to be linked to the answers page once it exists. */}
                RSVP
              </button>
            </RSVPWrapper>
            <Modal isOpen={this.state.modal}>
              <RsvpModal
                user={this.props.siteInfo}
                handleClose={this.handleModal}
              />
            </Modal>
            <Girl src={girl} alt='A Woman With Glasses' />
            <Camper src={camper} alt='Happy Camper' />
            <PrettyWCWrapper />
          </NavAndCoupleWrapper>
          <StoryWrapper>
            <Arrow src={arrow} alt='Arrow' />
            <Story>Our Story</Story>
            <p>{this.props.siteInfo.story}</p>
            <Story>Proposal Story</Story>
            <p>{this.props.siteInfo.proposalStory}</p>
            <Arrow src={arrow} alt='Arrow' />
          </StoryWrapper>
          <Heart src={heartArrow} alt='A heart with an arrow through it' />
          <Love src={love} alt='Do what you love what you do' />
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
)(WeddingPage2)
