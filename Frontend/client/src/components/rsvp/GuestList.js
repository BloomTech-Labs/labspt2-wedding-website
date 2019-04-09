import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom'
import RSVP from './rsvp'
import { FaPlus } from 'react-icons/fa'
import styled from 'styled-components'
import Page from '../Page'

// styles

const GuestStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  min-width: 600px;
  align-items: center;
`;


export default class GuestList extends Component {
    render() {
      return (
        <Router>
          <Page>
            <GuestStyle>
                <h1>Guest List</h1>
                <Link to="/rsvp"><FaPlus /></Link>
                <label htmlFor="FaPlus">Add Guest Manually</label>
                <Route path='/rsvp' component={RSVP}/>
            </GuestStyle>
          </Page>
        </Router>
      )
    }
}