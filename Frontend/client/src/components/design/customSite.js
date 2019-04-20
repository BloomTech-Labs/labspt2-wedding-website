import React, { Component } from 'react'

class CustomSite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>{this.props.match.params.customSite}</h1>
      </div>
    )
  }
}

export default CustomSite
