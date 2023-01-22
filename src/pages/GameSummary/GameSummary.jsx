import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GameSummaryItem } from '../../components/SummaryItem/SummaryItem';
import { useGameCtx } from '../../contexts/GameContext';
import { Button, SummaryWrapper, Wrapper } from './GameSummary.styles';

const GameSummary = ({ points }) => {
    const navigate = useNavigate();
    const { rounds, aiData } = useGameCtx();

    const handleEndGame = () => {
        navigate(`/`);
    };

    return (
        <Wrapper>
            <h1>Gra zakończona!</h1>
            {/* <h3>Maksymalna liczba punktów do zdobycia wynosi {rounds * 5000}</h3> */}
            <SummaryWrapper>
                <>
                    <GameSummaryItem points={points} isUserSummary={true} />
                    {aiData.map((e) => (
                        <GameSummaryItem key={e?.name} isUserSummary={false} aiData={e} />
                    ))}
                </>
            </SummaryWrapper>
            <Button onClick={handleEndGame}>Do strony głównej</Button>
        </Wrapper>
    );
};

export default GameSummary;
