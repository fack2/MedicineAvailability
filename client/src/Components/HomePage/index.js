import React, { Component } from "react"
import Header from "../Header"
import Search from "../Search"
import axios from "axios"
import PharmacyHome from "../PharmacyHome"

class HomePage extends Component {
  state = {
    pharmaciesResult: "",
    medname: ""
  }

  changeInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  searchHandler = () => {
    const { pharmaciesResult, medname } = this.state
    const { history } = this.props

    // This should handle in backend
    axios.get(`/api/medicine/${medname}`).then(({ data }) => {
      this.setState({
        pharmaciesResult: data
      })
      history.push({ pathname: "/results", data })
    })
  }

  render() {
    return (
      <>
        <Header />
        <Search
          handleSearch={this.searchHandler}
          changInput={this.changeInput}
          medname={this.state.medname}
          pharmaciesResult={this.state.pharmaciesResult}
        />
      </>
    )
  }
}
export default HomePage
