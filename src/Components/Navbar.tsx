import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h2>Arnaud Dalcq</h2>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Portfolio'>Portfolio</Link>
        <Link to='/Contact'>Contact</Link>
    </div>
  )
}

export default Navbar