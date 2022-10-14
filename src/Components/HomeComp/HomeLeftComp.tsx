import React, { FC } from 'react'
import { NameContentContainer, DescriptionContentContainer, Description, MoreArrow, Name, LeftWrapper } from './HomeCompStyles'

interface homeLeftCompProps{
  changeCurrentPage?:((currentPageindex:number) => void | undefined)
}

const HomeLeftComp:FC<homeLeftCompProps> = (props) => {

  const MoreArrowHandleClick = () => {
    props.changeCurrentPage?.(1);
  }

  return (
    <LeftWrapper>
      <NameContentContainer>
        <Name>Arnaud<br></br><span className='secondaryColor'>Dalcq</span></Name>
      </NameContentContainer>
      <DescriptionContentContainer>
        <Description>Belgian front-end developer. Currently finishing my training <span className='bolded'>@Becode</span> to become web developer.</Description>
        <MoreArrow onClick={MoreArrowHandleClick}> Know more <span className='secondaryColor'>→</span></MoreArrow>
      </DescriptionContentContainer>
    </LeftWrapper>
  )
}

export default HomeLeftComp