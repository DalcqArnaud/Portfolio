import React, { FC } from 'react'
import { FooterLeftContent, FooterWrapper } from './FooterStyles'
import { FaArtstation, FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'

const FooterLeft = () => {
  return (
    <FooterWrapper justifyType={'baseline'}>
      <FooterLeftContent>
        <a href='https://www.linkedin.com/in/arnaud-dalcq/' target='_blank' rel='noopener noreferrer'>
          <div className='socialMediaLinkedin'>
          <IconContext.Provider value={{ className: "iconSocialLinkedin" }}>
            <FaLinkedinIn/>
          </IconContext.Provider>
          Linkedin
          </div>
        </a>

        <a href='https://github.com/DalcqArnaud' target='_blank' rel='noopener noreferrer'>
          <div className='socialMediaGithub'>
            <IconContext.Provider value={{ className: "iconSocialGithub" }}>
              <BsGithub/>
            </IconContext.Provider>
            Github
          </div>
        </a>

        <a href='https://www.artstation.com/techarnaud' target='_blank' rel='noopener noreferrer'>
          <div className='socialMediaArtstation'>
            <IconContext.Provider value={{ className: "iconSocialArtstation" }}>
              <FaArtstation/>
            </IconContext.Provider>
            Artstation
          </div>
        </a>
      </FooterLeftContent>
    </FooterWrapper>
  )
}

export default FooterLeft