import React, { FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Colors } from '../../utils'
import { NavbarContainer } from './NavbarStyles';

const Navbar:FC = () => {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <NavbarContainer>
        <h2 onClick={handleClick}>D<span className='secondaryColor'>a</span>lcq</h2>
        <div className='NavbarLinksContent'>
            <NavLink to='/Home' style={({ isActive }) => ({ color: isActive? Colors.secondary : '#ffffff' })}>
              Home</NavLink>
            <NavLink to='/About' style={({ isActive }) => ({ color: isActive? Colors.secondary : '#ffffff' })}>
              About</NavLink>
            <NavLink to='/Portfolio' style={({ isActive }) => ({ color: isActive? Colors.secondary : '#ffffff' })}>
              Portfolio</NavLink>
            <NavLink to='/Contact' style={({ isActive }) => ({ color: isActive? Colors.secondary : '#ffffff' })}>
              Contact</NavLink>
        </div>
    </NavbarContainer>
  )
}

export default Navbar