import React, { Component } from "react"
import Header from "../Header"
import Search from "../Search"
import axios from "axios"

class HomePage extends Component {
  state = {
    pharmaciesResult: "",
    medicineName: ""
  }

  changeInput = ({ target: { value } }) => {
    this.setState({ medicineName: value })
  }

  searchHandler = () => {
    const { medicineName } = this.state
    const { history } = this.props
    axios.get(`/api/medicine/${medicineName}`).then(({ data }) => {
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
          medicineName={this.state.medicineName}
          pharmaciesResult={this.state.pharmaciesResult}
        />
      </>
    )
  }
}
export default HomePage
