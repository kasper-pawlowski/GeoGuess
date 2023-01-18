import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import RegionsList from '../../components/RegionsList/RegionsList.jsx';
import { useGameCtx } from '../../contexts/GameContext.jsx';
import { Button, Container, Input, Line, SettingWrapper, Wrapper } from './GameSetupPage.styles.js';

const GameSetupPage = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['gameID']);
    const { rounds, setRounds, roundTime, setRoundTime, selectedRegion, setSelectedRegion } = useGameCtx();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        setSelectedRegion('');
        setRounds(4);
        setRoundTime(60);
    }, []);

    const handleSetRounds = (e) => {
        setRounds(e.target.value);
    };

    const handleSetRoundTime = (e) => {
        setRoundTime(e.target.value);
    };

    useEffect(() => {
        setCookie('gameID', crypto.randomUUID(), { path: '/' });
    }, []);

    const handleStart = () => {
        if (selectedRegion !== '') {
            navigate(`/game/${cookies.gameID}`);
        } else {
            setError('Wybierz region');
        }
    };

    return (
        <Wrapper>
            <Container>
                <h1>Wybierz Region</h1>
                <RegionsList />
            </Container>
            <Line />
            <Container>
                <h1>Zmień ustawienia gry</h1>
                <SettingWrapper>
                    <p>Liczba rund:</p>
                    <Input type="number" name="rounds" value={rounds} min={1} max={4} onChange={handleSetRounds} />
                </SettingWrapper>
                <SettingWrapper>
                    <p>Czas rundy(s):</p>
                    <Input type="number" name="roundTime" value={roundTime} min={10} max={60} onChange={handleSetRoundTime} />
                </SettingWrapper>
                <Button onClick={handleStart}>Rozpocznij</Button>
                {error && <p>{error}</p>}
            </Container>
        </Wrapper>
    );
};

export default GameSetupPage;
