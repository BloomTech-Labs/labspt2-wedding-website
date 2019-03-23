import React, { Component } from 'react'
import Button from 'react-button-component'
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom'
import GuestList from '../rsvp/GuestList'


const rsvpPage = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '400px',
    margin: '0 auto',
    paddingTop: '50px',
}

const rsvpForm = {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: '200px',
    border: '1px solid #000000',
    marginBottom: '25px',
    alignItems: 'center',
    justifyContent: 'center'
}

const textBox = {
    width: '250px',
    margin: '5px 25px',
    height: '25px'
}

const rsvpArea = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: '12px',
    width: '150px',
    justifyContent: 'left',
    padding: '10px 0',
}

const radio = {
    width: '50px'
}

const finePrint = {
    fontSize: '10px',
    justifyContent: 'end'
}

export default class RSVP extends Component {
    render() {
      return (
          <Router>
            <div style={rsvpPage}>
                <h2>RSVP Guest List</h2>
                <div style={rsvpForm}>
                <label for="rsvpForm">Guest Name</label>
                    <input type="text" name="first" placeholder="First Name" style={textBox} />
                    <input type="text" name="last" placeholder="Last Name" style={textBox}  />
                    <p style={finePrint}>Ask each individual guest</p>
                </div>
                <div style={rsvpForm}>
                <label for="rsvpForm">Will you be attending our wedding?</label>
                    <div style={rsvpArea}>
                        <input type="radio" name="attending" style={radio} /><label for="rsvpArea">Attending</label>
                        <input type="radio" name="non-attending" style={radio} /><label for="rsvpArea">Not Attending</label>
                    </div>
                    <p style={finePrint}>Ask each individual guest</p>
                </div>
                <div style={rsvpForm}>
                    <label for="rsvpForm">What is your mailing address?</label>
                    <input type="text" name="address" placeholder="address" style={textBox} />
                    <p style={finePrint}>Ask once per household.</p>
                </div>
                <div style={rsvpForm}>
                    <label for="rsvpForm">Are you friend or family of...?</label>
                    <div style={rsvpArea}>
                        <input type="radio" name="Bride" style={radio} /><label for="Bride">Bride Name</label>
                        <input type="radio" name="Groom" style={radio} /><label for="Grrom">Groom Name</label>
                        <input type="radio" name="Both" style={radio} /><label for="Both">Both</label>
                        <p style={finePrint}>Ask each individual guest</p>
                    </div>
                </div>
                <Button className="button">Add Question</Button>
                <Button className="button">Save</Button>

                {/* <Link to="/guestlist">Full Guest List</Link>
                <Route path='/guestlist' component={GuestList} /> */}
                
            </div>
          </Router>
      )
    };
}