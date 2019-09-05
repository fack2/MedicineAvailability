import React, { Component } from "react"
import axios from "axios"
import "./PharmacyHome.css"
import Header from "../Header"

class PharmacyHome extends Component {
  state = {
    medName: "",
    medResult: ""
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

  inputHandler = event => {
    const { value } = event.target
    this.setState({ medName: value })
  }

  submitHandler = () => {
    const { medName } = this.state
    const { history } = this.props

    history.push(`/pharmacy/medinfo/${medName}`)
  }

  render() {
    return (
      <div>
        <Header />
        <p className="searchToUpdate">Search to Update</p>
        <input
          placeholder="search/edit medicine"
          className="pharmacySearch"
          type="text"
          onChange={this.inputHandler}
          value={this.state.medName}
        ></input>
        <button
          className="searchBtn"
          type="submit"
          onClick={this.submitHandler}
        >
          Search
        </button>

        <p className="or">
          --------------------------- OR --------------------------
        </p>

        <button className="addBtn" type="submit">
          Add Medicine
        </button>
      </div>
    )
  }
}

export default PharmacyHome
