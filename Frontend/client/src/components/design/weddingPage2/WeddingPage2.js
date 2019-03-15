import React, { Component } from "react";

import styled from "styled-components";

import arrow from "../media/arrow.png";
import BackgroundDesign2 from "../media/BackgroundDesign2.jpg";
import camper from "../media/camper.jpg";
import couple2 from "../media/couple2.jpg";
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

const Who = styled.h1`
  color: black;
  font-family: "Averia Serif Libre", cursive;
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
  font-family: "Averia Serif Libre", cursive;
  padding-bottom: 2%;
`;

const NavWrapper = styled.div`
  width: 15%;
  margin: 5%;
`;

const Menu = styled.ul`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: rgb(158, 143, 110);
  width: 100%;
  padding: 3%;
  text-align: center;
  align-content: space-evenly;
  height: 258px;
  -webkit-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
`;

const Camper = styled.img`
  width: 10%;
  height: 13vh;
  margin: 4% 0% 0% 47%;
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

const PrettyWC = styled.img`
  width: 100%;
  height: 50vh;
  border: 1px solid black;
  -webkit-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
  box-shadow: 17px 25px 11px -5px rgba(0, 0, 0, 1);
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

const P = styled.p`
  color: black;
  text-align: justify;
  font-family: 'Stardos Stencil', cursive;
  margin: 1%;
  text-shadow: 0px 0px 0px #000000;
`;

export default class WeddingPage2 extends Component {
  render() {
    return (
      <WP1Body>
        <div>
          <HeaderWrapper>
            <WhoWrapper>
              <Who>Name of couple</Who>
            </WhoWrapper>
            <WhenWrapper>
              <When>Date of wedding</When>
            </WhenWrapper>
          </HeaderWrapper>
          <NavAndCoupleWrapper>
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
            <Girl src={girl} alt="A Woman With Glasses" />
            <Camper src={camper} alt="Happy Camper" />
            <PrettyWCWrapper>
              <PrettyWC src={couple2} alt="Pretty White Couple" />
            </PrettyWCWrapper>
          </NavAndCoupleWrapper>
          <StoryWrapper>
            <Arrow src={arrow} alt="Arrow" />
            <Story>Our Story</Story>
            <Arrow src={arrow} alt="Arrow" />
          </StoryWrapper>
          <Heart src={heartArrow} alt="A heart with an arrow through it" />
          <Love src={love} alt="Do what you love what you do" />
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
        </div>
      </WP1Body>
    );
  }
}
