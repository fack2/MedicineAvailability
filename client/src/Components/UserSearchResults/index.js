import React from 'react'
import './style.css'

const UserSearchResults = ({
  img,
  description,
  medicinename,
  prescription
}) => (
  <div className="medicineInformation">
    <img src={img} alt="medicinImage" className="medicineImage" />
    <h3 className="nameMed">{medicinename}</h3>
    <p className="description">{description}</p>
    {prescription === true ? (
      <p className="pre">prescription: YES</p>
    ) : (
      <p className="pre">prescription: NO </p>
    )}
  </div>
)

export default UserSearchResults
