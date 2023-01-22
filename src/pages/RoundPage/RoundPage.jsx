import React, { useEffect, useState } from 'react';
import { ImageWrapper, Img, Ranking, RankingItem, UserRankingItem, RightContainer, Wrapper } from './RoundPage.styles';
import Map from '../../components/Map/Map';
import { useGameCtx } from '../../contexts/GameContext';
import Timer from '../../components/Timer/Timer';
import { Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Spinner from '../../components/Spinner';
import { useUserAuth } from '../../contexts/AuthContext';
import useAiFunctions from '../../hooks/useAiFunctions';

const RoundPage = ({ data, distanceBetween, setDistanceBetween, currentRound, setView, setPoints, points, setPointsHistory }) => {
    const { roundTime, selectedRegion, aiData } = useGameCtx();
    const [loading, isLoading] = useState(true);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { user } = useUserAuth();
    const { setPointsForAi, setPointsHistoryForAi } = useAiFunctions();

    useEffect(() => {
        if (data.length) {
            isLoading(false);
        }
    }, [data]);

    useEffect(() => {
        setPointsHistoryForAi();
    }, [aiData.points]);

    const handleNextRound = () => {
        if (distanceBetween >= 5000) {
            setPoints((points) => points - 5000);
        } else {
            setPoints((points) => points + (5000 - distanceBetween));
        }
        setPointsHistory((prevPoints) => [...prevPoints, points]);
        setPointsForAi();

        setView('roundSummary');
    };

    const handleTimeIsUp = () => {
        setView('roundSummary');
        setDistanceBetween(0);
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
                    <Img src={isMobile ? data[currentRound]?.img_s : data[currentRound]?.img} alt="" />
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
                    <Timer time={roundTime} handleTimeIsUp={handleTimeIsUp} />
                    <Map setDistanceBetween={setDistanceBetween} coordinates={data[currentRound].coordinates} handleNextRound={handleNextRound} />
                </RightContainer>
            </Wrapper>
        )
    );
};

export default RoundPage;
