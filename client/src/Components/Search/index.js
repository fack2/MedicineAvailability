import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Search = props => {
  const { pharmaciesResult, medname, handleSearch, changInput } = props

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
    </div>
  )
}

export default Search
