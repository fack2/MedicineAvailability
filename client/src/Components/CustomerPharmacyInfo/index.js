import React, { Component } from "react"
import PharmacyInfo from "../PharmacyInfo"
import "./style.css"

class CustomerPharmacyInfo extends Component {
  moveToDetailsPage = () => {
    const { item, history } = this.props
    sessionStorage.setItem("pharmacyInfo", JSON.stringify(item))
    history.push({
      pathname: `/customer/pharmacy/${item.pharmacyname}`
    })
  }
  render() {
    const { pharmacyname, price } = this.props
    return (
      <div className="resultDpage">
        <div className="pharmacyInfoD" onClick={this.moveToDetailsPage}>
          <h3 className="NamePharmD">{pharmacyname}</h3>
          <h3 className="priceD">{price} ILS</h3>
        </div>
      </div>
    )
  }
}

export default CustomerPharmacyInfo
