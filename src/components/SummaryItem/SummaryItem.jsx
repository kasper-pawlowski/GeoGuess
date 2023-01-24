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

    const returnUserPoints = () => {
        if (distanceBetween) {
            if (distanceBetween >= 5000) {
                return 0;
            } else {
                return 5000 - distanceBetween;
            }
        } else {
            return 0;
        }
    };

    const returnAiPoints = () => {
        if (data?.distance) {
            if (data.distance >= 5000) {
                return 0;
            } else {
                return 5000 - data.distance;
            }
        } else {
            return 0;
        }
    };

    return isMobile ? (
        <Wrapper isUserSummary={isUserSummary}>
            <div>
                <Name>{isUserSummary ? user.displayName : data?.name}</Name>
                <Points>
                    {isUserSummary
                        ? `${pointsHistory[currentRound]} + ${returnUserPoints()} pkt`
                        : `${data?.pointsHistory[currentRound]} + ${returnAiPoints()} pkt`}
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
                {isUserSummary
                    ? `${pointsHistory[currentRound]} + ${returnUserPoints()} pkt`
                    : `${data?.pointsHistory[currentRound]} + ${returnAiPoints()} pkt`}
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
