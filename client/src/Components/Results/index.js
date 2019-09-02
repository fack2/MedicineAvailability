import React, { Component } from "react"
import CustomerPharmacyInfo from "../CustomerPharmacyInfo"
import UserSearchResults from "../UserSearchResults"
import NavBar from "../NavBar"
class HomePage extends Component {
  render() {
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
