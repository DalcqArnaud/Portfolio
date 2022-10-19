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
    align-items: baseline;
`;

export const DescriptionContentContainer = styled.div`
    display: grid;
    align-items: baseline;
`;

export const Name = styled.h1`
    font-family: ${Fonts.titles};
    font-size: 800%;
    line-height: 100%;
`;

export const Description = styled.p`
    font-size: 200%;
    line-height: 45px;
    font-weight: lighter;
`;

export const MoreArrow = styled.p`
    font-family: ${Fonts.titles};
    font-size: 300%;
    line-height: 45px;
    letter-spacing: 0.2em;
    cursor: pointer;

    transition: all 0.2s ease-in-out;
    transform-origin: 0% 50%;

    :hover{
        transform: scale(1.1);
    }
`;

export const DiamondContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    margin-left: 50px;

    transition: all 0.2s ease-in-out;

    :hover{
        transform: scale(1.1);
    }

    :hover > div:nth-child(2){
        border: 2px solid white;
    }

    #styledComponent{
        margin-top: -25px;
    }
`;

export const DiamondBackground = styled.div`
    grid-row: 1/1;
    grid-column: 1/1;
    width: 160px;
    height: 160px;
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
        font-size: 500%;
    }

    .iconSkillStyled{
        font-size: 800%;
    }

    #styled{
        margin-top: -50px;
    }
`;