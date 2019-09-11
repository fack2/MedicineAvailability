import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Header = ({ home }) => (
  <div className="header1">
    <div className="logo" />
    <Link className="switch" to={home ? '/login' : '/'}>
      {home ? 'Continue as a pharmacist' : 'Switch to normal user'}
    </Link>
  </div>
)

export default Header
