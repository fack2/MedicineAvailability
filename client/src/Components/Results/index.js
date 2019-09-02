import React, { Component } from "react"
import CustomerPharmacyInfo from "../CustomerPharmacyInfo"
import UserSearchResults from "../UserSearchResults"
import NavBar from "../NavBar"
class HomePage extends Component {
  render() {
    const { data } = this.props.history.location
    const info = data.data
    console.log(info)

    return (
      <>
        <NavBar />
        {info.map(item => {
          return (
            <CustomerPharmacyInfo
              pharmacyname={item.pharmacyname}
              price={item.price}
            />
          )
        })}
        <UserSearchResults />
      </>
    )
  }
}
export default HomePage
