import React, { Component } from "react";

import styled from "styled-components";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Not sure if this will be in menu or not */}
          <button>Sign Out</button>
        </div>
        <div>
          {/* To be added once menu is completed */}
          {/* <Menu /> */}
        </div>
        <div>
          {/* Will need to route back to the design selection page MVP */}
          <button>Change Design</button>
          {/* Will need to write code that auto populates name and date for wedding. */}
          <h1>Bri & Ryan's Wedding</h1>
          <h1>June 14, 2019</h1>
          {/* This will need to share the link to the personal wedding web page */}
          <button>Share</button>
          {/* Will need to populate info from server */}
          <h2>Wedding Reception Hall</h2>
          <h2>San Diego, Ca</h2>
        </div>
        <div>
          <h3>Guest List</h3>
          {/* Need to figure out how to import a CSV to the server, then how to give user that option. */}
          <button>Import CSV</button>
          {/* Needs to route to guest list */}
          <button>Guest List</button>
        </div>
        <div>
          <h3>RSVP</h3>
          {/* Some pie chart plug in I'll have to talk to Marguel about goes here*/}
          {/* Needs to rout to RSVP page */}
          <button>Edit Questions</button>
        </div>
        <div>
          <h3>Registry</h3>
          {/* Amazon registry goes here. Need to figure out how */}
          <button>Add Registry</button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
