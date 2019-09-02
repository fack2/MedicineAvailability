import React, { Component } from "react"
import CustomerPharmacyInfo from "../CustomerPharmacyInfo"
import UserSearchResults from "../UserSearchResults"
import NavBar from "../NavBar"
class HomePage extends Component {
  render() {
    // data will recieve by: this.props.history.location.data
    return (
      <>
        <NavBar />
        <CustomerPharmacyInfo />
        <UserSearchResults />
      </>
    )
  }
}
export default HomePage
