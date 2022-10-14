import styled from "styled-components";
import { Animations, Colors, Fonts } from "../../globalStyles";

export const LeftWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    animation: 0.5s ease-in-out ${Animations.slideToRight}, 0.5s ease-in-out ${Animations.fadeIn};
`;

export const RightWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    animation: 0.5s ease-in-out ${Animations.slideToLeft}, 0.5s ease-in-out ${Animations.fadeIn};
    
    .diamondSkillReact{
        grid-column: 2/2;
        grid-row: 1/1;
    }

    .diamondSkillStyled{
        grid-column: 1/1;
        grid-row: 2/2;
    }

    .diamondSkillTypescript{
        grid-column: 2/2;
        grid-row: 3/3;
    }
`;

export const NameContentContainer = styled.div`
    display: grid;
    align-items: center;
`;

export const DescriptionContentContainer = styled.div`
    display: grid;
    align-items: center;
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

export const DiamondContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
`;

export const DiamondBackground = styled.div`
    grid-row: 1/1;
    grid-column: 1/1;
    width: 125px;
    height: 125px;
    background-color: ${Colors.secondary};
    transform: rotate(45deg);
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

    [class^=iconSkill]{
        font-size: xxx-large;
    }
`;