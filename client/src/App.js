import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Results from "./Components/Results"

import "./App.css"

import HomePage from "./Components/HomePage"

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/results" component={Results} />
    </React.Fragment>
  </Router>
)

export default App
