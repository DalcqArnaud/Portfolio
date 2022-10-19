import React from 'react'
import { Description, DiamondSeparator, Infos, InfosContainer, InfosTitle, RightWrapper } from './AboutCompStyles'
import { FaBirthdayCake } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { HiMail } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'

const AboutRightComp = () => {
  return (
    <RightWrapper>
      <Description>
        <span className='bolded'>Web developer junior</span> with 
        an eye for <span className='bolded'>attractive designs</span>, 
        I'm looking for a job as <span className='bolded'>front-end developer</span> to
        start working in the industry. <br/> I like to build up <span className='bolded'>websites</span>/<span className='bolded'>apps</span> projects 
        and to <span className='bolded'>solve problems</span> and <span className='bolded'>challenges</span>.
        <br/>
        <br/> 
        Passionate about <span className='bolded'>video games</span>, 
        I like to share on <a href='https://www.twitch.tv/latempetegrise' target='_blank' rel='noreferrer'>Twitch</a> my 
        gameplay and experiences.
        <br/>
      </Description>
      <DiamondSeparator>&#11201; &#11201; &#11201; &#11201; &#11201; &#11201;</DiamondSeparator>
      <InfosContainer>
        <InfosTitle>My infos</InfosTitle>
        <IconContext.Provider value={{ className: "infosIcons" }}>
          <Infos>  
            <li>
              <FaBirthdayCake/>
              8th March
            </li>
            <li>
              <ImLocation2/>
              Ottignies, Belgium
            </li>
            <li>
              <HiMail/>
              arnaud.dalcq.contact@gmail.com
            </li>
          </Infos>
        </IconContext.Provider>
      </InfosContainer>
    </RightWrapper>
  )
}

export default AboutRightComp