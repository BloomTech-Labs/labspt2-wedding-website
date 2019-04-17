import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import { connect } from 'react-redux';
import moment from 'moment';

import CountDown from "../CountDown";

import styled from "styled-components";

import arrow from "../media/arrow.png";
import BackgroundDesign2 from "../media/BackgroundDesign2.jpg";
import camper from "../media/camper.jpg";
import girl from "../media/girlwithglasses.jpg";
import heartArrow from "../media/heartArrow.png";
import love from "../media/love.jpg";

const WP1Body = styled.div`
  margin: 0 auto;
  background-image: url(${BackgroundDesign2});
  width: 100%;
  max-width: 1080px;
  height: 232.5vh;
  ackground-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

const HeaderWrapper = styled.div`
  background: rgb(158, 143, 110);
  width: 70%;
  margin: 0 auto;
  -webkit-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
`;

const WhoWrapper = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  margin-top: 5%;
  font-size: 5rem;
`;

const WhenWrapper = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  margin-top: 5%;
  font-size: 5rem;
`;

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
`;

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
`;

const A = styled.a`
  text-decoration: none;
  font-family: "Rye", cursive;
  color: black;
`;

const NavAndCoupleWrapper = styled.div`
  display: flex;
`;

const PrettyWCWrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  margin: 20% 0% 5% 0%;
`;

const Arrow = styled.img`
  width: 33%;
  height: 13vh;
`;

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 3%;
  background: rgb(158, 143, 110);
  opacity: 0.8;
  margin: 0 auto;
  -webkit-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  align-items: center;
  margin-bottom: 3%;
`;

const Story = styled.h3`
  color: black;
  font-family: "Rye", cursive;
  font-size: 3rem;
`;

const Heart = styled.img`
  width: 30%;
  margin: 5%;
  -ms-transform: rotate(-20deg); /* IE 9 */
  -webkit-transform: rotate(-20deg); /* Safari 3-8 */
  transform: rotate(-20deg);
`;

const Love = styled.img`
  width: 25%;
  margin: 3% 3% 3% 21%;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
  -webkit-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
`;

//Styled components don't work with the plugin react-textarea-autosize
const userInput = {
  backgroundColor: "rgb(158, 143, 110)",
  border: "none",
  width: "100%",
  height: "auto",
  textAlign: "center",
  fontSize: "1.5rem",
  padding: "3%",
  color: "black",
  fontFamily: "Averia Serif Libre, cursive",
  marginTop: "2%",
  textShadow: "0px 0px 0px #000000"
};

const RSVPWrapper = styled.div`
`

class WeddingPage2 extends Component {
  constructor() {
    super();

    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    event.preventDefault();
  }
  //handleChange is for textarea input

  render() {
    return (
      <WP1Body>
        <div>
          <HeaderWrapper>
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
            <div>
            <CountDown />
            </div>
          </HeaderWrapper>
          <NavAndCoupleWrapper>
            <RSVPWrapper>
              <button>
                {/* This will need to be linked to the answers page once it exists. */}
                RSVP 
              </button>
            </RSVPWrapper>
            <Girl src={girl} alt="A Woman With Glasses" />
            <Camper src={camper} alt="Happy Camper" />
            <PrettyWCWrapper></PrettyWCWrapper>
          </NavAndCoupleWrapper>
          <StoryWrapper>
            <Arrow src={arrow} alt="Arrow" />
            <Story>Our Story</Story>
            <Arrow src={arrow} alt="Arrow" />
          </StoryWrapper>
          <Heart src={heartArrow} alt="A heart with an arrow through it" />
          <Love src={love} alt="Do what you love what you do" />
          <StoryWrapper>
            <form onSubmit={this.handleChange}>
              <Textarea
                style={userInput}
                type="text"
                rows="2"
                cols="20"
                placeholder="How did you meet"
                wrap="hard"
              />
              <button onClick={this.handleChange}>Submit</button>
            </form>
            <form onSubmit={this.handleChange}>
              <Textarea
                style={userInput}
                type="text"
                rows="2"
                cols="20"
                placeholder="Tell us about the proposal"
                wrap="hard"
              />
              <button onClick={this.handleChange}>Submit</button>
            </form>
          </StoryWrapper>
        </div>
      </WP1Body>
    );
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