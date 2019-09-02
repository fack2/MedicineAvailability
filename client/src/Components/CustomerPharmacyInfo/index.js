import React, { Component } from "react"
import "./style.css"

const CustomerPharmacyInfo = ({ pharmacyname, price }) => (
  <div className="pharmacyInfo">
    <h3 className="pharmacyName">{pharmacyname}</h3>
    <h3 className="price">{price}</h3>
  </div>
)

export default CustomerPharmacyInfo
