import React, { useState, useEffect } from 'react'
import AboutLeftComp from '../../Components/AboutComp/AboutLeftComp'
import AboutRightComp from '../../Components/AboutComp/AboutRightComp'
import FooterLeft from '../../Components/Footer/FooterLeft'
import FooterRightAbout from '../../Components/Footer/FooterRightAbout'
import FooterRightHome from '../../Components/Footer/FooterRightHome'
import FooterRightPortfolio from '../../Components/Footer/FooterRightPortfolio'
import HomeLeftComp from '../../Components/HomeComp/HomeLeftComp'
import HomeRightComp from '../../Components/HomeComp/HomeRightComp'
import Navbar from '../../Components/Navbar/Navbar'
import Photo from '../../Components/Photo/Photo'
import { PhotoContainer } from '../../Components/Photo/PhotoStyles'
import PortfolioLeftComp from '../../Components/PortfolioComp.tsx/PortfolioLeftComp'
import PortfolioRightComp from '../../Components/PortfolioComp.tsx/PortfolioRightComp'
import { LeftContainer, LeftFooterContainer, MainHomeContainer, MiddleContainer, NavBarContainer, RightContainer, RightFooterContainer } from './HomePageStyles'

const HomePage = () => {

  const [currentPage, setCurrentPage] = useState<number>(0);

  const pageHandler = (currentPageIndex:number):void | undefined => {
    setCurrentPage(currentPageIndex);
  }

  return (
    <MainHomeContainer>
      <NavBarContainer>
        <Navbar changeCurrentPage={pageHandler} getCurrentPage={currentPage}/>
      </NavBarContainer>
      <LeftContainer>
        {currentPage === 0 ? <HomeLeftComp changeCurrentPage={pageHandler}/> : null}
        {currentPage === 1 ? <AboutLeftComp/> : null}
        {currentPage === 2 ? <PortfolioLeftComp/> : null}
      </LeftContainer>
      <MiddleContainer>
        <PhotoContainer>
          <Photo/>
        </PhotoContainer>
      </MiddleContainer>
      <RightContainer>
        {currentPage === 0 ? <HomeRightComp/> : null}
        {currentPage === 1 ? <AboutRightComp/> : null}
        {currentPage === 2 ? <PortfolioRightComp/> : null}
      </RightContainer>
      <LeftFooterContainer>
        <FooterLeft/>
      </LeftFooterContainer>
      <RightFooterContainer>
        {currentPage === 0 ? <FooterRightHome/> : null}
        {currentPage === 1 ? <FooterRightAbout/> : null}
        {currentPage === 2 ? <FooterRightPortfolio/> : null}
      </RightFooterContainer>
    </MainHomeContainer>
  )
}

export default HomePage