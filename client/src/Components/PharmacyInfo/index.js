import React, { Component } from 'react'
import NavBar from '../NavBar'
import './style.css'

const PharmacyInfo = props => {
  const { data } = props.history.location

  return (
    <div>
      <NavBar login={false} {...props} />
      <p className="pharmName">Pharmacy name : {data.pharmacyname}</p>
      <div>
        <p className="locationName">Pharmacy location : </p> <p className="location">{data.location}</p>
      </div>
      <div>
        <p className="phoneNo">Pharmacy phone : </p> <p className="phone"> {data.phone}</p>
      </div>
    </div>
  )
}
export default PharmacyInfo
