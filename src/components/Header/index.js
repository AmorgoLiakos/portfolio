import React from 'react'
import { NavLink, Link } from "react-router-dom"
import "./header.css"

const header = () => {

  return (
    <header>
      <div className="logo-container">
        <Link className='logo-link' to="/">Ilias Prekas</Link>
      </div>
      <div className="menu-container">
        <ul className="menu">
          <NavLink className="menu-item" to="/" >Home</NavLink>
          <NavLink className="menu-item" to="/work" >Work</NavLink>
          <NavLink className="menu-item" to="/about" >About</NavLink>
          <NavLink className="menu-item" to="/contact" >Contact</NavLink>                 
        </ul>
      </div>
    </header>
  )
}

export default header