import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameSummaryItem } from '../../components/SummaryItem/SummaryItem';
import { useGameCtx } from '../../contexts/GameContext';
import { Button, SummaryWrapper, Wrapper } from './GameSummary.styles';

const GameSummary = () => {
    const navigate = useNavigate();
    const { aiData, points } = useGameCtx();

    const handleEndGame = () => {
        navigate(`/`);
    };

    // sortowanie na podstawie sumy punktów
    const sortedData = [
        {
            isUserSummary: true,
            points: points,
        },
        ...aiData.map((e) => ({
            name: e.name,
            points: e.points,
            isUserSummary: false,
        })),
    ].sort((a, b) => (a.points > b.points ? -1 : 1));

    return (
        <Wrapper>
            <h1>Gra zakończona!</h1>
            <SummaryWrapper>
                {sortedData.map((e, i) => (
                    <GameSummaryItem key={i} isUserSummary={e.isUserSummary} {...(e.isUserSummary === false && { data: e })} />
                ))}
            </SummaryWrapper>
            <Button onClick={handleEndGame}>Do strony głównej</Button>
        </Wrapper>
    );
};

export default GameSummary;
