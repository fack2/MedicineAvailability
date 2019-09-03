import React, { Component } from "react"
import "./login.css"

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  changName(event) {
    const { target } = event
    const { value, name } = target
    this.setState({ [name]: value })
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
        <button>Login</button>
      </form>
    )
  }
}

export default Login
