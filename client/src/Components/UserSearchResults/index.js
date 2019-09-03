import React from 'react'
import './style.css'

const UserSearchResults = ({ img, description, medicinename }) => (
  <div className="medicineInformation">
    <img src={img} alt="medicinImage" className="medicineImage" />
    <div className="medicine">
      <h3 className="medicineName">{medicinename}</h3>
      <p className="description">{description}</p>
    </div>
  </div>
)

export default UserSearchResults
