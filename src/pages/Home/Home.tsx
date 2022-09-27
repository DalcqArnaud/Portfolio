import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Photo from '../../Components/Photo/Photo'
import { PhotoContainer } from '../../Components/Photo/PhotoStyles'
import { HomeContentContainer } from './HomeStyles'

const Home = () => {
  return (
    <HomeContentContainer>
      <Navbar/>
      Home
      <PhotoContainer>
        <Photo/>
      </PhotoContainer>
    </HomeContentContainer>
  )
}

export default Home