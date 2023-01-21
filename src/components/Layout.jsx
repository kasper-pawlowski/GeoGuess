import React from 'react';
import Div100vh from 'react-div-100vh';
import styled from 'styled-components';

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

const Content = styled.div`
    flex: 1;
    margin-top: 60px;
    padding: 2rem 4rem;
    display: flex;
    @media (max-width: 1366px) {
        padding: 2rem 2rem;
    }
    @media (max-width: 768px) {
        padding: 2rem 0.5rem;
    }
`;

export default Layout;
