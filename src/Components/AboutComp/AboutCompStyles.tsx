import styled from "styled-components";
import { Animations, Colors } from "../../globalStyles";

export const LeftWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    animation: 0.5s ease-in-out ${Animations.slideToRight}, 0.5s ease-in-out ${Animations.fadeIn};
    
    .diamondHobbyStreaming{
        grid-column: 1/1;
        grid-row: 1/1;

        @media screen and (max-width: 1000px){
            grid-column: 1/1;
            grid-row: 1/1;
        }
    }

    .diamondHobbyGaming{
        grid-column: 2/2;
        grid-row: 2/2;

        @media screen and (max-width: 1000px){
            grid-column: 2/2;
            grid-row: 1/1;
        }
    }

    .diamondHobbyDrawing{
        grid-column: 1/1;
        grid-row: 3/3;

        @media screen and (max-width: 1000px){
            grid-column: 3/3;
            grid-row: 1/1;
        }
    }

    @media screen and (min-width: 1000px){
        margin-top: 20px;
    }

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }
`;

export const RightWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    animation: 0.5s ease-in-out ${Animations.slideToLeft}, 0.5s ease-in-out ${Animations.fadeIn};
    
    @media screen and (min-width: 1000px) and (max-width: 1400px){
        grid-template-rows: repeat(3, auto);
        align-items: space-around;
        padding-top: 20px;
    }

    @media screen and (max-width: 1000px){
        grid-template-rows: repeat(3, auto);
        align-items: space-around;
        row-gap: 20px;
    }
`;

export const DiamondContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    margin-right: 50px;

    transition: all 0.2s ease-in-out;

    :hover{
        transform: scale(1.1);
    }

    :hover > div:nth-child(2){
        border: 2px solid white;
    }

    @media screen and (max-width: 1400px){
        margin: 0px;
    }

    @media screen and (max-width: 1000px){
        margin:20px 0px 20px 0px;
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
        width: 80px;
        height: 80px;
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

    [class^=iconHobby]{
        font-size: 500%;

        @media screen and (max-width: 1400px){
            font-size: 250%;
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

    .iconHobbyDrawing{
        font-size: 450%;

        @media screen and (max-width: 1400px){
            font-size: 200%;
        }

        @media screen and (max-width: 1000px){
            font-size: 300%;
        }

        @media screen and (max-width: 750px){
            font-size: 200%;
        }

        @media screen and (max-width: 500px){
            font-size: 140%;
        }
    }

    #drawing{
        margin-top: 10px;
        
        @media screen and (max-width: 1400px){
            margin-top: 6px;
        }
        @media screen and (max-width: 1000px){
            margin-top: 8px;
        }
        @media screen and (max-width: 750px){
            margin-top: 6px;
        }
        @media screen and (max-width: 500px){
            margin-top: 5px;
        }
    }

    p{
        font-size: 100%;
        @media screen and (max-width: 1400px){
            font-size: 70%;
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

export const Description = styled.p`
    align-self: baseline;
    font-size: 180%;
    font-weight: lighter;
    line-height: 35px;
    text-align: justify;

    a{
        color: ${Colors.secondary};
        font-weight: bold;
    }

    @media screen and (max-width: 1400px){
        font-size: 100%;
        line-height: 22.5px;
    }

    @media screen and (max-width: 1000px){
        font-size: 150%;
        line-height: 37.5px;
    }

    @media screen and (max-width: 500px){
        font-size: 120%;
        line-height: 25px;
    }

`;

export const DiamondSeparator = styled.p`
    align-self: center;
    grid-row: 2/2;
    text-align: end;
    color: ${Colors.secondary};
    font-size: 200%;
    font-weight: lighter;
    line-height: 45px;

    @media screen and (max-width: 1400px){
        font-size: 150%;
        line-height: 25px;
    }

    @media screen and (max-width: 1000px){
        font-size: 175%;
    }

    @media screen and (max-width: 500px){
        font-size: 150%;
    }
`;

export const InfosContainer = styled.div`
    grid-row: 3/3;
    align-self: end;
    text-align: end;

    .infosIcons{
        margin-right: 15px;
    }
`;

export const InfosTitle = styled.h2`
    font-size: 400%;
    line-height: 30px;
    margin-bottom: 60px;

    @media screen and (max-width: 1400px){
        font-size: 200%;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 1000px){
        font-size: 300%;
        margin-bottom: 45px;
    }

    @media screen and (max-width: 500px){
        font-size: 200%;
        margin-bottom: 30px;
    }
`;

export const Infos = styled.ul`
    li{
        font-size: 200%;
        font-weight: lighter;
        line-height: 45px;
        
        @media screen and (max-width: 1400px){
            font-size: 100%;
            line-height: 30px;
        }

        @media screen and (max-width: 1000px){
            font-size: 150%;
            line-height: 37.5px;
        }

        @media screen and (max-width: 500px){
            font-size: 100%;
            line-height: 30px;
        }
    }
`;