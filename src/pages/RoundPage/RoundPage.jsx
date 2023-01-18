import React, { useEffect, useState } from 'react';
import { ImageWrapper, Img, Ranking, RankingItem, RankingMyItem, RightContainer, Wrapper } from './RoundPage.styles';
import Map from '../../components/Map/Map';
import { useGameCtx } from '../../contexts/GameContext';
import Timer from '../../components/Timer/Timer';

const RoundPage = ({ user, data, setDistanceBetween, currentRound, setView }) => {
    const { rounds, roundTime, selectedRegion } = useGameCtx();
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        if (data.length) {
            isLoading(false);
        }
    }, [data]);

    const handleNextRound = () => {
        setView('summary');
    };

    const handleTimeIsUp = () => {
        setView('summary');
        setDistanceBetween(0);
    };

    if (loading) return <Wrapper>Loading...</Wrapper>;

    return (
        !loading && (
            <Wrapper>
                <ImageWrapper>
                    <Img src={data[currentRound]?.img} alt="" />
                </ImageWrapper>
                <RightContainer>
                    <Ranking>
                        <RankingMyItem>
                            <p>{user.displayName}</p>
                            <span>18</span>
                        </RankingMyItem>
                        <RankingItem>
                            <p>Maciej</p>
                            <span>7</span>
                        </RankingItem>
                        <RankingItem>
                            <p>Michał</p>
                            <span>2</span>
                        </RankingItem>
                        <RankingItem>
                            <p>Agata</p>
                            <span>0</span>
                        </RankingItem>
                    </Ranking>
                    <Timer time={roundTime} handleTimeIsUp={handleTimeIsUp} />
                    <Map setDistanceBetween={setDistanceBetween} coordinates={data[currentRound].coordinates} handleNextRound={handleNextRound} />
                </RightContainer>
            </Wrapper>
        )
    );
};

export default RoundPage;
