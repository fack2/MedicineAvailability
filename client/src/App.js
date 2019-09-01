import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from "./Components/Header/Header.js"
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Header} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
