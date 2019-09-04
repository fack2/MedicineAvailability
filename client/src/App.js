import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Results from './Components/Results'
import Login from './Components/Login'
import PharmacyHome from './Components/PharmacyHome'
import PharmacyInfo from './Components/PharmacyInfo'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route path="/results" component={Results} />
      <Route path="/login" component={Login} />
      <Route path="/pharmacy" component={PharmacyHome} />
      <Route path="/customer/pharmacy/:pharmacyname" component={PharmacyInfo} />
    </React.Fragment>
  </Router>
)

export default App
