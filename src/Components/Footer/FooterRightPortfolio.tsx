import React from 'react'
import { BsFillDiamondFill } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { FooterWrapper, MainArrowsContainer } from './FooterStyles'

const FooterRightPortfolio = () => {
  return (
    <FooterWrapper justifyType='end'>
      <MainArrowsContainer>
        <div>
          <IconContext.Provider value={{ className: "iconDiamondArrowDown" }}>
            <BsFillDiamondFill/>
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ className: "iconDiamondArrowUp" }}>
            <BsFillDiamondFill/>
          </IconContext.Provider>
        </div>
      </MainArrowsContainer>
    </FooterWrapper>
  )
}

export default FooterRightPortfolio