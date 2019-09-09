import React, { Component } from "react"
import { Link } from "react-router-dom"

import axios from "axios"
import "./style.css"

class NavBar extends Component {
  logout = () => {
    const { history } = this.props

    axios.get("/api/logout").then(() => history.push("/"))
  }

  render() {
    const { login } = this.props
    return (
      <div className="NavBar">
        <Link to="/" className="home">
          Home
        </Link>

        {login ? (
          <div onClick={this.logout} className="switch1">
            Logout
          </div>
        ) : (
          <div className="switch1">
            <Link to="/login">Continue as a pharmacist</Link>
          </div>
        )}

        <div className="logoDiv">
          <a className="logo1" href="" />
        </div>
      </div>
    )
  }
}

export default NavBar
