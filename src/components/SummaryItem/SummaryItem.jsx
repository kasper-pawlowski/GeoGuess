import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useUserAuth } from '../../contexts/AuthContext';
import { useGameConfigCtx } from '../../contexts/GameConfigContext';
import { useGameCtx } from '../../contexts/GameContext';
import { Name, RangeTrack, Wrapper, GameRangeTrack, Points, PlayerIcon, BotIcon } from './SummaryItem.styles';
import { FaUser, FaRobot } from 'react-icons/fa';

export const SummaryItem = ({ isUserSummary, data }) => {
    const { user } = useUserAuth();
    const { currentRound, pointsHistory, distanceBetween } = useGameCtx();
    const isMobile = useMediaQuery({ query: '(max-width: 910px)' });

    const calculatePoints = (distance) => {
        if (!distance) return 0;
        return distance >= 5000 ? 0 : 5000 - distance;
    };

    const userPoints = calculatePoints(distanceBetween);
    const aiPoints = calculatePoints(data?.distance);

    return isMobile ? (
        <Wrapper isUserSummary={isUserSummary}>
            <div className="left-section">
                {isUserSummary ? (
                    <PlayerIcon>
                        <FaUser />
                    </PlayerIcon>
                ) : (
                    <BotIcon>
                        <FaRobot />
                    </BotIcon>
                )}
                <Name>{isUserSummary ? user.displayName : data?.name}</Name>
            </div>
            <div className="center-section">
                <RangeTrack distanceBetween={isUserSummary ? distanceBetween : data?.distance} />
            </div>
            <div className="right-section">
                <p>{isUserSummary ? (distanceBetween ? distanceBetween : '-') : data?.distance} m</p>
                <p>
                    {isUserSummary ? `${pointsHistory[currentRound]} + ${userPoints} pkt` : `${data?.pointsHistory[currentRound]} + ${aiPoints} pkt`}
                </p>
            </div>
        </Wrapper>
    ) : (
        <Wrapper isUserSummary={isUserSummary}>
            <div className="left-section">
                {isUserSummary ? (
                    <PlayerIcon>
                        <FaUser />
                    </PlayerIcon>
                ) : (
                    <BotIcon>
                        <FaRobot />
                    </BotIcon>
                )}
                <Name>{isUserSummary ? user.displayName : data?.name}</Name>
            </div>
            <div className="center-section">
                <RangeTrack distanceBetween={isUserSummary ? distanceBetween : data?.distance} />
            </div>
            <div className="right-section">
                <p>{isUserSummary ? (distanceBetween ? distanceBetween : '-') : data?.distance} m</p>
                <p>
                    {isUserSummary ? `${pointsHistory[currentRound]} + ${userPoints} pkt` : `${data?.pointsHistory[currentRound]} + ${aiPoints} pkt`}
                </p>
            </div>
        </Wrapper>
    );
};

export const GameSummaryItem = ({ isUserSummary, data }) => {
    const { rounds } = useGameConfigCtx();
    const { points } = useGameCtx();
    const { user } = useUserAuth();
    const isMobile = useMediaQuery({ query: '(max-width: 910px)' });

    return isMobile ? (
        <Wrapper isUserSummary={isUserSummary}>
            <div className="left-section">
                {isUserSummary ? (
                    <PlayerIcon>
                        <FaUser />
                    </PlayerIcon>
                ) : (
                    <BotIcon>
                        <FaRobot />
                    </BotIcon>
                )}
                <Name>{isUserSummary ? user.displayName : data?.name}</Name>
            </div>
            <div className="center-section">
                <GameRangeTrack points={isUserSummary ? points : data?.points} rounds={rounds} />
            </div>
            <div className="right-section">
                <Points>{isUserSummary ? points : data?.points} pkt</Points>
            </div>
        </Wrapper>
    ) : (
        <Wrapper isUserSummary={isUserSummary}>
            <div className="left-section">
                {isUserSummary ? (
                    <PlayerIcon>
                        <FaUser />
                    </PlayerIcon>
                ) : (
                    <BotIcon>
                        <FaRobot />
                    </BotIcon>
                )}
                <Name>{isUserSummary ? user.displayName : data?.name}</Name>
            </div>
            <div className="center-section">
                <GameRangeTrack points={isUserSummary ? points : data?.points} rounds={rounds} />
            </div>
            <div className="right-section">
                <Points>{isUserSummary ? points : data?.points} pkt</Points>
            </div>
        </Wrapper>
    );
};
