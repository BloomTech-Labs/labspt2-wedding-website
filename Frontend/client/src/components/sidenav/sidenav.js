import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { logout } from '../../actions'

const sideNav = {
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  justifyContent: 'left',
  width: '20%',
}

const menuLogo = {
  display: 'flex',
  width: '92px',
  backgroundSize: 'cover 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  margin: '0',
  textDecoration: 'none',
  textTransform: 'uppercase',
}

const menu = {
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 2px 24px 0px rgba(0, 0, 0, 0.15)',
  borderRadius: '8px',
  display: 'flex',
  padding: '0 40px',
  position: 'relative',
}

const menuListItem = {
  listStyleType: 'none',
  margin: '10px -30px',
}

const menuList = {
  listStyleType: 'none',
  padding: '0',
  height: '100%',
  margin: '0',
  marginRight: '40px',
}

const menuLink = {
  color: '#3A3E47',
  display: 'inline-block',
  height: '100%',
  fontSize: '16px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  alignItems: 'center',
  padding: '0 3px',
}

class Navigation extends Component {
  handleClick = () => {
    this.props.logout()
  }

  render() {
    return (
      <div>
        <h3>
          <Link style={menuLogo} to='/'>
            Dashboard
          </Link>
        </h3>
        <div style={sideNav}>
          <nav style={menu}>
            <div>
              <ul style={menuList}>
                <li style={menuListItem}>
                  <Link to='/pricing' style={menuLink}>
                    Pricing
                  </Link>
                </li>
                <li style={menuListItem}>
                  <Link to='/billing' style={menuLink}>
                    Billing
                  </Link>
                </li>
                <li style={menuListItem}>
                  <Link to='/settings' style={menuLink}>
                    Account Settings
                  </Link>
                </li>
                {/* <li style={menuListItem}>
                    <Link to='/rsvp' style={menuLink}>
                      RSVP
                    </Link>
                  </li> */}
                <li style={menuListItem}>
                  <button onClick={this.handleClick} style={menuLink}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div />
      </div>
    )
  }
}

const mapStateToProps = state => {}

export default connect(
  mapStateToProps,
  { logout }
)(Navigation)
