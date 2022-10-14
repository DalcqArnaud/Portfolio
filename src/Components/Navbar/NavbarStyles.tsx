import styled from "styled-components";
import { Colors, Fonts } from "../../globalStyles";

export const NavbarWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-items: baseline;
    grid-template-columns: 20% 1fr auto;
    font-family: ${Fonts.titles};
    font-weight: bold;
    font-size: x-large;

    h2{
        cursor: pointer;
    }
`;

export const NavbarContentContainer = styled.div`
    grid-column: 3/3;
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    justify-items: center;
    column-gap: 55px;

    [class^='NavbarItem']{
        :hover{
            color: ${Colors.secondary};
        }
    }

    .active{
        color: ${Colors.secondary};
    }
`;