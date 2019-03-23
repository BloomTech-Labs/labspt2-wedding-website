import React, { Component } from "react";
import { Link } from "react-router-dom";
import PieChart from "react-minimal-pie-chart";

import styled from "styled-components";

import SideNav from "../sidenav/sidenav";

const DashContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  background-color: #4c5d72;
`;
const Button = styled.button`
  border-radius: 5%;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
  font-size: 0.8em;
  font-weight: 500;
  background: #52c4b9;
`;

const ShareButton = styled.button`
  border-radius: 5%;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
  font-size: 0.8em;
  font-weight: 500;
  background: #52c4b9;
  float: right;
  margin-right: 5%;
`;

const GLButton = styled.button`
  border-radius: 5%;
  color: white;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 70px;
  font-size: 0.8em;
  font-weight: 500;
  background: #52c4b9;
  margin-left: 5%;
`;

const SignOut = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% 3% 0% 3%;
  width: 100%;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const NameDate = styled.div`
display: flex;
flex-direction column;
`;

const Location = styled.div``;

const H1 = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: white;
  margin-top: 5%;
`;

const H2 = styled.h2`
  font-size: 2.5em;
  text-align: center;
  color: white;
  margin-top: 12%;
`;

const GuestList = styled.div`
margin-top: 5%;
border-top: 2px solid #707C8B;
padding 3%;
`;

const H3 = styled.h3`
  font-size: 1.5em;
  color: white;
  margin-bottom: 5%;
`;

const RSVP = styled.div`
margin-top: 5%;
border-top: 2px solid #707C8B;
padding 3%;
display: flex;
justify-content: space-between;
`;

const Registry = styled.div`
border-top: 2px solid #707C8B;
padding 3%;
`;

const Pie = styled.div`
  width: 25%;
`;

class Dashboard extends Component {
  render() {
    return (
      <DashContainer>
        <div>
          <SideNav />
          <SignOut>
            {/* Not sure if this will be in menu or not */}
            <Button>Sign Out</Button>
          </SignOut>
        </div>
        <HeadContainer>
          <Head>
            <NameDate>
              {/* Will need to route back to the design selection page MVP */}
              <Link to="/Design">
                <Button>Change Design</Button>
              </Link>
              {/* Will need to write code that auto populates name and date for wedding. */}
              <H1>Bri & Ryan's Wedding</H1>
              <H1>June 14, 2019</H1>
            </NameDate>
            <Location>
              {/* This will need to share the link to the personal wedding web page */}
              <ShareButton>Share</ShareButton>
              {/* Will need to populate info from server */}
              <H2>Wedding Reception Hall San Diego, Ca</H2>
            </Location>
          </Head>

          <GuestList>
            <H3>Guest List</H3>
            {/* Need to figure out how to import a CSV to the server, then how to give user that option. */}
            <Button>Import CSV</Button>
            {/* Needs to route to guest list */}
            <Link to="/GuestList">
              <GLButton>Guest List</GLButton>
            </Link>
          </GuestList>
          <RSVP>
            <H3>RSVP</H3>
            {/* Some pie chart plug in I'll have to talk to Marguel about goes here*/}
            {/* Needs to rout to RSVP page */}

            <Pie>
              <PieChart
                data={[
                  { title: "One", value: 10, color: "#E38627" },
                  { title: "Two", value: 15, color: "#C13C37" },
                  { title: "Three", value: 20, color: "#6A2135" }
                ]}
              />
              ;
            </Pie>
            <Link to="RSVP">
              <Button>Edit Questions</Button>
            </Link>
          </RSVP>
          <Registry>
            <H3>Registry</H3>
            {/* Amazon registry goes here. Need to figure out how */}
            <Button>Add Registry</Button>
          </Registry>
        </HeadContainer>
      </DashContainer>
    );
  }
}

export default Dashboard;
