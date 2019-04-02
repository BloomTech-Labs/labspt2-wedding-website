import React, { Component } from "react";
import Textarea from "react-textarea-autosize";

import styled from "styled-components";

import Spinner from "../Spinner";
import Images from "../Images";
import Buttons from "../Buttons";
import { API_URL } from "../config";

import background from "../media/ScrapBookBackground.jpg";
import bells from "../media/bells.png";
import floral from "../media/floral.png";

const WP1Body = styled.div`
  // start of desktop styles 
  margin: 0 auto;
  background-image: url(${background});
  width: 100%;
  max-width: 1080px;
  height: 232.5vh;
  ackground-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 991px) {
    /* start of large tablet styles */
    max-width: 991px;
    }

  @media screen and (max-width: 767px) {
    /* start of medium tablet styles */
    max-width: 767px;
    }  

  @media screen and (max-width: 479px) {
    /* start of phone styles */
    max-width: 479px;  
    }
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
`;

//Styled components don't work with the plugin react-textarea-autosize
const headerStyle = {
  backgroundColor: "none",
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
  margin-top: 5%;
`;

const Menu = styled.ul`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-evenly;
`;

const A = styled.a`
  text-decoration: none;
  font-family: "Pacifico", cursive;
`;

const PrettyWCWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 5%;
`;

const FloralWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Floral = styled.img`
  width: 100%;
  height: 50vh;
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

  @media screen and (max-width: 767px) {
    /* start of medium tablet styles */
    max-width: 767px;
    flex-direction: column;
    align-items: center;
    }  

  @media screen and (max-width: 479px) {
    /* start of phone styles */
    max-width: 479px;  
    }
`;

const Story = styled.h3`
  color: black;
  font-family: "Lobster", cursive;
  font-size: 3rem;
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
      <WP1Body>
        <div>
          <BellWrapper>
            <Bell1 src={bells} alt="It's some bells" />
            <Bell2 src={bells} alt="It's some more bells" />
          </BellWrapper>
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
          <NavWrapper>
            {/* This nav menu will need to be set up with restricted privilages. Look but don't touch privilages. */}
            <nav>
              <Menu>
                <li>
                  <A href="http://" className="menu_link menu_link-active">
                    Home
                  </A>
                </li>
                <li>
                  <A href="http://" className="menu_link">
                    Designs
                  </A>
                </li>
                <li>
                  <A href="http://" className="menu_link">
                    Pricing
                  </A>
                </li>
              </Menu>
            </nav>
          </NavWrapper>
          <PrettyWCWrapper>{content()}</PrettyWCWrapper>
          <FloralWrapper>
            <Floral
              src={floral}
              alt="Finest free floral vector money can buy"
            />
          </FloralWrapper>
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
