import styled from "styled-components";
import { Colors, Fonts } from "../../globalStyles";

export const NavbarWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    
    grid-template-columns: 20% 1fr auto;
    grid-template-rows: auto 1fr;
    font-family: ${Fonts.titles};
    font-weight: bold;
    font-size: xx-large;

    
    h2{
        z-index: 12;
        cursor: pointer;
        font-size: xxx-large;
    }

    @media screen and (max-width: 500px){
        font-size: 150%;
    }
`;

export const NavbarContentContainer = styled.div`
    z-index: 12;
    grid-column: 3/3;
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: end;
    justify-items: center;
    column-gap: 55px;

    [class^='NavbarItem']{
        cursor: pointer;
        
        :hover{
            color: ${Colors.secondary};
        }
    }

    .active{
        color: ${Colors.secondary};
    }

    @media screen and (max-width: 999px){
        grid-column: 3/3;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: end;
    }
`;

export const NavbarLine = styled.div`
    z-index: 12;
    grid-column: 1/4;
    grid-row: 2/2;
    border-top: 2px solid white;
    width: 100%;
    height: 100%;
`;