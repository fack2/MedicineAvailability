import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./Components/HomePage"
import Results from "./Components/Results"

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route path="/results" component={Results} />
    </React.Fragment>
  </Router>
)

export default App
