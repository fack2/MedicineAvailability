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
      <div>
        <p className="workHours">Work Hours : </p>
        <p className="hours"> {info.workhours}</p>
      </div>
      <div>
        <p className="offDays">Off Days : </p>
        <p className="days"> {info.offdays}</p>
      </div>
    </div>
  )
}
export default PharmacyInfo
