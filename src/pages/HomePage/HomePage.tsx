import React, { useState, useEffect } from 'react'
import AboutLeftComp from '../../Components/AboutComp/AboutLeftComp'
import AboutRightComp from '../../Components/AboutComp/AboutRightComp'
import FooterLeft from '../../Components/Footer/FooterLeft'
import FooterRightPortfolio from '../../Components/Footer/FooterRightPortfolio'
import HomeLeftComp from '../../Components/HomeComp/HomeLeftComp'
import HomeRightComp from '../../Components/HomeComp/HomeRightComp'
import Navbar from '../../Components/Navbar/Navbar'
import PhotoAbout from '../../Components/Photo/PhotoAbout'
import PhotoHome from '../../Components/Photo/PhotoHome'
import PhotoPortfolio from '../../Components/Photo/PhotoPortfolio'
import { PhotoContainer } from '../../Components/Photo/PhotoStyles'
import PortfolioLeftComp from '../../Components/PortfolioComp.tsx/PortfolioLeftComp'
import PortfolioRightComp from '../../Components/PortfolioComp.tsx/PortfolioRightComp'
import Backdrop from '../../Components/SideBar/Backdrop'
import SideBar from '../../Components/SideBar/SideBar'
import { LeftContainer, LeftFooterContainer, MainHomeContainer, MiddleContainer, NavBarContainer, RightContainer, RightFooterContainer } from './HomePageStyles'

const HomePage = () => {

  const [currentPage, setCurrentPage] = useState<number>(0);

  const pageHandler = (currentPageIndex:number):void | undefined => {
    setCurrentPage(currentPageIndex);
    setSideBarIsOpen(false);
  }

  const [currentCard, setCurrentCard] = useState<number>(0);

  const cardHandler = (currentCardIndex:number):void | undefined => {
    setCurrentCard(currentCardIndex);
  }

  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);
  const sideBarHandler = (sideBarState:boolean):void | undefined => {
    setSideBarIsOpen(sideBarState);
  }

  return (
    <div id='containerAll'>
      <MainHomeContainer>
        <NavBarContainer>
          <Navbar changeCurrentPage={pageHandler} getCurrentPage={currentPage} changeSideBarState={sideBarHandler} getSideBarState={sideBarIsOpen}/>
          { sideBarIsOpen ? <Backdrop changeSideBarState={sideBarHandler} getSideBarState={sideBarIsOpen}/> : null}
          { sideBarIsOpen ? <SideBar changeCurrentPage={pageHandler} getCurrentPage={currentPage}/> : null }
        </NavBarContainer>
        <LeftContainer>
          {currentPage === 0 ? <HomeLeftComp changeCurrentPage={pageHandler}/> : null}
          {currentPage === 1 ? <AboutLeftComp/> : null}
          {currentPage === 2 ? <PortfolioLeftComp getCurrentCard={currentCard}/> : null}
        </LeftContainer>
        {currentPage === 0 ? 
          <RightContainer endRow={4}>
            <HomeRightComp/>
          </RightContainer> : null
        }
        {currentPage === 1 ? 
          <RightContainer endRow={4}>
            <AboutRightComp/>
          </RightContainer> : null
        }
        {currentPage === 2 ? 
          <RightContainer endRow={3}>
            <PortfolioRightComp getCurrentCard={currentCard}/>
          </RightContainer> : null
        }
        <LeftFooterContainer>
          <FooterLeft/>
        </LeftFooterContainer>
        {currentPage === 2 ? 
          <RightFooterContainer>
            <FooterRightPortfolio changeCurrentCard={cardHandler} getCurrentCard={currentCard}/>
          </RightFooterContainer> : null
        }
      </MainHomeContainer>
      <MiddleContainer>
        <PhotoContainer>
        {currentPage === 0 ? <PhotoHome/> : null}
        {currentPage === 1 ? <PhotoAbout/> : null}
        {currentPage === 2 ? <PhotoPortfolio/> : null}
        </PhotoContainer>
      </MiddleContainer>
    </div>
  )
}

export default HomePage