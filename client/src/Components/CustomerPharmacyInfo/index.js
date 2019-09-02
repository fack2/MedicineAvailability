import React, { Component } from "react"
import "./style.css"

class CustomerPharmacyInfo extends Component {
  render() {
    return (
      <div className="pharmacyInfo">
        <h3 className="pharmacyName">Pharmacy Name</h3>
        <h3 className="price">11 ILS</h3>
      </div>
    )
  }
}
export default CustomerPharmacyInfo
