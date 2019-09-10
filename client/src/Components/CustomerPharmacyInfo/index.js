import React, { Component } from "react"
import PharmacyInfo from "../PharmacyInfo"
import "./style.css"

class CustomerPharmacyInfo extends Component {
  moveToDetailsPage = () => {
    const { item, history } = this.props
    history.push({
      pathname: `/customer/pharmacy/${item.pharmacyname}`,
      data: item
    })
  }
  render() {
    const { pharmacyname, price } = this.props
    return (
      <div className="resultpharmacyInfo" onClick={this.moveToDetailsPage}>
        <h3 className="resultNamePharm">{pharmacyname}</h3>
        <h3 className="resultprice">{price}</h3>
      </div>
    )
  }
}

export default CustomerPharmacyInfo
