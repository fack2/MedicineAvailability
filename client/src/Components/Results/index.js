import React, { Component } from "react"

class Results extends Component {
  render() {
    console.log("hellooooooo", this.props.history.location.data)

    return <h1>hello</h1>
  }
}
export default Results
