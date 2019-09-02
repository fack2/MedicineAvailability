import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./Components/HomePage"
import CustomerPharmacyInfo from "./Components/CustomerPharmacyInfo"

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route path="/CustomerPharmacyInfo" component={CustomerPharmacyInfo} />
    </React.Fragment>
  </Router>
)

export default App
