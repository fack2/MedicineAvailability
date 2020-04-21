import React from 'react'
import './style.css'
import ReadMoreAndLess from 'react-read-more-less'

const UserSearchResults = ({ img, description, medicinename }) => (
  <div className="medicineInformationD">
    {img ? (
      <img src={img} alt="medicinImage" className="medicineImageD" />
    ) : (
      <img
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLta-gRcc82QiIp6PWmHFX-hvmRtaLW9xBWNspmgyKG5G1f5qo'
        }
        alt="medicinImage"
        className="medicineImageD"
      />
    )}
    <h3 className="nameMedD">{medicinename}</h3>
    <p className="descriptionD">
      <ReadMoreAndLess
        className="description"
        charLimit={200}
        readMoreText="Read more"
        readLessText="Read less"
      >
        {description}
      </ReadMoreAndLess>
    </p>
  </div>
)

export default UserSearchResults
