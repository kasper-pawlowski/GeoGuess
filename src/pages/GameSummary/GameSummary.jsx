import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { GameSummaryItem, MobileGameSummaryItem } from '../../components/SummaryItem/SummaryItem';
import { useGameCtx } from '../../contexts/GameContext';
import { Button, SummaryWrapper, Wrapper } from './GameSummary.styles';

const GameSummary = ({ points }) => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { rounds } = useGameCtx();

    const handleEndGame = () => {
        navigate(`/`);
    };

    return (
        <Wrapper>
            <h1>Gra zakończona!</h1>
            {/* <h3>Maksymalna liczba punktów do zdobycia wynosi {rounds * 5000}</h3> */}
            <SummaryWrapper>{isMobile ? <MobileGameSummaryItem points={points} /> : <GameSummaryItem points={points} />}</SummaryWrapper>
            <Button onClick={handleEndGame}>Do strony głównej</Button>
        </Wrapper>
    );
};

export default GameSummary;
