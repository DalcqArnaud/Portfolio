import styled from "styled-components";
import { Colors, Fonts } from "../../globalStyles";

interface footerWrapperProps{
    justifyType?:string
}

export const FooterWrapper = styled.div<footerWrapperProps>`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: end;
    justify-items: ${props => props.justifyType};
    font-family: ${Fonts.titles};
    font-weight: lighter;
`;

export const FooterLeftContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-items: center;
    column-gap: 55px;

    [class^='socialMedia']{
        cursor: pointer;
        display: grid;
        grid-template-columns: auto auto;
        justify-items: center;
        align-items: center;
        font-size: 200%;;

        :hover{
            color: ${Colors.secondary};
        }
    }

    [class^='iconSocial']{
        margin-right: 8px;
        font-size: xxx-large;
    }

    a{
        text-decoration: none;
    }
`;