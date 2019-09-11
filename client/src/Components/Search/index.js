import React, { Component } from "react"
import "./style.css"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Search extends Component {
  state = {
    pharmaciesResult: "",
    medname: "",
    location: "",
    pharmacy: "",
    searchButtonClicked: false
  }

  changeInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value, searchButtonClicked: false })
  }

  handleSearch = () => {
    const { medname, location, pharmacy } = this.state
    const { history } = this.props
    this.setState({ searchButtonClicked: true })
    if (!medname) {
      return
    }
    axios.get(`/api/medicine/${medname}`).then(({ data }) => {
      let result = ""
      if (location && pharmacy) {
        result = data.data.filter(
          ele => ele.location == location && ele.pharmacyname == pharmacy
        )
      } else if (location) {
        result = data.data.filter(ele => ele.location === location)
      } else if (pharmacy) {
        result = data.data.filter(ele => ele.pharmacy === pharmacy)
      } else {
        result = data.data
      }

      this.setState({ pharmaciesResult: result })

      if (result.length !== 0) {
        sessionStorage.setItem("results", JSON.stringify(result))
        history.push({
          pathname: "/results"
        })
      }
    })
  }

  searchByLocation = ({ target: { value } }) => {
    this.setState({ location: value })
  }

  searchByPharmacy = ({ target: { value } }) => {
    this.setState({ pharmacy: value })
  }

  render() {
    const {
      pharmaciesResult,
      medname,
      location,
      pharmacy,
      searchButtonClicked
    } = this.state

    return (
      <div>
        <p className="span">
          The app is an easy way to search for the medicine you need in your
          next door pharmacy.
        </p>
        <input
          className="searchBar"
          value={medname}
          onChange={this.changeInput}
          type="text"
          name="medname"
        />
        <button onClick={this.handleSearch}>
          <FontAwesomeIcon icon="search" />
        </button>
        <select
          className="By-Location"
          value={location}
          name="By location"
          onChange={this.searchByLocation}
        >
          <option value="">By Location</option>
          <option value="Ras El-Jora">Ras El-Jora</option>
          <option value="Al-Manara square">Al-Manara square</option>
          <option value="Ein Sara">Ein Sara</option>
        </select>
        <select
          value={pharmacy}
          name="By pharmacy"
          onChange={this.searchByPharmacy}
          className="By-Pharmacy"
        >
          <option value="">By Pharmacy</option>
          <option value="Al-Eman Pharmacy">Al-Eman Pharmacy</option>
          <option value="Al-Jazera">Al-Jazera</option>
        </select>
        {!medname && searchButtonClicked && (
          <p className="noMedicineName">Please enter a medicine name</p>
        )}

        {!pharmaciesResult ||
          (searchButtonClicked && medname && (
            <p className="noResult">There is no result</p>
          ))}
      </div >
    )
  }
}
export default Search
