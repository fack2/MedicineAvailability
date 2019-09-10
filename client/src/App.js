import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Results from './Components/Results'
import Login from './Components/Login'
import PharmacyHome from './Components/PharmacyHome'
import UpdatePage from './Components/UpdatePage'
import PharmacyInfo from './Components/PharmacyInfo'
import AddMedicine from './Components/AddMedicine'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faKey } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faKey)

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/pharmacy/addmed" component={AddMedicine} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/pharmacy" component={PharmacyHome} />
      <Route exact path="/pharmacy/medinfo/:medname" component={UpdatePage} />
      <Route
        exact
        path="/customer/pharmacy/:pharmacyname"
        component={PharmacyInfo}
      />
    </React.Fragment>
  </Router>
)

export default App
