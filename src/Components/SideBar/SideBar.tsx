import React, { FC } from 'react'
import { SideBarContainer, SideBarContent } from './SideBarStyles'

interface SideBarProps{
    changeCurrentPage?:((currentPageIndex:number) => void | undefined)
    getCurrentPage?:number
}

const SideBar:FC<SideBarProps> = (props) => {

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
    <SideBarContainer>
        <SideBarContent>
            <div className={`SidebarItem ${props.getCurrentPage === 0 ? 'active' : null}`} onClick={homeClick}>
                Home
            </div>
            <div className={`SidebarItem ${props.getCurrentPage === 1 ? 'active' : null}`} onClick={aboutClick}>
                About
            </div>
            <div className={`SidebarItem ${props.getCurrentPage === 2 ? 'active' : null}`} onClick={portfolioClick}>
                Portfolio
            </div>
        </SideBarContent>
    </SideBarContainer>
  )
}

export default SideBar