import React from "react"

import "./style.css"

const Home = () => {
  return (
    <div>
      <span>
        The app is an easy way to search for the medicine you need in your next
        door pharmacy.
      </span>
      <input className="searchBar" type="text" name="firstname" />
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search" />
      </button>
    </div>
  )
}

export default Home
