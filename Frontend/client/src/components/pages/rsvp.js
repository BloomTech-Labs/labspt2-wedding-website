import React, { Component } from 'react'

import './rsvp.css'

export default class RSVP extends Component {
    render() {
      return (
        <div className="rsvpPage">
        <div className="rsvpForm">
        <label for="rsvpForm">Guest Name</label>
            <input type="text" name="first" placeholder="First Name" className="textBox" />
            <input type="text" name="last" placeholder="Last Name" className="textBox"  />
            <p className="fine-print">Ask each individual guest</p>
        </div>
        <div className="rsvpForm">
        <label for="rsvpForm">Will you be attending our wedding?</label>
            <div className="rsvpArea">
                <input type="radio" name="attending" className="radio" /><label for="rsvpArea">Attending</label>
                <input typ="radio" name="non-attending" className="radio" /><label for="rsvpArea">Not Attending</label>
            </div>
            <p className="fine-print">Ask each individual guest</p>
        </div>
    </div>
      )
    };
}