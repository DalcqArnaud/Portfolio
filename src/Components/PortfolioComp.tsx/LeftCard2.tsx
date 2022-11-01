import React, { useEffect, useState } from 'react'
import { FaChartBar, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiCss3, SiHtml5, SiPhp, SiStyledcomponents } from 'react-icons/si';
import { CardButton, CardContainer, CardDescriptionContainer, CardInfosContainer, CardNameContainer, CardPictureContainer, CardTechnosIconsContainer, LeftCardWrapper, MoreArrow, MoreArrowContainer } from './PortfolioCompStyles';

const LeftCard2 = () => {

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
          Data visualization
        </CardNameContainer>
        <CardDescriptionContainer>
          <p>
            A data visualization website project to learn how to use ChartJS and also to fect datas from an API.
          </p>
        </CardDescriptionContainer>
        <CardInfosContainer>
          <CardButton onClick={() => {HandleClick('https://dalcqarnaud.github.io/js-datavisualisation-challenge/')}}>
            Check it now !
          </CardButton>
          <CardTechnosIconsContainer>
            <FaChartBar title='ChartJS'/>
            <IoLogoJavascript title='Javascript'/>
            <SiCss3 title='CSS3'/>
          </CardTechnosIconsContainer>
          <MoreArrowContainer>
          <MoreArrow onClick={() => {HandleClick('https://github.com/DalcqArnaud/js-datavisualisation-challenge')}}>
            More infos <span className='secondaryColor'>→</span>
          </MoreArrow>  
        </MoreArrowContainer>
        </CardInfosContainer>
        <CardPictureContainer>
          <img src={require('../../images/DataVisualization.png')} alt='Data visualization project'  className='cardPicture'/>
        </CardPictureContainer>
      </CardContainer>
      <CardContainer alignType={windowSize.innerWidth <= 1400 ? 'center' : 'end'}>

      </CardContainer>
    </LeftCardWrapper>
  )
}

export default LeftCard2