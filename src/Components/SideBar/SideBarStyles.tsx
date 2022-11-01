import React from "react";
import styled from "styled-components";
import { Colors } from "../../globalStyles";

export const BackdropDiv = styled.div`
    position: fixed;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`;

export const SideBarContainer = styled.div`
    position: fixed;
    z-index: 11;
    width: 100%;
    height: 33vh;
    top: 0;
    left: 0;
    padding: 60px;
    padding-bottom: 0px;
    background-clip: content-box;
    background-color: ${Colors.main};

    @media screen and (max-width: 1000px){
        padding: 30px;
        padding-bottom: 0px;
    }

    @media screen and (max-width: 500px){
        padding: 10px;
        padding-bottom: 0px;
    }
`;

export const SideBarContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 60px;
    padding-bottom: 0px;

    display: grid;
    grid-template-rows: repeat(3, 23%);
    align-items: center;
    justify-items: baseline;

    [class^='SidebarItem']{
        cursor: pointer;
        
        :hover{
            color: ${Colors.secondary};
        }
    }

    .active{
        color: ${Colors.secondary};
    }

    @media screen and (max-width: 1000px){
        padding: 30px;
        padding-bottom: 0px;
        margin-top: 60px;
        font-size: larger;
    }

    @media screen and (max-width: 500px){
        padding: 10px;
        padding-bottom: 0px;
        margin-top: 60px;
    }
`;
