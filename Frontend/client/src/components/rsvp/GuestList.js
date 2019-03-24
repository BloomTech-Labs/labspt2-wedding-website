import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom'
import RSVP from './RSVP'
import { FaPlus } from 'react-icons/fa'

export default class GuestList extends Component {
    render() {
      return (
        <Router>
            <div>
                <Link to="/rsvp"><FaPlus />Add Guest Manually</Link>
                {/* <label htmlFor="FaPlus">Add Guest Manually</label> */}
                <Route path='/rsvp' component={RSVP}/>
            </div>
            
        </Router>
      )
    }
}