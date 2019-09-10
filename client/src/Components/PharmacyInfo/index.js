import React, { Component } from 'react'
import NavBar from '../NavBar'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PharmacyInfo = props => {
  const { data } = props.history.location

  return (
    <div>
      <NavBar login={false} {...props} />
      <p className="pharmName">Pharmacy name : {data.pharmacyname}</p>
      <p className="location">Pharmacy location : {data.location}</p>
      <p className="phone">Pharmacy phone : {data.phone}</p>
    </div>
  )
}
export default PharmacyInfo
