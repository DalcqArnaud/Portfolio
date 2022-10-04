import styled from "styled-components";
import { Fonts } from "../../utils";

export const MainHomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns:  35% 30% 35%;
    grid-template-rows: 10% 40% 40% 10%;
    padding: 6% 0 6% 0;
`;

interface ContentContainerProps{
    startingCol?: number
    endingCol?: number
    startingRow?: number
    endingRow?: number
    contentPos?: string
}

export const ContentContainer = styled.div<ContentContainerProps>`
    grid-column-start: ${props => props.startingCol || 1};
    grid-column-end: ${props => props.endingCol || 1};
    grid-row-start: ${props => props.startingRow || 1};
    grid-row-end: ${props => props.endingRow || 1};
    display: grid;
    align-items: ${props => props.contentPos || 'center'};
`;

export const ContentWrapper = styled.div`
    
`;

export const Name = styled.h1`
    font-family: ${Fonts.titles};
    font-size: 800%;
    line-height: 100%;
`;

export const Description = styled.p`
    font-size: x-large;
    font-weight: lighter;
`;

export const MoreArrow = styled.p`
    font-family: ${Fonts.titles};
    font-size: x-large;
    letter-spacing: 0.2em;
    cursor: pointer;
`;