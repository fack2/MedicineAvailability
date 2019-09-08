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
      <div className="pharmacyInfo" onClick={this.moveToDetailsPage}>
        <h3 className="NamePharm">{pharmacyname}</h3>
        <h3 className="price">{price}</h3>
      </div>
    )
  }
}

export default CustomerPharmacyInfo
