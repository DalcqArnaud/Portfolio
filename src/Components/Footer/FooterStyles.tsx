import styled from "styled-components";
import { Colors, Fonts } from "../../globalStyles";

interface footerWrapperProps{
    justifyType?:string
    useAnimation?:boolean
}

export const FooterWrapper = styled.div<footerWrapperProps>`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: end;
    justify-items: ${props => props.justifyType};
`;

export const FooterLeftContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-items: center;
    column-gap: 55px;
    font-family: ${Fonts.titles};
    font-weight: lighter;

    [class^='socialMedia']{
        cursor: pointer;
        display: grid;
        grid-template-columns: auto auto;
        justify-items: center;
        align-items: center;
        font-size: 150%;;

        :hover{
            color: ${Colors.secondary};
        }
    }

    [class^='iconSocial']{
        margin-right: 8px;
        font-size: xx-large;
    }

    a{
        text-decoration: none;
    }
`;

export const MainArrowsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 15% 15%;
    align-items: end;
    justify-items: end;

    div:first-child{
        grid-column: 2/2;
    }
    div:last-child{
        grid-column: 3/3;
    }

    [class^=iconDiamond]{
        font-size: 300%;
        color: ${Colors.secondary};
        cursor: pointer;

        :hover{
            color: white;
            transform: scale(1.1);
        }
    }
`;