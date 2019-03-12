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
                <input type="radio" name="non-attending" className="radio" /><label for="rsvpArea">Not Attending</label>
            </div>
            <p className="fine-print">Ask each individual guest</p>
        </div>
        <div className="rsvpForm">
            <label for="rsvpForm">What is your mailing address?</label>
            <input type="text" name="address" placeholder="address" className="textBox" />
            <p className="fine-print">Ask once per household.</p>
        </div>
        <div className="rsvpForm">
            <label for="rsvpForm">Are you friend or family of...?</label>
            <div className="rsvpArea">
                <input type="radio" name="Bride" className="radio" /><label for="Bride">Bride Name</label>
                <input type="radio" name="Groom" className="radio" /><label for="Grrom">Groom Name</label>
                <input type="radio" name="Both" className="radio" /><label for="Both">Both</label>
                <p className="fine-print">Ask each individual guest</p>
            </div>
        </div>
        <div className="button">Add Question</div>
        <div className="button">Save</div>
    </div>
      )
    };
}