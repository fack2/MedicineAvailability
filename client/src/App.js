import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home/index"
import Result from "./components/Results/index"

import "./App.css"

import HomePage from "./Components/HomePage"

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
    </React.Fragment>
  </Router>
)

export default App
