import React from 'react';
import Div100vh from 'react-div-100vh';
import styled, { keyframes } from 'styled-components';

const Layout = ({ children }) => {
    return <StyledDiv100vh style={{ minHeight: '10rvh' }}>{children}</StyledDiv100vh>;
};

export const LayoutContent = ({ children }) => {
    return <Content>{children}</Content>;
};

const StyledDiv100vh = styled(Div100vh)`
    display: flex;
    flex-direction: column;
`;

const animation = keyframes`
    0%{opacity: 0}
    100%{ opacity: 1}
`;

const Content = styled.div`
    animation: ${animation} 0.2s linear;
    flex: 1;
    margin-top: 60px;
    padding: 2rem 4rem;
    display: flex;
    @media (max-width: 1366px) {
        padding: 2rem 2rem;
    }
    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

export default Layout;
