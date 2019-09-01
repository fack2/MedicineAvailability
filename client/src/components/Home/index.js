import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./home.css"

function Home() {
  return (
    <div>
      <span>
        The app is an easy way to search for the medicine you need in your next
        door pharmacy.
      </span>
      <input className="searchBar" type="text" name="firstname" />
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  )
}

export default Home
