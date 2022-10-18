import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarContentContainer, NavbarWrapper } from './NavbarStyles';

interface navBarProps{
  changeCurrentPage?:((currentPageIndex:number) => void | undefined)
  getCurrentPage?:number
}

const Navbar:FC<navBarProps> = (props) => {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  const homeClick = () => {
    props.changeCurrentPage?.(0);
  }

  const aboutClick = () => {
    props.changeCurrentPage?.(1);
  }

  const portfolioClick = () => {
    props.changeCurrentPage?.(2);
  }

  return (
    <NavbarWrapper>
      <h2 onClick={handleClick}>D<span className='secondaryColor'>a</span>lcq</h2>
      <NavbarContentContainer>
        <div className={`NavbarItem ${props.getCurrentPage === 0 ? 'active' : null}`} onClick={homeClick}>
          Home
        </div>
        <div className={`NavbarItem ${props.getCurrentPage === 1 ? 'active' : null}`} onClick={aboutClick}>
          About
        </div>
        <div className={`NavbarItem ${props.getCurrentPage === 2 ? 'active' : null}`} onClick={portfolioClick}>
          Portfolio
        </div>
      </NavbarContentContainer>
    </NavbarWrapper>
  )
}

export default Navbar