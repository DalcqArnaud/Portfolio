import styled, { keyframes } from "styled-components";
import { Fonts } from "../../globalStyles";

const PulseAnimation = keyframes`
    0%   {transform:scale(1)}
    50%  {transform:scale(1.2)}
    100% {transform:scale(1)}
`;

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    align-items: center;
    justify-items: center;

    h1{
        font-size: 500%;
        font-family: ${Fonts.titles};
        animation: 1.5s infinite ease-in-out ${PulseAnimation};
    }
`;