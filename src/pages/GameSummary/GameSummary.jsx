import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GameSummaryItem } from '../../components/SummaryItem/SummaryItem';
import { useGameCtx } from '../../contexts/GameContext';
import { Button, SummaryWrapper, Wrapper } from './GameSummary.styles';

const GameSummary = () => {
    const navigate = useNavigate();
    const { aiData } = useGameCtx();

    const handleEndGame = () => {
        navigate(`/`);
    };

    return (
        <Wrapper>
            <h1>Gra zakończona!</h1>
            <SummaryWrapper>
                <>
                    <GameSummaryItem isUserSummary={true} />
                    {aiData.map((e) => (
                        <GameSummaryItem key={e?.name} isUserSummary={false} data={e} />
                    ))}
                </>
            </SummaryWrapper>
            <Button onClick={handleEndGame}>Do strony głównej</Button>
        </Wrapper>
    );
};

export default GameSummary;
