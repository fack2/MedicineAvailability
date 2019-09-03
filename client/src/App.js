import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Results from './Components/Results'
import Login from './Components/Login'

import './App.css'

import HomePage from './Components/HomePage'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>
)

export default App
