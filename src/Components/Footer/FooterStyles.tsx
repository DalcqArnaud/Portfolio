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
    
    @media screen and (max-width: 380px){
        align-items: center;
        justify-items: center;
    }
`;

export const FooterLeftContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    width: 100%;
    justify-content: space-between;
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

        @media screen and (max-width: 380px){
            font-size: 80%;
        }
    }

    [class^='iconSocial']{
        margin-right: 5px;
        font-size: xx-large;

        @media screen and (max-width: 380px){
            font-size: 150%;
        }
    }

    a{
        text-decoration: none;
    }

    @media screen and (max-width: 380px){
        column-gap: 20px;
    }
`;

export const MainArrowsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 15% 15%;
    align-items: center;
    justify-items: center;

    .cardDisabled{
        pointer-events: none;
        cursor: default;

        div:first-child{
            color: ${Colors.disabled};
        }

        div:last-child{
            background-color: ${Colors.transparent};
            border: 2px solid ${Colors.disabled};
        }
    }
`;

export const DiamondContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    :hover{
        transform: scale(1.1);
    }

    :hover > div:first-child{
        color: ${Colors.secondary};
    }

    :hover > div:last-child{
        background-color: white;
        border: 2px solid ${Colors.secondary};
    }
`;

export const DiamondIconContainer = styled.div`
    grid-row: 1/1;
    grid-column: 1/1;
    display: grid;
    align-items: center;
    justify-items: center;
    position: relative;
    z-index: 2;
    text-align: center;

    [class^=iconDiamond]{
        font-size: 250%;
    }
`;

export const DiamondBackground = styled.div`
    grid-row: 1/1;
    grid-column: 1/1;
    width: 50px;
    height: 50px;
    background-color: ${Colors.secondary};
    transform: rotate(45deg);
`;