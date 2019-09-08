import React, { Component } from 'react'
import './style.css'

const Search = props => {
  const {
    medname,
    handleSearch,
    changInput,
    location,
    searchByLocation,
    pharmacy,
    searchByPharmacy
  } = props

  return (
    <div>
      <span>
				The app is an easy way to search for the medicine you need in your next
				door pharmacy.
      </span>
      <input
        className="searchBar"
        value={medname}
        onChange={changInput}
        type="text"
        name="medname"
      />
      <button onClick={handleSearch}>search</button>
      <select
        className="By-Location"
        value={location}
        name="By location"
        onChange={searchByLocation}
      >
        <option>By Location</option>
        <option value="Ras El-Jora">Ras El-Jora</option>
        <option value="Al-Manara square">Al-Manara square</option>
        <option value="Ein Sara">Ein Sara</option>
      </select>
      <select
        value={pharmacy}
        name="By pharmacy"
        onChange={searchByPharmacy}
        className="By-Pharmacy"
      >
        <option value="By Pharmacy">By Pharnmacy</option>
        <option value="Al-Eman Pharmacy">Al-Eman Pharmacy</option>
        <option value="Al-Manara square">Al-Manara square</option>
        <option value="Ein Sara">Ein Sara</option>
      </select>
    </div>
  )
}

export default Search
