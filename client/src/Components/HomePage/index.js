import React, { Component } from "react"
import Header from "../Header"
import Search from "../Search"
import axios from "axios"

class HomePage extends Component {
  state = {
    pharmaciesResult: "",
    medicineName: ""
  }

  changeInput = event => {
    const { target } = event
    const { value } = target
    this.setState({ medicineName: value })
  }

  searchHandler = () => {
    const { pharmaciesResult, medicineName } = this.state
    const { history } = this.props

    // This should handle in backend
    axios.get(`/api/medicine/${medicineName}`).then(({ data }) => {
      this.setState({
        pharmaciesResult: data
      })
      history.push({ pathname: "/results", data: pharmaciesResult })
    })
  }
  render() {
    return (
      <>
        <Header />
        <Search
          handleSearch={this.searchHandler}
          changInput={this.changeInput}
          medicineName={this.state.medicineName}
          pharmaciesResult={this.state.pharmaciesResult}
        />
      </>
    )
  }
}
export default HomePage
