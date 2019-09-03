import React, { Component } from "react"
import axios from "axios"
import "./login.css"
import Results from "../Results"
import Header from "../Header"
import Pharmacy from "../PharmacyHome"

class Login extends Component {
  state = {
    username: "",
    password: "",
    errorMsg: ""
  }

  changName = event => {
    const { target } = event
    const { value, name } = target
    this.setState({ [name]: value })
  }

  goLogedin = event => {
    event.preventDefault()
    const { username, password } = this.state
    const { history } = this.props
    axios.post("/api/login", { username, password }).then(({ data }) => {
      if (data.msg == "true") {
        history.push("/pharmacy")
        //should continue to pharmacist home
      } else {
        const { errorMsg } = this.state
        this.setState({ errorMsg: "true" })
      }
    })
  }

  render() {
    return (
      <>
        <Header />
        <form onSubmit={this.goLogedin}>
          <input
            className="input1"
            value={this.state.username}
            placeholder="username"
            type="text"
            name="username"
            onChange={this.changName}
          />
          <input
            className="input2"
            value={this.state.password}
            placeholder="password"
            type="text"
            name="password"
            onChange={this.changName}
          />
          <input type="submit" className="login" value="Login" />
          {this.state.errorMsg && <p>User or password WRONG</p>}
        </form>
      </>
    )
  }
}

export default Login
