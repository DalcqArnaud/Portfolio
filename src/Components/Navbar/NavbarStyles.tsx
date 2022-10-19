import styled from "styled-components";
import { Colors, Fonts } from "../../globalStyles";

export const NavbarWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: baseline;
    justify-items: baseline;
    grid-template-columns: 20% 1fr auto;
    grid-template-rows: auto 1fr;
    font-family: ${Fonts.titles};
    font-weight: bold;
    font-size: xx-large;

    h2{
        cursor: pointer;
        font-size: xxx-large;
    }
`;

export const NavbarContentContainer = styled.div`
    grid-column: 3/3;
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
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
`;

export const NavbarLine = styled.div`
    grid-column: 1/4;
    grid-row: 2/2;
    border-top: 2px solid white;
    width: 100%;
    height: 100%;
`;