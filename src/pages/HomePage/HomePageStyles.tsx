import styled from "styled-components";
import { Animations } from "../../globalStyles";

export const MainHomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 100px;
    display: grid;
    grid-template-columns:  35% 30% 35%;
    grid-template-rows: 10% 80% 10%;

    @media screen and (max-width: 1400px){
        padding: 60px;
    }

    @media screen and (max-width: 1000px){
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: repeat(5, auto);
        padding: 60px;
    }

    @media screen and (max-width: 500px){
        padding: 20px;
    }
`;

export const NavBarContainer = styled.div`
    grid-column: 1/4;
    grid-row: 1/1;

    @media screen and (max-width: 1000px){
        grid-column: 1/1;
        grid-row: 1/1;
    }
`;

export const LeftContainer = styled.div`
    grid-column: 1/1;
    grid-row: 2/2;

    @media screen and (max-width: 1000px){
        grid-column: 1/1;
        grid-row: 2/2;
    }
`;

export const MiddleContainer = styled.div`
    position: absolute;
    bottom: -5%;
    left: 38%;


    @media screen and (max-width: 1000px){
        display: none;
    }
`;

interface RightContainerProps{
    endRow?:number
}

export const RightContainer = styled.div<RightContainerProps>`
    grid-column: 3/3;
    grid-row: 2/${props => props.endRow};

    @media screen and (max-width: 1000px){
        grid-column: 1/1;
        grid-row: 3/3;
    }
`;

export const LeftFooterContainer = styled.div`
    grid-column: 1/2;
    grid-row: 3/3;

    @media screen and (max-width: 1000px){
        grid-column: 1/1;
        grid-row: 5/5;
    }
`;

export const RightFooterContainer = styled.div`
    grid-column: 3/3;
    grid-row: 3/3;
    animation: 0.5s ease-in-out ${Animations.slideToLeft}, 0.5s ease-in-out ${Animations.fadeIn};

    @media screen and (max-width: 1000px){
        grid-column: 1/1;
        grid-row: 4/4;
    }
`;