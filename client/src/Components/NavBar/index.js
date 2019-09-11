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
    const { login, username } = this.props

    return (
      <div className="NavBar">
        <Link to={username === "Home" ? "/" : "/pharmacy"} className="home">
          {username}
        </Link>

        {login ? (
          <div onClick={this.logout} className="switch1">
            Logout
          </div>
        ) : (
          <Link to="/login" className="switch1">
            Continue as a pharmacist
          </Link>
        )}

        <Link to="/" className="logoDiv logo1"></Link>
      </div>
    )
  }
}

export default NavBar
