import { createGlobalStyle, keyframes } from "styled-components";

export const Colors = {
  main : '#2d274e',
  mainDarker : '#262142',
  mainDarkest : '#1d1a33',
  secondary : '#e40244'
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
    height: 100vh;
    background-color: ${Colors.main};
    color: white;
    font-family: ${Fonts.mainText};
  }

  #root{
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
