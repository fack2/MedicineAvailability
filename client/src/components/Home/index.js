import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./search.css"
import axios from "axios"

class Search extends Component {
  state = {
    pharmaciesResult: "",
    medicineName: ""
  }

  changInput = event => {
    const { target } = event
    const { value } = target
    this.setState({ medicineName: value })
  }

  handlesearch = () => {
    const { pharmaciesResult, medicineName } = this.state
    //This should handle in backend
    axios.get(`/api/medicine/${medicineName}`).then(({ data }) => {
      this.setState({
        pharmaciesResult: data
      })
    })
    // const { history } = this.props
    // history.push("/results")
  }

  render() {
    const { pharmaciesResult, medicineName } = this.state
    if (pharmaciesResult) {
      return (
        <p>this should be a results pharmacies which get it by api calling </p>
      )
    } else {
      return (
        <div>
          <span>
            The app is an easy way to search for the medicine you need in your
            next door pharmacy.
          </span>
          <input
            className="searchBar"
            value={medicineName}
            onChange={this.changInput}
            type="text"
            name="firstname"
          />
          <button onClick={this.handlesearch}>search</button>
        </div>
      )
    }
  }
}

export default Search
