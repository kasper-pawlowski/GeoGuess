import React from 'react';
import { SummaryItem } from '../../components/SummaryItem/SummaryItem';
import { useGameCtx } from '../../contexts/GameContext';
import { Button, SummaryWrapper, Wrapper } from './RoundSummary.styles';

const RoundSummary = ({ distanceBetween, setView, dataLength, points, pointsHistory }) => {
    const { aiData, currentRound, setCurrentRound } = useGameCtx();

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
                <>
                    <SummaryItem
                        isUserSummary={true}
                        distanceBetween={distanceBetween}
                        points={points}
                        pointsHistory={pointsHistory}
                        currentRound={currentRound}
                    />
                    {aiData.map((e) => (
                        <SummaryItem key={e?.name} isUserSummary={false} aiData={e} currentRound={currentRound} />
                    ))}
                </>
            </SummaryWrapper>
            <Button onClick={handleNextRound}>Kontynuuj</Button>
        </Wrapper>
    );
};

export default RoundSummary;
