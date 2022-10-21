import React, { FC } from 'react'
import LeftCard from './LeftCard';
import LeftCard2 from './LeftCard2';
import { LeftWrapper } from './PortfolioCompStyles'

interface portfolioLeftCompProps{
  getCurrentCard?:number
}

const PortfolioLeftComp:FC<portfolioLeftCompProps> = (props) => {
  return (
    <LeftWrapper>
      {props.getCurrentCard === 0 ? <LeftCard/> : null}
      {props.getCurrentCard === 1 ? <LeftCard2/> : null}
    </LeftWrapper>
  )
}

export default PortfolioLeftComp