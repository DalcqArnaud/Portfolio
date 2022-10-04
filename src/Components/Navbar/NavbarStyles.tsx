import styled from "styled-components";
import { Fonts } from "../../utils";

export const NavbarContainer = styled.div`
    grid-row: 1/1;
    grid-column: 1/4;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: baseline;
    grid-template-columns: 20% 1fr auto;
    font-family: ${Fonts.titles};
    font-weight: bold;

    h2{
        cursor: pointer;
    }

    .NavbarLinksContent{
        grid-column: 3/3;
        display: grid;
        grid-template-columns: repeat(4, auto);
        align-items: center;
        justify-items: center;
        column-gap: 55px;
    }
`;