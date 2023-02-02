import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useUserAuth } from '../../contexts/AuthContext';
import { useGameConfigCtx } from '../../contexts/GameConfigContext';
import { useGameCtx } from '../../contexts/GameContext';
import { Name, RangeTrack, RangeWrapper, Wrapper, GameRangeTrack, Spacer, Points } from './SummaryItem.styles';

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
            <div>
                <Name>{isUserSummary ? user.displayName : data?.name}</Name>
                <Points>
                    {isUserSummary ? `${pointsHistory[currentRound]} + ${userPoints} pkt` : `${data?.pointsHistory[currentRound]} + ${aiPoints} pkt`}
                </Points>
            </div>
            <RangeWrapper>
                <RangeTrack distanceBetween={isUserSummary ? distanceBetween : data?.distance} />
                <p>{isUserSummary ? (distanceBetween ? distanceBetween : '-') : data?.distance} m</p>
            </RangeWrapper>
        </Wrapper>
    ) : (
        <Wrapper isUserSummary={isUserSummary}>
            <Name>{isUserSummary ? user.displayName : data?.name}</Name>
            <Spacer />
            <RangeWrapper>
                <RangeTrack distanceBetween={isUserSummary ? distanceBetween : data?.distance} />
                <p>{isUserSummary ? (distanceBetween ? distanceBetween : '-') : data?.distance} m</p>
            </RangeWrapper>
            <Spacer />
            <Points>
                {isUserSummary ? `${pointsHistory[currentRound]} + ${userPoints} pkt` : `${data?.pointsHistory[currentRound]} + ${aiPoints} pkt`}
            </Points>
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
            <div>
                <Name>{isUserSummary ? user.displayName : data?.name}</Name>
                <Points>{isUserSummary ? points : data?.points} pkt</Points>
            </div>
            <RangeWrapper>
                <GameRangeTrack points={isUserSummary ? points : data?.points} rounds={rounds} />
            </RangeWrapper>
        </Wrapper>
    ) : (
        <Wrapper isUserSummary={isUserSummary}>
            <Name>{isUserSummary ? user.displayName : data?.name}</Name>
            <RangeWrapper>
                <GameRangeTrack points={isUserSummary ? points : data?.points} rounds={rounds} />
            </RangeWrapper>
            <Points>{isUserSummary ? points : data?.points} pkt</Points>
        </Wrapper>
    );
};
