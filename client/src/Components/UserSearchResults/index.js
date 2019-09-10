import React from "react"
import "./style.css"

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
      <p>prescription: Needs prescription</p>
    ) : (
      <p>prescription: Doesn't need prescription</p>
    )}
  </div>
)

export default UserSearchResults
