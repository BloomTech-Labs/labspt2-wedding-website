import React, { Component } from "react";

import styled from "styled-components";

import couple from "../media/weddingCouple1.jpg";
import background from "../media/ScrapBookBackground.jpg";
import bells from "../media/bells.png";
import floral from "../media/floral.png";

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
`;

const Who = styled.h1`
  color: black;
  font-family: "Lobster", cursive;
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
  font-family: "Lobster", cursive;
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
font-family: 'Pacifico', cursive;
`

const PrettyWCWrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
margin-top: 5%;
`

const PrettyWC = styled.img`
width: 99%;
height: 70vh;
border: 1px solid black;
`

const FloralWrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
`

const Floral = styled.img`
width: 100%;
height: 50vh;
`

const StoryWrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
padding: 5%;
border-top: 1px solid black;
border-bottom: 1px solid black;
background: rgb(157, 242, 188);
opacity: 0.8;
`

const Story = styled.h3`
color: black;
font-family: "Lobster", cursive;
font-size: 3rem;
`

const P = styled.p`
color: black;
text-align: justify;
font-family: 'Courgette', cursive;
margin: 1%;
text-shadow: 0px 0px 0px #000000;
`

export default class WeddingPage2 extends Component {
  render() {
    return (
      <WP1Body>
        <div>
          <BellWrapper>
            <Bell1 src={bells} alt="It's some bells" />
            <Bell2 src={bells} alt="It's some more bells" />
          </BellWrapper>
          <WhoWrapper>
            <Who>Name of couple</Who>
          </WhoWrapper>
          <WhenWrapper>
            <When>Date of wedding</When>
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
          <PrettyWCWrapper>
            <PrettyWC src={couple} alt="Pretty White Couple" />
          </PrettyWCWrapper>
          <FloralWrapper>
            <Floral src={floral} alt="Finest free floral vector money can buy" />
          </FloralWrapper>
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
        </div>
      </WP1Body>
    );
  }
}
