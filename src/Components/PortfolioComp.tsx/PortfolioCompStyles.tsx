import styled from "styled-components";
import { Animations, Colors, Fonts } from "../../globalStyles";

export const LeftWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const RightWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

interface CardProps{
    alignType?:string
}

export const LeftCardWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    animation: 0.5s ease-in-out ${Animations.slideToRight}, 0.5s ease-in-out ${Animations.fadeIn};
    padding-top: 20px;
    
    @media screen and (max-width: 1000px){
        justify-items: center;
    }
`;

export const RightCardWrapper = styled.div`
    width: 100%;
    height: 100%;   
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: end;
    animation: 0.5s ease-in-out ${Animations.slideToLeft}, 0.5s ease-in-out ${Animations.fadeIn};
    padding-top: 20px;
    
    @media screen and (max-width: 1000px){
        justify-items: center;
    }
`;

export const CardContainer = styled.div<CardProps>`
    display: grid;
    grid-template-columns: 33.3% 16.6% 16.6% 1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr;

    background-color: ${Colors.mainDarker};
    width: 90%;
    height: 90%;
    align-self: ${props => props.alignType};
    padding: 20px;

    box-shadow: rgb(38, 33, 66) 0px 7px 29px 0px;

    :hover{
        transform: scale(1.1);
    }

    @media screen and (max-width: 1000px){
        grid-template-rows: 0.5fr 0.5fr 1fr 1fr 1fr;
        width: 100%;
    }
`;

export const CardNameContainer = styled.div`
    grid-column: 1/5;
    grid-row: 1/1;
    font-size: x-large;
    font-weight: bold;
    text-align: center;
    @media screen and (max-width: 1400px){
        font-size: medium;
    }
    @media screen and (min-width: 750px) and (max-width: 1000px){
        font-size: xxx-large;
    }
`;

export const CardDescriptionContainer = styled.div`
    grid-column: 1/5;
    grid-row: 2/2;
    text-align: justify;
    border-bottom: 2px solid white;
    @media screen and (max-width: 1400px){
        font-size: xx-small;
    }
    @media screen and (min-width: 750px) and (max-width: 1000px){
        font-size: x-large;
    }
`;

export const CardInfosContainer = styled.div`
    grid-column: 4/4;
    grid-row: 3/5;
    display: grid;
    grid-template-rows: repeat(3, auto);
    text-align: center;
    align-items: end;

    @media screen and (max-width: 1000px){
        grid-column: 1/5;
        grid-row: 3/4;
        display: grid;
        grid-template-rows: repeat(2, auto);
        grid-template-columns: repeat(2, auto);
        text-align: center;
        align-items: end;
        row-gap: 10px;
    }
`;

export const CardButton = styled.button`
    width: 90%;
    margin: 0 auto;
    height: 50px;
    background-color: ${Colors.secondary};
    color: white;
    border: none;
    cursor: pointer;
    font-size: large;

    :hover{
        color: ${Colors.secondary};
        background-color: white;
        border: 2px solid ${Colors.secondary};
        transform: scale(1.1);
    }

    @media screen and (max-width: 1400px){
        height: 25px;
        font-size: 70%;
    }

    @media screen and (max-width: 1000px){
        width: 40%;
        font-size: 150%;
        grid-column: 1/3;
        grid-row: 2/2;
    }

    @media screen and (max-width: 750px){
        font-size: 120%;
    }

    @media screen and (max-width: 500px){
        height: 33px;
        width: 50%;
        font-size: 100%;
    }
`;

export const CardTechnosIconsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: baseline;
    justify-items: center;
    font-size: 200%;

    @media screen and (max-width: 1400px){
        font-size: 100%;
    }

    @media screen and (max-width: 1000px){
        font-size: 300%;
    }

    @media screen and (max-width: 750px){
        font-size: 200%;
    }

    @media screen and (max-width: 500px){
        font-size: 150%;
    }
`;

export const MoreArrowContainer = styled.div`
    text-align: end;
`;

export const MoreArrow = styled.p`
    font-family: ${Fonts.titles};
    font-size: 100%;
    line-height: 35px;
    letter-spacing: 0.2em;
    cursor: pointer;

    transition: all 0.2s ease-in-out;
    transform-origin: 100% 50%;

    :hover{
        transform: scale(1.1);
    }

    @media screen and (max-width: 1400px){
        font-size: 50%;
        line-height: 10px;
    }

    @media screen and (max-width: 1000px){
        font-size: 125%;
    }

    @media screen and (max-width: 750px){
        font-size: 90%;
    }

    @media screen and (max-width: 500px){
        font-size: 75%;
    }
`;

export const CardPictureContainer = styled.div`
    width: 90%;
    height: 90%;
    margin: auto;

    grid-column: 1/4;
    grid-row: 3/5;

    display: grid;
    align-items: center;
    justify-items: center;
    overflow: hidden;

    background-color: ${Colors.mainDarkest};

    .cardPicture{
        width: 100%;
    }

    @media screen and (max-width: 1000px){
        width: 100%;
        height: 90%;
        grid-column: 1/5;
        grid-row: 4/6;
    }
`;