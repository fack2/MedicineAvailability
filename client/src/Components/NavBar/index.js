import React, { Component } from "react"
import { Link } from "react-router-dom"

import axios from "axios"
import "./style.css"

class NavBar extends Component {
  state = {
    loginWord: ""
  }

  componentDidMount = () => {
    const { loginWord } = this.state
    const { login } = this.props
    if (login) {
      this.setState({
        loginWord: "Logout"
      })
    } else {
      this.setState({
        loginWord: "Continue as a pharmacist"
      })
    }
  }

  checklogin = () => {
    const { history } = this.props
    const { loginWord } = this.state

    if (loginWord == "Logout") {
      axios.get("/api/clearcookies").then = () => {}
      history.push("/")
    } else {
      history.push("/login")
    }
  }

  render() {
    return (
      <div className="NavBar">
        <a className="home" href="">
          Home
        </a>

        <div onClick={this.anchorClick}>
          <div onClick={this.checklogin} className="switch1">
            {this.state.loginWord}
          </div>
        </div>

        <div className="logoDiv">
          <a className="logo1" href="" />
        </div>
      </div>
    )
  }
}

export default NavBar
