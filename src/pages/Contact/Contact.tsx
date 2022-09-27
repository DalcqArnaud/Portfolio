import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Photo from '../../Components/Photo/Photo'
import { PhotoContainer } from '../../Components/Photo/PhotoStyles'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      Contact
      <PhotoContainer>
        <Photo/>
      </PhotoContainer>
    </div>
  )
}

export default Contact