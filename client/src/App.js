// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Results from './Components/Results'
import HomePage from './Components/HomePage'
import PharmacyHome from './Components/PharmacyHome'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/results" component={Results} />
      <Route exact path='/pharmacy' component={PharmacyHome} />
    </React.Fragment>
  </Router>
)

export default App
