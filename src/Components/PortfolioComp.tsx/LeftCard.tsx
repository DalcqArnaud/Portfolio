import React, { useEffect, useState } from 'react'
import { FaBootstrap, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiHtml5, SiStyledcomponents, SiTypescript } from 'react-icons/si';
import { CardButton, CardContainer, CardDescriptionContainer, CardInfosContainer, CardNameContainer, CardPictureContainer, CardTechnosIconsContainer, LeftCardWrapper, MoreArrow, MoreArrowContainer } from './PortfolioCompStyles';

const LeftCard = () => {

  const HandleClick = (url:string) => {
    window.open(url, '_blank');
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  return (
    <LeftCardWrapper>
      <CardContainer alignType={windowSize.innerWidth <= 1400 ? 'center' : 'baseline'}>
        <CardNameContainer>
          Amstramgram
        </CardNameContainer>
        <CardDescriptionContainer>
          <p>
            A social network project based on Instagram. This project trained me to use and understand React components system and styled-components.
          </p>
        </CardDescriptionContainer>
        <CardInfosContainer>
          <CardButton onClick={() => {HandleClick('https://dalcqarnaud.github.io/Amstramgram/')}}>
            Check it now !
          </CardButton>
          <CardTechnosIconsContainer>
            <FaReact title='React'/>
            <SiTypescript title='Typescript'/>
            <SiStyledcomponents title='Styled-components'/>
          </CardTechnosIconsContainer>
          <MoreArrowContainer>
          <MoreArrow onClick={() => {HandleClick('https://github.com/DalcqArnaud/Amstramgram')}}>
            More infos <span className='secondaryColor'>→</span>
          </MoreArrow>  
        </MoreArrowContainer>
        </CardInfosContainer>
        <CardPictureContainer>
          <img src={require('../../images/Amstramgram.png')} alt='Amstramgram project' className='cardPicture'/>
        </CardPictureContainer>
      </CardContainer>
      <CardContainer alignType={windowSize.innerWidth <= 1400 ? 'center' : 'end'}>
      <CardNameContainer>
          La rose dorée
        </CardNameContainer>
        <CardDescriptionContainer>
          <p>
            "La rose dorée" is a website project of a fictive restaurant to discover and train myself using Bootstrap.
          </p>
        </CardDescriptionContainer>
        <CardInfosContainer>
          <CardButton onClick={() => {HandleClick('https://dalcqarnaud.github.io/restaurant-css-framework/')}}>
            Check it now !
          </CardButton>
          <CardTechnosIconsContainer>
            <IoLogoJavascript title='Javascript'/>
            <FaBootstrap title='Bootstrap'/>
            <SiHtml5 title='HTML5'/>
          </CardTechnosIconsContainer>
          <MoreArrowContainer>
          <MoreArrow onClick={() => {HandleClick('https://github.com/DalcqArnaud/restaurant-css-framework')}}>
            More infos <span className='secondaryColor'>→</span>
          </MoreArrow>  
        </MoreArrowContainer>
        </CardInfosContainer>
        <CardPictureContainer>
          <img src={require('../../images/Restaurant.PNG')} alt='La rose dorée project' className='cardPicture'/>
        </CardPictureContainer>
      </CardContainer>
    </LeftCardWrapper>
  )
}

export default LeftCard