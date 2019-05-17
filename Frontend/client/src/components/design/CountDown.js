import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import './countDown.css'

class CountDown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      isActive: false,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      if (!this.props.userInfo) {
        const date = this.calculateCountdown(this.props.siteInfo.weddingDate)
        date ? this.setState(date) : this.stop()
      } else {
        const date = this.calculateCountdown(this.props.userInfo.weddingDate)
        date ? this.setState(date) : this.stop()
      }
    }, 1000)
  }

  componentWillUnmount() {
    this.stop()
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }

    timeLeft.sec = diff

    return timeLeft
  }

  stop() {
    clearInterval(this.interval)
  }

  addLeadingZeros(value) {
    value = String(value)
    while (value.length < 2) {
      value = '0' + value
    }
    return value
  }

  render() {
    const countDown = this.state

    return (
      <div className='Countdown'>
        {this.state.years > 0 ? (
          <span className={this.state.isActive ? 'Countdown-col' : 'blank'}>
            <span className='Countdown-col-element'>
              <strong className='bold'>
                {this.addLeadingZeros(countDown.years)}
              </strong>
              <span>{countDown.years === 1 ? 'Year' : 'Years'}</span>
            </span>
          </span>
        ) : null}

        <span className='Countdown-col'>
          <span className='Countdown-col-element'>
            <strong className='bold'>
              {this.addLeadingZeros(countDown.days)}
            </strong>
            <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
          </span>
        </span>

        <span className='Countdown-col'>
          <span className='Countdown-col-element'>
            <strong className='bold'>
              {this.addLeadingZeros(countDown.hours)}
            </strong>
            <span>Hours</span>
          </span>
        </span>

        <span className='Countdown-col'>
          <span className='Countdown-col-element'>
            <strong className='bold'>
              {this.addLeadingZeros(countDown.min)}
            </strong>
            <span>Min</span>
          </span>
        </span>

        {/* <span className='Countdown-col'>
          <span className='Countdown-col-element'>
            <strong className='bold'>
              {this.addLeadingZeros(countDown.sec)}
            </strong>
            <span>Sec</span>
          </span>
        </span> */}
      </div>
    )
  }
}

CountDown.propTypes = {
  date: PropTypes.string.isRequired,
}

CountDown.defaultProps = {
  date: new Date(),
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  guests: state.guests,
})

export default connect(
  mapStateToProps,
  {}
)(CountDown)
