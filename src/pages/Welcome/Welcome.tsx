import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { MainContainer } from './WelcomeStyles'

const Welcome:FC = () => {

    useEffect(() => {
        loadPage();
    }, []);

    let navigate = useNavigate();

    const loadPage = () => {
        setTimeout(() => {
            navigate('/Home');
        }, 2000)
    }

    return (
        <MainContainer>
            <h1>Welcome</h1>
        </MainContainer>
    )
};
export default Welcome