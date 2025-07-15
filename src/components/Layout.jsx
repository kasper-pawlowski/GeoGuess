import React from 'react';
import Div100vh from 'react-div-100vh';
import styled from 'styled-components';

const Layout = ({ children }) => {
    return <StyledDiv100vh style={{ minHeight: '100vh' }}>{children}</StyledDiv100vh>;
};

export const LayoutContent = ({ children }) => {
    return <Content>{children}</Content>;
};

const StyledDiv100vh = styled(Div100vh)`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
    width: 100%;
    margin: 0 auto;

    &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(0, 200, 83, 0.1) 0%, transparent 50%);
        z-index: -1;
        pointer-events: none;
    }
`;

const Content = styled.div`
    flex: 1;
    padding: ${({ theme }) => theme.spacing.lg};
    display: flex;
    position: relative;
    height: 100vh;
    overflow: hidden;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    @media (min-width: 1400px) {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        padding: ${({ theme }) => theme.spacing.xl};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        padding: ${({ theme }) => theme.spacing.md};
        max-width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ theme }) => theme.spacing.sm};
        max-width: 100%;
    }
`;

export default Layout;
