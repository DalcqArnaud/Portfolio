import styled from "styled-components";
import { Animations } from "../../globalStyles";

export const PhotoContainer = styled.div`

    width: 450px;
    height: auto;

    @media screen and (max-width: 1400px){
        width: 270px;
        height: auto;
    }

    .photoImg{
        max-width: 100%;
        height: auto;
        animation: 0.5s ease-in-out ${Animations.slideToUp}, 0.5s ease-in-out ${Animations.fadeIn};
    }
`;