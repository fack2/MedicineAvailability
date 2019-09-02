import React, { Component } from "react"
import CustomerPharmacyInfo from "../CustomerPharmacyInfo"
import UserSearchResults from "../UserSearchResults"
import NavBar from "../NavBar"
class HomePage extends Component {
  render() {
    const { data } = this.props.history.location
    console.log("data", data)

    return (
      <>
        <NavBar />
        <UserSearchResults />
        <CustomerPharmacyInfo pharmacyName={"jjj"} price={"hhhhh"} />
      </>
    )
  }
}
export default HomePage
