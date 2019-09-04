import React, { Component } from 'react'
import PharmacyInfo from '../PharmacyInfo'
import './style.css'

// class CustomerPharmacyInfo extends Component {
//   render() {
//     ;<PharmacyInfo />
//   }
// }

const CustomerPharmacyInfo = ({ pharmacyname, price, getDetails, item }) => (
  <div className="pharmacyInfo" onClick={() => getDetails(item)}>
    <h3 className="pharmacyName">{pharmacyname}</h3>
    <h3 className="price">{price}</h3>
  </div>
)

export default CustomerPharmacyInfo
