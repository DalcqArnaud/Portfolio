import { createGlobalStyle, keyframes } from "styled-components";

export const Colors = {
  main : '#2d274e',
  mainDarker : 'rgba(38,33,66,0.8)',
  mainDarkest : 'rgba(29,26,51,0.8)',
  secondary : '#e40244',
  disabled: '#a6a6a6',
  transparent: 'rgba(255,255,255,0.2)'
};

export const Fonts = {
  mainText : "'Raleway', sans-serif",
  titles : "'Montserrat', sans-serif"
};

export const Animations = {
  slideToLeft : keyframes`
  0% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(0%);
  };
  `,

  slideToRight : keyframes`
    0% {
      transform: translateX(-20%);
    }
    100% {
      transform: translateX(0%);
    };
  `,

  slideToUp : keyframes`
  0% {
    transform: translateY(20%);
  }
  100% {
    transform: translateY(0%);
  };
  `,

  fadeIn : keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  };
  `,
  
  fadeOut : keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    };
  `
}



const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body{
    width: 100vw;
    background-color: ${Colors.main};
    color: white;
    font-family: ${Fonts.mainText};

    @media screen and (min-width: 1200px){
      height: 100vh;
      overflow: hidden;
    }
  }

  #root{
    width: 100%;
    height: 100%;
  }

  #containerAll{
    width: 100%;
    height: 100%;
  }

  .secondaryColor{
    color: ${Colors.secondary};
  }

  .bolded{
    font-weight: bold;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: unset;
  }
`;

export default GlobalStyle;
