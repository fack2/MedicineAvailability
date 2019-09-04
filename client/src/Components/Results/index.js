import React, { Component } from "react"
import CustomerPharmacyInfo from "../CustomerPharmacyInfo"
import UserSearchResults from "../UserSearchResults"
import NavBar from "../NavBar"

class Results extends Component {
  moveToDetailsPage = item => {
    console.log("jhjhjhhj", item)
  }

  render() {
    const { data } = this.props.history.location
    const info = data.data
    console.log("asas")

    return (
      <>
        <NavBar />
        {info.map((item, i) => {
          return (
            <CustomerPharmacyInfo
              item={item}
              pharmacyname={item.pharmacyname}
              price={item.price}
              getDetails={this.moveToDetailsPage}
              key={i}
            />
          )
        })}
        <UserSearchResults
          img={info[0].img}
          description={info[0].description}
          medicinename={info[0].medicinename}
        />
      </>
    )
  }
}
export default Results
