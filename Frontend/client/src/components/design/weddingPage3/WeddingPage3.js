import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import { connect } from 'react-redux'
import moment from 'moment'

import styled from "styled-components";

import background3 from "../media/rainbowbackground.jpg";
import heartWP3 from "../media/heartWP3.jpg";

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
`;

const WP3Body = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1080px;
  background: #878d96;
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

const A1 = styled.a`
  text-decoration: none;
  color: red;
  font-size: 1.5rem;
  font-family: "Anton", sans-serif;
`;

const A2 = styled.a`
  text-decoration: none;
  color: orange;
  font-size: 1.5rem;
  font-family: "Anton", sans-serif;
`;

const A3 = styled.a`
  text-decoration: none;
  color: yellow;
  font-size: 1.5rem;
  font-family: "Anton", sans-serif;
`;

const CoupleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 5%;
  padding-bottom: 5%;
`;

const HeartWP3 = styled.img`
  width: 20%;
  height: 70vh;
`;

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-bottom: 3%
  background: #878d96;
`;

const Story = styled.h3`
  color: black;
  font-family: "Cabin", sans-serif;
  font-size: 3rem;
`;

//Styled components don't work with the plugin react-textarea-autosize
const userInput = {
  backgroundColor: "#878d96",
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

const Footer = styled.div`
  background: black;
  padding: 5%;
`;

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
            <HeartWP3 src={heartWP3} alt="A Heart" />
          </CoupleWrapper>
          <StoryWrapper>
            <Story>Our Story</Story>
          </StoryWrapper>
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
        </WP3Body>
        <Footer />
      </ContentWrapper>
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
)(WeddingPage1)