import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Header = props => (
  <div className="header1">
    <div className="logo" />
    <Link className="switch" to={props.home ? '/login' : '/'}>
      {props.home ? 'Continue as a pharmacist' : 'Switch to normal user'}
    </Link>
  </div>
)

export default Header
