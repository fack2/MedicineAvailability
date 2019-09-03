import React, { Component } from "react"
import axios from "axios"
import "./login.css"

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  changName = event => {
    const { target } = event
    const { value, name } = target
    this.setState({ [name]: value })
  }

  goLogedin = () => {
    const { username, password } = this.state
    console.log("login")

    axios.post("/api/login", { username, password }).then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <form>
        <input
          className="searchBars"
          value={this.state.username}
          placeholder="username"
          type="text"
          name="username"
          onChange={this.changName}
        />
        <input
          className="searchBars"
          value={this.state.password}
          placeholder="password"
          type="text"
          name="password"
          onChange={this.changName}
        />
        <button onClick={this.goLogedin}>Login</button>
      </form>
    )
  }
}

export default Login
