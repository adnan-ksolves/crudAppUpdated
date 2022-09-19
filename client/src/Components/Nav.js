import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  const [nav, setNav] = useState({ backgroundColor: "teal", borderRadius: "5px", color: "white" });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary px-5">
      <NavLink className="navbar-brand text-light" to="/">School Database</NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
      </div>
    </nav>
  )
}

export default Nav
