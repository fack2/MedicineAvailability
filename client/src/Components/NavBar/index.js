import React, { Component } from "react"
import axios from "axios"
import "./style.css"

class NavBar extends Component {
  state = {
    login: "Login"
  }

  componentDidMount = () => {
    axios.get("/check-auth").then(({ data }) => {
      const { success } = data
      if (success) {
        this.setState({
          login: "Logout"
        })
      }
    })
  }

  render() {
    return (
      <div className="NavBar">
        <a className="home" href="">
          Home
        </a>
        <div>
          <a className="switch1" href="javascript:void(0)">
            {this.state.login}
          </a>
        </div>

        <div className="logoDiv">
          <a className="logo1" href="" />
        </div>
      </div>
    )
  }
}

export default NavBar
