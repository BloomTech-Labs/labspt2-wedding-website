import React, { Component } from "react";

import styled from "styled-components";

import couple3 from "../media/couple3.jpg";
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

const Who = styled.h1`
  color: black;
  font-family: "Cabin", sans-serif;
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

const When = styled.h1`
  color: black;
  font-family: "Cabin", sans-serif;
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
  padding-bottom: 5%
`;

const HeartWP3 = styled.img`
width: 20%;
height: 70vh;
`

const Couple3 = styled.img`
  width: 60%;
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

const P = styled.p`
  width: 80%;
  line-height: 1.5;
  font-size: 1.5rem;
  color: black;
  text-align: justify;
  font-family: 'Gothic A1', sans-serif;
  margin: 1%;
  text-shadow: 0px 0px 0px #000000;
`;

const Footer = styled.div`
background: black;
padding: 5%;
`

export default class WeddingPage2 extends Component {
  render() {
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
            <Who>Name of couple</Who>
          </WhoWrapper>
          <WhenWrapper>
            <When>Date of wedding</When>
          </WhenWrapper>
          <CoupleWrapper>
            <HeartWP3 src={heartWP3} alt="A Heart" />
            <Couple3 src={couple3} alt="Young Lesbian Couple" />
          </CoupleWrapper>
          <StoryWrapper>
            <Story>Our Story</Story>
          </StoryWrapper>
          <StoryWrapper>
            {/* This will have to be coded so that the user can input their own story */}
            <P>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?"
            </P>
            <P>
              "On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection: he rejects
              pleasures to secure other greater pleasures, or else he endures
              pains to avoid worse pains."
            </P>
          </StoryWrapper>
        </WP3Body>
        <Footer></Footer>
      </ContentWrapper>
    );
  }
}
