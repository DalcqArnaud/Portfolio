import React from 'react'
import { GiVideoConference } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import { DiamondBackground, DiamondContainer, DiamondIconContainer, FooterWrapper, MainArrowsContainer } from './FooterStyles'

const FooterRightPortfolio = () => {
  return (
    <FooterWrapper justifyType='end'>
      <MainArrowsContainer>
        <div></div>
        <DiamondContainer>
          <DiamondIconContainer>
            <IconContext.Provider value={{ className: "iconDiamondArrowDown" }}>
              <GiVideoConference/>
            </IconContext.Provider>
          </DiamondIconContainer>
          <DiamondBackground/>
        </DiamondContainer>
        <DiamondContainer>
          <DiamondIconContainer>
            <IconContext.Provider value={{ className: "iconDiamondArrowUp" }}>
              <GiVideoConference/>
            </IconContext.Provider>
          </DiamondIconContainer>
          <DiamondBackground/>
        </DiamondContainer>
      </MainArrowsContainer>
    </FooterWrapper>
  )
}

export default FooterRightPortfolio