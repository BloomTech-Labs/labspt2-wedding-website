import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import { connect } from 'react-redux';
import moment from 'moment';

import CountDown from "../CountDown";

import styled from "styled-components";

import background from "../media/ScrapBookBackground.jpg";
import bells from "../media/bells.png";

const WP1Body = styled.div`
  margin: 0 auto;
  background-image: url(${background});
  width: 100%;
  max-width: 1080px;
  height: 232.5vh;
  ackground-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

const BellWrapper = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
`;

const Bell1 = styled.img`
  width: 30%;
  height: 7vh;
`;

const Bell2 = styled.img`
  width: 30%;
  height: 7vh;
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
  text-align: center;
`;

const WhenWrapper = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5%;
  font-size: 5rem;
  text-align: center;
`;

const H1 = styled.h1`
  text-decoration: none;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 0px #FFFFFF;
  @media (max-width : 480px) {
    font-size: 3rem;
    }
`;

const H2 = styled.h2`
  text-decoration: none;
  font-family: 'Playfair Display', serif;
  margin-top: 4%;
  text-shadow: 2px 2px 0px #FFFFFF;
  @media (max-width : 480px) {
    font-size: 3rem;
    }
`;

const PrettyWCWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 5%;
`;

const StoryWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 5%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background: rgb(157, 242, 188);
  opacity: 0.8;
  @media (max-width : 480px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    }
`;

const Story = styled.h3`
  color: black;
  font-family: "Lobster", cursive;
  font-size: 3rem;
  @media (max-width : 480px) {
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    }
`;

//Styled components don't work with the plugin react-textarea-autosize
const userInput = {
  backgroundColor: "rgb(158, 143, 110 0.3)",
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

class WeddingPage1 extends Component {
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

  render() {
    return (
      <WP1Body>
        <div>
          <BellWrapper>
            <Bell1 src={bells} alt="It's some bells" />
            <Bell2 src={bells} alt="It's some more bells" />
          </BellWrapper>
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
          <div>
            <CountDown />
          </div>
          <RSVPWrapper>
            <button>
              {/* This will need to be linked to the answers page once it exists. */}
              RSVP 
            </button>
          </RSVPWrapper>
          <PrettyWCWrapper>
          </PrettyWCWrapper>
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
)(WeddingPage1)