import React from 'react'
import './style.css'

const UserSearchResults = ({
  img,
  description,
  medicinename,
  prescription
}) => (
  <div className="medicineInformationD">
    <img src={img} alt="medicinImage" className="medicineImageD" />
    <h3 className="nameMedD">{medicinename}</h3>
    <p className="descriptionD">{description}</p>
  </div>
)

export default UserSearchResults
