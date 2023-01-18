import React from 'react';
import { useNavigate } from 'react-router-dom';
import SummaryItem from '../../components/SummaryItem/SummaryItem';
import { Button, SummaryWrapper, Wrapper } from './RoundSummary.styles';

const RoundSummary = ({ distanceBetween, setView, setCurrentRound, dataLength, currentRound }) => {
    const navigate = useNavigate();

    const handleNextRound = () => {
        if (currentRound + 1 == dataLength) {
            navigate(`/`);
        } else {
            setCurrentRound((currentRound) => currentRound + 1);
            setView('round');
        }
    };

    return (
        <Wrapper>
            <h1>Runda zakończona!</h1>
            <SummaryWrapper>
                <SummaryItem distanceBetween={distanceBetween} />
                <SummaryItem distanceBetween={distanceBetween} />
                <SummaryItem distanceBetween={distanceBetween} />
                <SummaryItem distanceBetween={distanceBetween} />
            </SummaryWrapper>
            <Button onClick={handleNextRound}>Kontynuuj</Button>
        </Wrapper>
    );
};

export default RoundSummary;
