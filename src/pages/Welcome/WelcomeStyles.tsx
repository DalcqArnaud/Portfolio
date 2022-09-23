import styled from "styled-components";
import { Fonts } from "../../utils";

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    align-items: center;
    justify-items: center;

    h1{
        font-size: 300%;
        font-family: ${Fonts.titles};
    }
`;