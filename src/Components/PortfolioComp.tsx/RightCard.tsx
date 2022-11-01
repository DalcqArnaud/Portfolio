import React, { useEffect, useState } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCss3, SiHtml5, SiStyledcomponents } from "react-icons/si";
import { CardButton, CardContainer, CardDescriptionContainer, CardInfosContainer, CardNameContainer, CardPictureContainer, CardTechnosIconsContainer, MoreArrow, MoreArrowContainer, RightCardWrapper } from "./PortfolioCompStyles";

const RightCard = () => {
  const HandleClick = (url: string) => {
    window.open(url, "_blank");
  };

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
    <RightCardWrapper>
      <CardContainer alignType={windowSize.innerWidth <= 1400 ? 'center' : 'baseline'}>
        <CardNameContainer>Hangman Game</CardNameContainer>
        <CardDescriptionContainer>
          <p>
            A recreation of the famous hangman word game. You can either play with english or french words. This project learnt me how to animate SVG with css.
          </p>
        </CardDescriptionContainer>
        <CardInfosContainer>
          <CardButton
            onClick={() => {
              HandleClick("https://dalcqarnaud.github.io/HangmanGame/");
            }}
          >
            Check it now !
          </CardButton>
          <CardTechnosIconsContainer>
            <IoLogoJavascript title='Javascript'/>
            <SiCss3 title='CSS3'/>
            <SiHtml5 title='HTML5'/>
          </CardTechnosIconsContainer>
          <MoreArrowContainer>
            <MoreArrow
              onClick={() => {
                HandleClick("https://github.com/DalcqArnaud/HangmanGame");
              }}
            >
              More infos <span className="secondaryColor">→</span>
            </MoreArrow>
          </MoreArrowContainer>
        </CardInfosContainer>
        <CardPictureContainer>
          <div className="cardPictureContainer">
            <img
              src={require("../../images/Hangman.png")}
              alt="Hangman Game project"
              className="cardPicture"
            />
          </div>
        </CardPictureContainer>
      </CardContainer>
      <CardContainer alignType={windowSize.innerWidth <= 1400 ? 'center' : 'end'}>
        <CardNameContainer>Random Quotes</CardNameContainer>
        <CardDescriptionContainer>
          <p>
            A random quotes generator web app that generate quotes from an API. This is my first project made with React.
          </p>
        </CardDescriptionContainer>
        <CardInfosContainer>
          <CardButton
            onClick={() => {
              HandleClick("https://random-quotes-tau.vercel.app/");
            }}
          >
            Check it now !
          </CardButton>
          <CardTechnosIconsContainer>
            <FaReact title="React" />
            <IoLogoJavascript title='Javascript'/>
            <SiCss3 title='CSS3'/>
          </CardTechnosIconsContainer>
          <MoreArrowContainer>
            <MoreArrow
              onClick={() => {
                HandleClick("https://github.com/DalcqArnaud/Random-quotes");
              }}
            >
              More infos <span className="secondaryColor">→</span>
            </MoreArrow>
          </MoreArrowContainer>
        </CardInfosContainer>
        <CardPictureContainer>
          <img
            src={require("../../images/RandomQuotes.png")}
            alt="Random Quotes project"
            className="cardPicture"
          />
        </CardPictureContainer>
      </CardContainer>
    </RightCardWrapper>
  );
};

export default RightCard;
