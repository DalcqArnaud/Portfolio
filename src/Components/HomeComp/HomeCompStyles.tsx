import styled from "styled-components";
import { Animations, Colors, Fonts } from "../../globalStyles";

export const LeftWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    animation: 0.5s ease-in-out ${Animations.slideToRight}, 0.5s ease-in-out ${Animations.fadeIn};
    
    @media screen and (min-width: 1000px) and (max-width: 1400px){
        grid-template-rows: auto auto;
        margin-top: 20px;
    }

    @media screen and (max-width: 1000px){
        row-gap: 20px;
    }

    @media screen and (max-width: 500px){
        grid-template-rows: auto auto;
        align-items: space-around;
    }
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

        @media screen and (max-width: 1000px){
            grid-column: 1/1;
            grid-row: 1/1;
        }
    }

    .diamondSkillStyled{
        grid-column: 1/1;
        grid-row: 2/2;

        @media screen and (max-width: 1000px){
            grid-column: 2/2;
            grid-row: 1/1;
        }
    }

    .diamondSkillTypescript{
        grid-column: 2/2;
        grid-row: 3/3;

        @media screen and (max-width: 1000px){
            grid-column: 3/3;
            grid-row: 1/1;
        }
    }

    @media screen and (min-width: 1000px) and (max-width: 1400px){
        margin-top: 20px;
    }

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }
`;

export const NameContentContainer = styled.div`
    display: grid;
    align-items: baseline;

    @media screen and (max-width: 500px){
        align-items: center;
    }    
`;

export const DescriptionContentContainer = styled.div`
    display: grid;
    align-items: baseline;
`;

export const Name = styled.h1`
    font-family: ${Fonts.titles};
    font-size: 800%;
    line-height: 100%;

    @media screen and (max-width: 1400px){
        font-size: 500%;
        line-height: 90%;
    }

    @media screen and (max-width: 1000px){
        font-size: 600%;
        line-height: 95%;
        margin-top: 20px;
    }

    @media screen and (max-width: 500px){
        font-size: 500%;
        line-height: 90%;
        margin-top: 20px;
    }
`;

export const Description = styled.p`
    font-size: 200%;
    line-height: 45px;
    font-weight: lighter;

    @media screen and (max-width: 1400px){
        font-size: 135%;
        line-height: 30px;
    }

    @media screen and (max-width: 1000px){
        font-size: 150%;
        line-height: 35px;
    }

    @media screen and (max-width: 500px){
        font-size: 120%;
        line-height: 25px;
        margin-top: 20px;
    }
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

    @media screen and (max-width: 1400px){
        font-size: 160%;
        line-height: 30px;
        margin-top: 20px;
    }

    @media screen and (max-width: 1000px){
        font-size: 200%;
        line-height: 35px;
        margin-top: 20px;
    }

    @media screen and (max-width: 500px){
        font-size: 120%;
        line-height: 25px;
        margin-top: 20px;
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
        @media screen and (max-width: 500px){
            margin-top: -12px;
        }
    }

    @media screen and (max-width: 1400px){
        margin: 0px;
    }

    @media screen and (max-width: 1000px){
        margin:40px 0px 20px 0px;
    }
`;

export const DiamondBackground = styled.div`
    grid-row: 1/1;
    grid-column: 1/1;
    width: 160px;
    height: 160px;
    background-color: ${Colors.secondary};
    transform: rotate(45deg);

    @media screen and (max-width: 1400px){
        width: 100px;
        height: 100px;
    }

    @media screen and (max-width: 1000px){
        width: 120px;
        height: 120px;
    }

    @media screen and (max-width: 750px){
        width: 80px;
        height: 80px;
    }

    @media screen and (max-width: 500px){
        width: 70px;
        height: 70px;
    }
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

        @media screen and (max-width: 1400px){
            font-size: 300%;
        }

        @media screen and (max-width: 1000px){
            font-size: 350%;
        }

        @media screen and (max-width: 750px){
            font-size: 250%;
        }

        @media screen and (max-width: 500px){
            font-size: 180%;
        }
    }

    .iconSkillStyled{
        font-size: 800%;
        @media screen and (max-width: 1400px){
            font-size: 575%;
        }
        @media screen and (max-width: 1000px){
            font-size: 650%;
        }
        @media screen and (max-width: 750px){
            font-size: 500%;
        }
        @media screen and (max-width: 500px){
            font-size: 350%;
        }
    }

    #styled{
        margin-top: -50px;
        
        @media screen and (max-width: 1400px){
            margin-top: -30px;
        }
        @media screen and (max-width: 1000px){
            margin-top: -35px;
        }
        @media screen and (max-width: 750px){
            margin-top: -25px;
        }
        @media screen and (max-width: 500px){
            margin-top: -15px;
        }
    }

    p{
        font-size: 100%;
        @media screen and (max-width: 1400px){
            font-size: 77.5%;
        }
        @media screen and (max-width: 1000px){
            font-size: 85%;
        }
        @media screen and (max-width: 750px){
            font-size: 70%;
        }
        @media screen and (max-width: 500px){
            font-size: 50%;
        }
    }
`;