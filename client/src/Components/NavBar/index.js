import React, { Component } from "react"
import { Link } from "react-router-dom"

import axios from "axios"
import "./style.css"

class NavBar extends Component {
  state = {
    loginWord: "",
    logPath: ""
  }

  componentDidMount = () => {
    const { loginWord } = this.state
    const { login } = this.props
    console.log("loging", login)
    if (login) {
      this.setState({
        loginWord: "Logout",
        logPath: "/"
      })
    } else {
      this.setState({
        loginWord: "Continue as a pharmacist",
        logPath: "/login"
      })
    }
  }

  render() {
    return (
      <div className="NavBar">
        <a className="home" href="">
          Home
        </a>

        <div onClick={this.anchorClick}>
          <Link to={this.state.logPath} className="switch1">
            {this.state.loginWord}
          </Link>
        </div>

        <div className="logoDiv">
          <a className="logo1" href="" />
        </div>
      </div>
    )
  }
}

export default NavBar
