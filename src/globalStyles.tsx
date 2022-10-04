import { createGlobalStyle } from "styled-components";
import {Colors, Fonts} from "./utils";


/*
  Colors:
  Purple : #2d274e
  Magenta : #e40244

  Fonts :
  Titles : font-family: 'Montserrat', sans-serif;
  Texts : font-family: 'Raleway', sans-serif;
*/

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
    padding: 0 10% 0 10%;
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
