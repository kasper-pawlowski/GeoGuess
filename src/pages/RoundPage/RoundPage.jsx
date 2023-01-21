import React, { useEffect, useState } from 'react';
import { ImageWrapper, Img, Ranking, RankingItem, RankingMyItem, RightContainer, Wrapper } from './RoundPage.styles';
import Map from '../../components/Map/Map';
import { useGameCtx } from '../../contexts/GameContext';
import Timer from '../../components/Timer/Timer';
import { Navigate } from 'react-router-dom';

const RoundPage = ({ user, data, distanceBetween, setDistanceBetween, currentRound, setView, setPoints, points, setPointsHistory }) => {
    const { roundTime, selectedRegion } = useGameCtx();
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        if (data.length) {
            isLoading(false);
        }
    }, [data]);

    const handleNextRound = () => {
        if (distanceBetween >= 5000) {
            setPoints((points) => points - 5000);
        } else {
            setPoints((points) => points + (5000 - distanceBetween));
        }
        setPointsHistory((prevPoints) => [...prevPoints, points]);
        setView('roundSummary');
    };

    const handleTimeIsUp = () => {
        setView('roundSummary');
        setDistanceBetween(0);
    };

    if (!selectedRegion) return <Navigate to="/" />;
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
                            <span>{points}</span>
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
