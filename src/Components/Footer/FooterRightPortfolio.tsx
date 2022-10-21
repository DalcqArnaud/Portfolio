import React, { FC, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { DiamondBackground, DiamondContainer, DiamondIconContainer, FooterWrapper, MainArrowsContainer } from './FooterStyles'

interface footerRightPortfolioProps{
  changeCurrentCard?:((currentCardIndex:number) => void | undefined)
  getCurrentCard?:number
}

const FooterRightPortfolio:FC<footerRightPortfolioProps> = (props) => {

  const downArrowHandleClick = () => {
    props.changeCurrentCard?.(0);
  }
  
  const upArrowHandleClick = () => {
    props.changeCurrentCard?.(1);
  }

  return (
    <FooterWrapper justifyType='end'>
      <MainArrowsContainer>
        <div></div>
        <DiamondContainer onClick={downArrowHandleClick} className={props.getCurrentCard === 0 ? 'cardDisabled' : 'cardActived'} >
          <DiamondIconContainer>
            <IconContext.Provider value={{ className: "iconDiamondArrowDown" }}>
              <AiOutlineArrowDown/>
            </IconContext.Provider>
          </DiamondIconContainer>
          <DiamondBackground/>
        </DiamondContainer>
        <DiamondContainer onClick={upArrowHandleClick} className={props.getCurrentCard === 1 ? 'cardDisabled' : 'cardActived'}>
          <DiamondIconContainer>
            <IconContext.Provider value={{ className: "iconDiamondArrowUp" }}>
              <AiOutlineArrowUp/>
            </IconContext.Provider>
          </DiamondIconContainer>
          <DiamondBackground/>
        </DiamondContainer>
      </MainArrowsContainer>
    </FooterWrapper>
  )
}

export default FooterRightPortfolio