import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Photo from '../../Components/Photo/Photo'
import { PhotoContainer } from '../../Components/Photo/PhotoStyles'
import { ContentContainer, Description, MainHomeContainer, MoreArrow, Name } from './HomeStyles'

const Home = () => {

  let navigate = useNavigate();

  const MoreArrowHandleClick = () => {
    navigate('/About');
  }

  return (
    <MainHomeContainer>
      <Navbar/>
      <ContentContainer startingCol={1} endingCol={2} startingRow={2} endingRow={3} contentPos={'center'}>
          <Name>Arnaud<br></br><span className='secondaryColor'>Dalcq</span></Name>
      </ContentContainer>
      <ContentContainer startingCol={1} endingCol={2} startingRow={3} endingRow={4}>
        <Description>Belgian front-end developer. Currently finishing my training <span className='bolded'>@Becode</span> to become web developer.</Description>
        <MoreArrow onClick={MoreArrowHandleClick}> Know more <span className='secondaryColor'>→</span></MoreArrow>
      </ContentContainer>
      <ContentContainer startingCol={1} endingCol={2} startingRow={4} endingRow={5}>
        socials
      </ContentContainer>
      <PhotoContainer>
        <Photo/>
      </PhotoContainer>
      <ContentContainer startingCol={3} endingCol={4} startingRow={2} endingRow={4}>
        cards
      </ContentContainer>
      <ContentContainer startingCol={3} endingCol={4} startingRow={4} endingRow={5}>
        arrows
      </ContentContainer>
    </MainHomeContainer>
  )
}

export default Home