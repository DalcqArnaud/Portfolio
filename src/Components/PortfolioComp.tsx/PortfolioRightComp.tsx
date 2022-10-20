import React, { FC } from 'react'
import { Card, CardDescriptionContainer, CardNameContainer, CardTechnosIconsContainer, RightWrapper, CardInfosContainer, CardButton, CardPictureContainer, MoreArrow, MoreArrowContainer } from './PortfolioCompStyles'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiStyledcomponents } from 'react-icons/si'

const PortfolioRightComp:FC = () => {

  const HandleClick = (url:string) => {
    window.open(url, '_blank');
  }
  
  return (
    <RightWrapper>
      <Card alignType='baseline'>
        <CardNameContainer>
          Amstramgram
        </CardNameContainer>
        <CardDescriptionContainer>
          <p>
            A social network project based on Instagram. You can Create an account and add pictures.
          </p>
        </CardDescriptionContainer>
        <CardInfosContainer>
          <CardButton onClick={() => {HandleClick('https://dalcqarnaud.github.io/Amstramgram/')}}>
            Check it now !
          </CardButton>
          <CardTechnosIconsContainer>
            <FaReact title='React'/>
            <FaNodeJs title='NodeJS'/>
            <SiStyledcomponents title='Styled-components'/>
          </CardTechnosIconsContainer>
          <MoreArrowContainer>
          <MoreArrow onClick={() => {HandleClick('https://github.com/DalcqArnaud/Amstramgram')}}>
            More infos <span className='secondaryColor'>→</span>
          </MoreArrow>  
        </MoreArrowContainer>
        </CardInfosContainer>
        <CardPictureContainer>
          <img src={require('../../images/Amstramgram.png')} alt='Amstramgram project'  className='cardPicture'/>
        </CardPictureContainer>
      </Card>
      <Card alignType='end'>
      <CardNameContainer>
          Amstramgram
        </CardNameContainer>
        <CardDescriptionContainer>
          <p>
            A social network project based on Instagram. You can Create an account and add pictures.
          </p>
        </CardDescriptionContainer>
        <CardInfosContainer>
          <CardButton onClick={() => {HandleClick('https://dalcqarnaud.github.io/Amstramgram/')}}>
            Check it now !
          </CardButton>
          <CardTechnosIconsContainer>
            <FaReact title='React'/>
            <FaNodeJs title='NodeJS'/>
            <SiStyledcomponents title='Styled-components'/>
          </CardTechnosIconsContainer>
          <MoreArrowContainer>
          <MoreArrow onClick={() => {HandleClick('https://github.com/DalcqArnaud/Amstramgram')}}>
            More infos <span className='secondaryColor'>→</span>
          </MoreArrow>  
        </MoreArrowContainer>
        </CardInfosContainer>
        <CardPictureContainer>
          <img src={require('../../images/Amstramgram.png')} alt='Amstramgram project'  className='cardPicture'/>
        </CardPictureContainer>
      </Card>
    </RightWrapper>
  )
}

export default PortfolioRightComp