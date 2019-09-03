import React, { Component } from 'react'

class Results extends Component {
  render () {
    // data will recieve by: this.props.history.location.data

    return <h1>{this.props.history.location.data}</h1>
  }
}
export default Results
