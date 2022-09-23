import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Photo from '../../Components/Photo/Photo'
import { PhotoContainer } from '../../Components/Photo/PhotoStyles'

const Portfolio = () => {
  return (
    <div>
      <Navbar/>
      Portfolio
      <PhotoContainer>
        <Photo/>
      </PhotoContainer>
    </div>
  )
}

export default Portfolio