import React from 'react';
import SummaryItem from '../../components/SummaryItem/SummaryItem';
import { Button, SummaryWrapper, Wrapper } from './RoundSummary.styles';

const RoundSummary = ({ distanceBetween, setView, setCurrentRound, dataLength, currentRound, points, pointsHistory }) => {
    const handleNextRound = () => {
        if (currentRound + 1 == dataLength) {
            setView('gameSummary');
        } else {
            setCurrentRound((currentRound) => currentRound + 1);
            setView('round');
        }
    };

    return (
        <Wrapper>
            <h1>Runda zakończona!</h1>
            <SummaryWrapper>
                <SummaryItem distanceBetween={distanceBetween} points={points} pointsHistory={pointsHistory} currentRound={currentRound} />
            </SummaryWrapper>
            <Button onClick={handleNextRound}>Kontynuuj</Button>
        </Wrapper>
    );
};

export default RoundSummary;
