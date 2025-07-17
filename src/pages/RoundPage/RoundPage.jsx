import React, { useEffect, useState } from 'react';
import { ImageWrapper, Ranking, RankingItem, UserRankingItem, RightContainer, Wrapper, PlayerIcon, BotIcon } from './RoundPage.styles';
import Map from '../../components/Map/Map';
import { useGameConfigCtx } from '../../contexts/GameConfigContext';
import { useGameCtx } from '../../contexts/GameContext';
import Timer from '../../components/Timer/Timer';
import { Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Spinner from '../../components/Spinner';
import { useUserAuth } from '../../contexts/AuthContext';
import Image from '../../components/Image/Image';
import { FaUser, FaRobot } from 'react-icons/fa';

const RoundPage = ({ data, setView }) => {
    const { roundTime, selectedRegion } = useGameConfigCtx();
    const { aiData, points, setPoints, setPointsHistory, distanceBetween, setDistanceBetween, currentRound, setAiData } = useGameCtx();
    const [loading, isLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(roundTime);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { user } = useUserAuth();

    useEffect(() => {
        if (data.length) {
            isLoading(false);
        }
    }, [data]);

    useEffect(() => {
        setImageLoaded(false);
        setSecondsLeft(roundTime);
    }, [currentRound, roundTime]);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

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

    const updateAiData = async () => {
        const newData = await aiData.map((e) => {
            const newDistance = Math.round(Math.random() * 4999 + 1);
            return {
                ...e,
                distance: newDistance,
                points: e.points + (5000 - newDistance),
                pointsHistory: e.pointsHistory.concat(e.points),
            };
        });
        setAiData(newData);
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
                    <Image src={isMobile ? data[currentRound]?.img_s : data[currentRound]?.img} onImageLoad={handleImageLoad} />
                </ImageWrapper>
                <RightContainer>
                    <Ranking>
                        <UserRankingItem>
                            <PlayerIcon>
                                <FaUser />
                            </PlayerIcon>
                            <p>{user.displayName}</p>
                            <span>{points}</span>
                        </UserRankingItem>
                        {aiData.map((e) => (
                            <RankingItem key={e.name}>
                                <BotIcon>
                                    <FaRobot />
                                </BotIcon>
                                <p>{e.name}</p>
                                <span>{e.points}</span>
                            </RankingItem>
                        ))}
                    </Ranking>
                    <Timer handleTimeIsUp={handleTimeIsUp} secondsLeft={secondsLeft} setSecondsLeft={setSecondsLeft} isActive={imageLoaded} />
                    <Map coordinates={data[currentRound].coordinates} handleNextRound={handleNextRound} />
                </RightContainer>
            </Wrapper>
        )
    );
};

export default RoundPage;
