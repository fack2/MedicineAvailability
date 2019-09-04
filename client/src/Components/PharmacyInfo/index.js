import React, { Component } from 'react'
import NavBar from '../NavBar'
import './style.css'

const PharmacyInfo = info => {
  const { location } = info
  const { data } = location
  return (
    <div>
      <NavBar />
      <p className="pharmName">Pharmacy name : {data.pharmacyname}</p>
      <div className="pharmInfo">
        <p>Pharmacy location : {data.location}</p>
        <p>Pharmacy phone : {data.phone}</p>
        <p>{data.prescription}</p>
      </div>
    </div>
  )
}
export default PharmacyInfo
