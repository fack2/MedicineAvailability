import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Results from './Components/Results'
import Login from './Components/Login'
import PharmacyHome from './Components/PharmacyHome'
import UpdatePage from './Components/UpdatePage'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/pharmacy" component={PharmacyHome} />
      <Route path="/login" component={Login} />
      <Route exact path="/medinfo" component={UpdatePage} />
    </React.Fragment>
  </Router>
)

export default App
