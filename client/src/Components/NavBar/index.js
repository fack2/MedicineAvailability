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
        loginWord: "Logout"
      })
    } else {
      this.setState({
        loginWord: "Continue as a pharmacist"
      })
    }
  }

  // anchorClick = e => {
  //   e.preventDefault()

  //   const { login } = this.state
  //   const { history } = this.props

  //   if (login == "Login") {
  //     console.log("hell")
  //     history.push("/login")
  //   } else {
  //     console.log("hello")
  //   }
  // }

  render() {
    return (
      <div className="NavBar">
        <a className="home" href="">
          Home
        </a>
        {/* <div onClick={this.anchorClick}>
          <a className="switch1" href="javascript:void(0)">
            {this.state.login}
          </a>
        </div> */}
        <div onClick={this.anchorClick}>
          <Link to="login" className="switch1">
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
