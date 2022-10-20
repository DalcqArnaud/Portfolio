import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
import { Card, CardButton, CardDescriptionContainer, CardInfosContainer, CardNameContainer, CardPictureContainer, CardTechnosIconsContainer, LeftWrapper, MoreArrow, MoreArrowContainer } from './PortfolioCompStyles'

const PortfolioLeftComp = () => {

  const HandleClick = (url:string) => {
    window.open(url, '_blank');
  }

  return (
    <LeftWrapper>
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
    </LeftWrapper>
  )
}

export default PortfolioLeftComp