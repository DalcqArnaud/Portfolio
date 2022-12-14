import React from 'react'
import { GiVideoConference } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import { IoGameController } from 'react-icons/io5'
import { BsFillPencilFill } from 'react-icons/bs'
import { DiamondBackground, DiamondContainer, DiamondIconContainer, LeftWrapper } from './AboutCompStyles'

const AboutLeftComp = () => {
  return (
    <LeftWrapper>

      <DiamondContainer className='diamondHobbyStreaming'>
        <DiamondIconContainer>
          <IconContext.Provider value={{ className: "iconHobbyStreaming" }}>
            <GiVideoConference/>
          </IconContext.Provider>
          <p>Streaming</p>
        </DiamondIconContainer>
        <DiamondBackground/>
      </DiamondContainer>

      <DiamondContainer className='diamondHobbyGaming'>
        <DiamondIconContainer>
          <IconContext.Provider value={{ className: "iconHobbyGaming" }}>
            <IoGameController/>
          </IconContext.Provider>
          <p>Gaming</p>
        </DiamondIconContainer>
        <DiamondBackground/>
      </DiamondContainer>

      <DiamondContainer className='diamondHobbyDrawing'>
        <DiamondIconContainer>
          <IconContext.Provider value={{ className: "iconHobbyDrawing" }}>
            <BsFillPencilFill/>
          </IconContext.Provider>
          <p id='drawing'>Drawing</p>
        </DiamondIconContainer>
        <DiamondBackground/>
      </DiamondContainer>

    </LeftWrapper>
  )
}

export default AboutLeftComp