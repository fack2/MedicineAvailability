import React, { Component } from 'react'
import NavBar from '../NavBar'
import './style.css'

const PharmacyInfo = props => {
  const { data } = props.history.location

  return (
    <div>
      <NavBar login={false} {...props} />
      <p className="pharmName">Pharmacy name : {data.pharmacyname}</p>
      <p className="location">Pharmacy location : {data.location}</p>
      <p className="phone">Pharmacy phone : {data.phone}</p>
      <p className="prescription">prescription : {data.prescription}</p>
    </div>
  )
}
export default PharmacyInfo
