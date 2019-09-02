import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home/index"
import Result from "./components/Results/index"

import "./App.css"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </React.Fragment>
    )
  }
}
export default App
