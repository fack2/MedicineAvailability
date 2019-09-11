import React, { Component } from 'react'
import NavBar from '../NavBar'
import './style.css'

const PharmacyInfo = props => {
  const data = sessionStorage.getItem('pharmacyInfo')
  const info = JSON.parse(data)

  return (
    <div>
      <NavBar login={false} username="Home" {...props} />
      <p className="pharmName">Pharmacy name : {info.pharmacyname}</p>
      <div>
        <p className="locationName">Pharmacy location : </p>
        <p className="location">{info.location}</p>
      </div>
      <div>
        <p className="phoneNo">Pharmacy phone : </p>
        <p className="phone"> {info.phone}</p>
      </div>
    </div>
  )
}
export default PharmacyInfo
