import React, { useState } from 'react';
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
import { BiHome, BiInfoCircle } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';

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

const InfoButton = styled.button`
    position: fixed;
    top: 20px;
    left: 78px;
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
        left: 67px;
        width: 42px;
        height: 42px;
        font-size: 1.3rem;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 20px;
`;

const ModalContent = styled.div`
    background: ${({ theme }) => theme.colors.surface};
    border: 3px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.shadow};
    max-width: 500px;
    width: 100%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 3px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.surface};
`;

const ModalTitle = styled.h2`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.surface};
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 0;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;

const ModalBody = styled.div`
    padding: 20px;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};

    h3 {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: 1.3rem;
        font-weight: 700;
        margin: 20px 0 10px 0;
        color: ${({ theme }) => theme.colors.accent};

        &:first-child {
            margin-top: 0;
        }
    }

    p {
        margin: 10px 0;
        font-size: 1rem;
    }

    ul {
        margin: 10px 0;
        padding-left: 20px;

        li {
            margin: 5px 0;
        }
    }
`;

const AppContent = () => {
    const location = useLocation();
    const { pathname } = location;
    const [showInfoModal, setShowInfoModal] = useState(false);

    const InfoModal = () => (
        <ModalOverlay onClick={() => setShowInfoModal(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>O grze</ModalTitle>
                    <CloseButton onClick={() => setShowInfoModal(false)}>
                        <FaTimes />
                    </CloseButton>
                </ModalHeader>
                <ModalBody>
                    <h3>Jak działa gra?</h3>
                    <p>
                        Quiz Architektoniczny to gra polegająca na odgadywaniu lokalizacji sławnych budynków i zabytków architektonicznych na mapie
                        świata. Twoim zadaniem jest wskazanie miejsca na mapie, gdzie znajduje się pokazany obiekt.
                    </p>

                    <h3>Jak liczone są punkty?</h3>
                    <p>System punktacji opiera się na dokładności Twojego wskazania:</p>
                    <ul>
                        <li>
                            Maksimum: <strong>5000 punktów</strong> za idealne trafienie
                        </li>
                        <li>Punkty zmniejszają się wraz z odległością od prawdziwej lokalizacji</li>
                        <li>
                            Dystans powyżej 5000m = <strong>0 punktów</strong>
                        </li>
                        <li>
                            Formuła: <strong>5000 - dystans w metrach</strong>
                        </li>
                    </ul>

                    <h3>Przeciwnicy AI</h3>
                    <p>
                        Grasz przeciwko inteligentnym botom, które również próbują odgadnąć lokalizacje. Każdy bot ma różny poziom trudności i
                        strategie gry. Twoje wyniki są porównywane z ich osiągnięciami po każdej rundzie.
                    </p>

                    <h3>Rozgrywka</h3>
                    <p>
                        Gra składa się z kilku rund, w każdej z nich widzisz zdjęcie budynku i musisz wskazać jego lokalizację na interaktywnej mapie.
                        Po każdej rundzie widzisz podsumowanie z wynikami wszystkich uczestników.
                    </p>
                </ModalBody>
            </ModalContent>
        </ModalOverlay>
    );

    return (
        <Layout>
            {showInfoModal && <InfoModal />}
            <InfoButton onClick={() => setShowInfoModal(true)}>
                <BiInfoCircle />
            </InfoButton>
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
