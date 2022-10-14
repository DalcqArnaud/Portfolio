import styled from "styled-components";

export const MainHomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns:  35% 30% 35%;
    grid-template-rows: 10% 80% 10%;
    padding: 6% 0 6% 0;
`;

export const NavBarContainer = styled.div`
    grid-column: 1/4;
    grid-row: 1/1;
`;

export const LeftContainer = styled.div`
    grid-column: 1/1;
    grid-row: 2/2;
`;

export const MiddleContainer = styled.div`
    grid-column: 2/2;
    grid-row: 2/4;
`;

export const RightContainer = styled.div`
    grid-column: 3/3;
    grid-row: 2/2;
`;

export const LeftFooterContainer = styled.div`
    grid-column: 1/2;
    grid-row: 3/3;
`;

export const RightFooterContainer = styled.div`
    grid-column: 3/4;
    grid-row: 3/3;
`;