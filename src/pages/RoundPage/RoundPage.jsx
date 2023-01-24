import React, { useEffect, useState } from 'react';
import { ImageWrapper, Ranking, RankingItem, UserRankingItem, RightContainer, Wrapper } from './RoundPage.styles';
import Map from '../../components/Map/Map';
import { useGameConfigCtx } from '../../contexts/GameConfigContext';
import { useGameCtx } from '../../contexts/GameContext';
import Timer from '../../components/Timer/Timer';
import { Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Spinner from '../../components/Spinner';
import { useUserAuth } from '../../contexts/AuthContext';
import useAiFunctions from '../../hooks/useAiFunctions';
import Image from '../../components/Image/Image';

const RoundPage = ({ data, distanceBetween, setDistanceBetween, setView, setPoints, points, setPointsHistory }) => {
    const { roundTime, selectedRegion } = useGameConfigCtx();
    const { currentRound } = useGameCtx();
    const { aiData } = useGameCtx();
    const [loading, isLoading] = useState(true);
    const [secondsLeft, setSecondsLeft] = useState(roundTime);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { user } = useUserAuth();
    const { updateAiData } = useAiFunctions();

    useEffect(() => {
        if (data.length) {
            isLoading(false);
        }
    }, [data]);

    useEffect(() => {
        setPointsHistory((prevPoints) => [...prevPoints, points]);
    }, [points]);

    const handleNextRound = () => {
        if (distanceBetween < 5000 || !distanceBetween === null) {
            setPoints((points) => points + (5000 - distanceBetween));
        }
        updateAiData();
        setView('roundSummary');
    };

    const handleTimeIsUp = () => {
        updateAiData();
        setDistanceBetween(null);
        setView('roundSummary');
    };

    if (!selectedRegion) return <Navigate to="/" />;
    if (loading) {
        return (
            <Wrapper>
                <Spinner />
            </Wrapper>
        );
    }

    return (
        !loading && (
            <Wrapper>
                <ImageWrapper>
                    <Image src={isMobile ? data[currentRound]?.img_s : data[currentRound]?.img} />
                </ImageWrapper>
                <RightContainer>
                    <Ranking>
                        <UserRankingItem>
                            <p>{user.displayName}</p>
                            <span>{points}</span>
                        </UserRankingItem>
                        {aiData.map((e) => (
                            <RankingItem key={e.name}>
                                <p>{e.name}</p>
                                <span>{e.points}</span>
                            </RankingItem>
                        ))}
                    </Ranking>
                    <Timer handleTimeIsUp={handleTimeIsUp} secondsLeft={secondsLeft} setSecondsLeft={setSecondsLeft} />
                    <Map
                        setDistanceBetween={setDistanceBetween}
                        coordinates={data[currentRound].coordinates}
                        handleNextRound={handleNextRound}
                        secondsLeft={secondsLeft}
                    />
                </RightContainer>
            </Wrapper>
        )
    );
};

export default RoundPage;
