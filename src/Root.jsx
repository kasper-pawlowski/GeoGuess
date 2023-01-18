import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from './contexts/AuthContext';
import GameSetupPage from './pages/GameSetupPage/GameSetupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GameContextProvider } from './contexts/GameContext';
import Skyscrapers from './components/Skyscrapers';
import Layout, { LayoutContent } from './components/Layout';
import GamePage from './pages/GamePage/GamePage';
import NotFound from './pages/NotFound/NotFound';

const Root = () => {
    return (
        <UserAuthContextProvider>
            <GameContextProvider>
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <Layout>
                        <Navbar />
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
                                <Route path="/login" element={<LoginPage />} />
                                <Route
                                    path="/game/:gameID"
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
                    <Skyscrapers />
                </ThemeProvider>
            </GameContextProvider>
        </UserAuthContextProvider>
    );
};

export default Root;
