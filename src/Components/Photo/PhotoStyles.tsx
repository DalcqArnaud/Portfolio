import styled from "styled-components";
import { Animations } from "../../globalStyles";

export const PhotoContainer = styled.div`
    width: 100%;
    height: 100%;

    grid-column: 2/2;
    grid-row: 2/4;

    display: grid;
    align-items: center;
    justify-items: center;
    /* margin-top: 120px; */

    .photoImg{
        max-width: 100%;
        height: auto;
        animation: 0.5s ease-in-out ${Animations.slideToUp}, 0.5s ease-in-out ${Animations.fadeIn};
    }
`;