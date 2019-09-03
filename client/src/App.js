// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Results from './Components/Results'
import HomePage from './Components/HomePage'
import PharmacyHome from './Components/PharmacyHome'
import AddMedicine from './Components/AddMedicine'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/pharmacy" component={PharmacyHome} />
      <Route exact path="/pharmacy/addmed" component={AddMedicine} />
    </React.Fragment>
  </Router>
)

export default App
