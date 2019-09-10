import React, { Component } from "react"
import Header from "../Header/"
import Search from "../Search/"
import axios from "axios"

class HomePage extends Component {
  state = {
    clicked: false
  }

  render() {
    return (
      <>
        <Header switch={true} />
        <Search {...this.props} />
      </>
    )
  }
}
export default HomePage
