import React from 'react';
import { SummaryItem } from '../../components/SummaryItem/SummaryItem';
import { useGameCtx } from '../../contexts/GameContext';
import { Button, SummaryWrapper, Wrapper } from './RoundSummary.styles';

const RoundSummary = ({ setView, dataLength }) => {
    const { aiData, currentRound, setCurrentRound, distanceBetween } = useGameCtx();

    const handleNextRound = () => {
        if (currentRound + 1 == dataLength) {
            setView('gameSummary');
        } else {
            setCurrentRound((currentRound) => currentRound + 1);
            setView('round');
        }
    };

    // sortowanie danych na podstawie odleglosci od celu
    const sortedData = [{ isUserSummary: true, distance: distanceBetween }, ...aiData.map((e) => ({ ...e, isUserSummary: false }))].sort((a, b) =>
        a.distance > b.distance ? 1 : -1
    );

    return (
        <Wrapper>
            <h1>Runda zakończona!</h1>
            <SummaryWrapper>
                {sortedData.map((e, i) => (
                    <SummaryItem key={i} isUserSummary={e.isUserSummary} {...(e.isUserSummary === false && { data: e })} />
                ))}
            </SummaryWrapper>
            <Button onClick={handleNextRound}>Kontynuuj</Button>
        </Wrapper>
    );
};

export default RoundSummary;
