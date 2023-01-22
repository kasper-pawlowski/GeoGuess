import React, { useEffect } from 'react';
import Error from '../../components/Error/Error.jsx';
import RegionsList from '../../components/RegionsList/RegionsList.jsx';
import { useGameCtx } from '../../contexts/GameContext.jsx';
import useAiFunctions from '../../hooks/useAiFunctions.jsx';
import useGameConditions from '../../hooks/useGameConditions.jsx';
import { Button, Container, Input, Line, SettingWrapper, Wrapper } from './GameSetupPage.styles.js';

const GameSetupPage = () => {
    const { rounds, setRounds, roundTime, setRoundTime, setSelectedRegion } = useGameCtx();
    const { errors, handleStartGame, regionError } = useGameConditions();
    const { resetAiState } = useAiFunctions();

    useEffect(() => {
        setSelectedRegion('');
        setRounds(5);
        setRoundTime(60);
        resetAiState();
    }, []);

    return (
        <Wrapper>
            <Container>
                <h1>Wybierz Region</h1>
                <RegionsList />
                {regionError && (
                    <Error region>
                        <p>{regionError}</p>
                    </Error>
                )}
            </Container>
            <Line />
            <Container>
                <h1>Zmień ustawienia gry</h1>
                <SettingWrapper>
                    <p>Liczba rund:</p>
                    <Input type="number" name="rounds" value={rounds} min={1} max={5} onChange={(e) => setRounds(e.target.value)} />
                </SettingWrapper>
                <SettingWrapper>
                    <p>Czas rundy(s):</p>
                    <Input type="number" name="roundTime" value={roundTime} min={10} max={60} onChange={(e) => setRoundTime(e.target.value)} />
                </SettingWrapper>
                <Button onClick={handleStartGame}>Rozpocznij</Button>
                {errors.length > 0 && (
                    <Error>
                        {errors.map((error, i) => (
                            <p key={i}>{error}</p>
                        ))}
                    </Error>
                )}
            </Container>
        </Wrapper>
    );
};

export default GameSetupPage;
