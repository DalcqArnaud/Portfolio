import React, { FC } from 'react'
import { RightWrapper } from './PortfolioCompStyles'
import RightCard from './RightCard'
import RightCard2 from './RightCard2'

interface portfolioRightCompProps{
  getCurrentCard?:number
}

const PortfolioRightComp:FC<portfolioRightCompProps> = (props) => {
  return (
    <RightWrapper>
      { props.getCurrentCard === 0 ? <RightCard/> : null }
      { props.getCurrentCard === 1 ? <RightCard2/> : null }
    </RightWrapper>
  )
}

export default PortfolioRightComp