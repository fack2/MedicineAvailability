import React, { Component } from "react"
import "./style.css"

const CustomerPharmacyInfo = ({ pharmacyName, price }) => (
  <div className="pharmacyInfo">
    <h3 className="pharmacyName">{pharmacyName}</h3>
    <h3 className="price">{price}ILS</h3>
  </div>
)

export default CustomerPharmacyInfo
