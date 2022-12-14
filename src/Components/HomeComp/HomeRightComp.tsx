import React from 'react'
import { DiamondBackground, DiamondContainer, DiamondIconContainer, RightWrapper } from './HomeCompStyles'
import {FaReact} from 'react-icons/fa'
import {SiStyledcomponents, SiTypescript} from 'react-icons/si'
import { IconContext } from 'react-icons/lib'

const HomeRightComp = () => {
  return (
    <RightWrapper>

      <DiamondContainer className='diamondSkillReact'>
        <DiamondIconContainer>
          <IconContext.Provider value={{ className: "iconSkillReact" }}>
            <FaReact/>
          </IconContext.Provider>
          <p>React</p>
        </DiamondIconContainer>
        <DiamondBackground/>
      </DiamondContainer>

      <DiamondContainer className='diamondSkillStyled'>
        <DiamondIconContainer id='styledComponent'>
          <IconContext.Provider value={{ className: "iconSkillStyled" }}>
            <SiStyledcomponents/>
          </IconContext.Provider>
          <p id='styled'>Styled-comp.</p>
        </DiamondIconContainer>
        <DiamondBackground/>
      </DiamondContainer>

      <DiamondContainer className='diamondSkillTypescript'>
        <DiamondIconContainer>
          <IconContext.Provider value={{ className: "iconSkillTypescript" }}>
            <SiTypescript/>
          </IconContext.Provider>
          <p>Typescript</p>
        </DiamondIconContainer>
        <DiamondBackground/>
      </DiamondContainer>

    </RightWrapper>
  )
}

export default HomeRightComp