import React, { Component } from "react";
import Textarea from "react-textarea-autosize";

import styled from "styled-components";

import Spinner from "../Spinner";
import Images from "../Images";
import Buttons from "../Buttons";
import { API_URL } from "../config";

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

//Styled components don't work with the plugin react-textarea-autosize
const headerStyle = {
  backgroundColor: "#878d96",
  border: "none",
  width: "100%",
  textAlign: "center",
  fontSize: "4.5rem",
  padding: "2%",
  color: "black",
  fontFamily: "Averia Serif Libre, cursive",
  marginTop: "2%"
};

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

const NavWrapper = styled.div`
  width: 100%;
  padding: 3%;
  background-color: black;
`;

const Menu = styled.ul`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-evenly;
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

export default class WeddingPage2 extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      uploading: false,
      images: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    event.preventDefault();
  }
  //handleChange is for textarea input
  //onChange is for photo upload
  onChange = e => {
    const errs = [];
    const files = Array.from(e.target.files);

    this.setState({ uploading: true });

    const formData = new FormData();
    const types = ["image/png", "image/jpeg", "image/gif"];

    files.forEach((file, i) => {
      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`);
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
      }

      formData.append(i, file);
    });

    fetch(`${API_URL}/image-upload`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(images => {
        this.setState({
          uploading: false,
          images
        });
      });
  };

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    });
  };

  render() {
    //Not very DRY. Could be it's own component.
    const { uploading, images } = this.state;

    const content = () => {
      switch (true) {
        case uploading:
          return <Spinner />;
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />;
        default:
          return <Buttons onChange={this.onChange} />;
      }
    };
    return (
      <ContentWrapper>
        <NavWrapper>
          {/* This nav menu will need to be set up with restricted privilages. Look but don't touch privilages. */}
          <nav>
            <Menu>
              <li>
                <A1 href="http://" className="menu_link menu_link-active">
                  Home
                </A1>
              </li>
              <li>
                <A2 href="http://" className="menu_link">
                  Designs
                </A2>
              </li>
              <li>
                <A3 href="http://" className="menu_link">
                  Pricing
                </A3>
              </li>
            </Menu>
          </nav>
        </NavWrapper>
        <WP3Body>
          <WhoWrapper>
            <form onSubmit={this.handleChange}>
              <Textarea
                style={headerStyle}
                type="text"
                rows="2"
                cols="20"
                placeholder="Tell us your names"
                wrap="hard"
              />
              <button onClick={this.handleChange}>Submit</button>
            </form>
          </WhoWrapper>
          <WhenWrapper>
            <form onSubmit={this.handleChange}>
              <Textarea
                style={headerStyle}
                type="text"
                rows="2"
                cols="20"
                placeholder="When is the big day"
                wrap="hard"
              />
              <button onClick={this.handleChange}>Submit</button>
            </form>
          </WhenWrapper>
          <CoupleWrapper>
            <HeartWP3 src={heartWP3} alt="A Heart" />
            {content()}
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
