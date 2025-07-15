import React from 'react';
import { Navigate, Route, Routes, Link, useLocation } from 'react-router-dom';
import { UserAuthContextProvider } from './contexts/AuthContext';
import GameSetupPage from './pages/GameSetupPage/GameSetupPage';
import ProtectedRoute from './components/ProtectedRoute';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GameContextProvider } from './contexts/GameContext';
import { GameConfigContextProvider } from './contexts/GameConfigContext';
import Layout, { LayoutContent } from './components/Layout';
import GamePage from './pages/GamePage/GamePage';
import NotFound from './pages/NotFound/NotFound';
import styled from 'styled-components';
import { BiHome } from 'react-icons/bi';

const HomeButton = styled(Link)`
    position: fixed;
    top: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.surface};
    border: 3px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.shadow};
    z-index: 1000;
    text-decoration: none;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.shadow};
    }

    &:active {
        transform: translateY(0);
        box-shadow: 2px 2px 0px ${({ theme }) => theme.colors.shadow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        top: 15px;
        left: 15px;
        width: 42px;
        height: 42px;
        font-size: 1.3rem;
    }
`;

const AppContent = () => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <Layout>
            {pathname !== '/' && (
                <HomeButton to="/">
                    <BiHome />
                </HomeButton>
            )}
            <LayoutContent>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <GameSetupPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/game"
                        element={
                            <ProtectedRoute>
                                <GamePage />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
            </LayoutContent>
        </Layout>
    );
};

const Root = () => {
    return (
        <UserAuthContextProvider>
            <GameConfigContextProvider>
                <GameContextProvider>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <AppContent />
                    </ThemeProvider>
                </GameContextProvider>
            </GameConfigContextProvider>
        </UserAuthContextProvider>
    );
};

export default Root;
