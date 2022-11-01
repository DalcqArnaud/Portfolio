import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarContentContainer, NavbarLine, NavbarWrapper } from './NavbarStyles';
import { Divide, Divide as Hamburger } from 'hamburger-react'

interface navBarProps{
  changeCurrentPage?:((currentPageIndex:number) => void | undefined)
  getCurrentPage?:number
  changeSideBarState?:((sideBarState:boolean) => void | undefined)
  getSideBarState?:boolean
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

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const hamburgerMenuClick = () => {
    props.changeSideBarState?.(!props.getSideBarState);
  }

  return (
    <NavbarWrapper>
      <h2 onClick={handleClick}>D<span className='secondaryColor'>a</span>lcq</h2>
        {windowSize.innerWidth < 1000 ? 
          <NavbarContentContainer>
            <Divide toggled={props.getSideBarState} onToggle={hamburgerMenuClick}/>
          </NavbarContentContainer> :
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
        }
      <NavbarLine/>
    </NavbarWrapper>
  )
}

export default Navbar