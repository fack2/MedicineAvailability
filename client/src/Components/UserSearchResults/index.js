import React from 'react'
import './style.css'

const UserSearchResults = ({ img, description, medicinename }) => (
  <div className="medicineInformation">
    <img src={img} alt="medicinImage" className="medicineImage" />
    <h3 className="nameMed">{medicinename}</h3>
    <p className="description">{description}</p>
  </div>
)

export default UserSearchResults
