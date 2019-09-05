import React, { Component } from "react"
import axios from "axios"
import "./login.css"
import Header from "../Header"

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMsg: ""
  }

  changName = event => {
    const { target } = event
    const { value, name } = target
    this.setState({ [name]: value })
  }

  componentDidMount = () => {
    const { history } = this.props

    axios.get("/check-auth").then(data => {
      const { success } = data.data

      if (success == "true") {
        console.log("im here")
        this.setState({
          login: true
        })
        history.push("/pharmacy")
      } else {
        history.push("/login")
      }
    })
  }

  goLogedin = event => {
    event.preventDefault()
    const { email, password } = this.state
    const { history } = this.props
    axios.post("/api/login", { email, password }).then(({ data }) => {
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
    const { email, password } = this.state

    return (
      <>
        <Header />
        <form onSubmit={this.goLogedin}>
          <input
            className="input1"
            value={email}
            placeholder="email"
            type="text"
            name="email"
            onChange={this.changName}
          />
          <input
            className="input2"
            value={password}
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
