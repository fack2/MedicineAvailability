import React, { Component } from "react"
import "./PharmacyHome.css"
import Header from "../Header"
import axios from "axios"

class PharmacyHome extends Component {
  state = {
    medName: "",
    medResult: "",
    login: false
  }

  componentDidMount = () => {
    const { history } = this.props

    axios.get("/check-auth").then(({ data }) => {
      const { success } = data

      if (success) {
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

  addButtonHandler = () => {
    const { history } = this.props
    history.push("/pharmacy/addmed")
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

        <button
          onClick={this.addButtonHandler}
          className="addBtn"
          type="submit"
        >
          Add Medicine
        </button>
      </div>
    )
  }
}

export default PharmacyHome
