import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useUserAuth } from '../../contexts/AuthContext';
import { useGameCtx } from '../../contexts/GameContext';
import { Name, RangeTrack, RangeWrapper, Wrapper, GameRangeTrack, Spacer, Points } from './SummaryItem.styles';

export const SummaryItem = ({ isUserSummary, distanceBetween, pointsHistory, currentRound, aiData }) => {
    const { user } = useUserAuth();
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
        if (aiData?.distance) {
            if (aiData.distance >= 5000) {
                return 0;
            } else {
                return 5000 - aiData.distance;
            }
        } else {
            return 0;
        }
    };

    return isMobile ? (
        <Wrapper isUserSummary={isUserSummary}>
            <div>
                <Name>{isUserSummary ? user.displayName : aiData?.name}</Name>
                <Points>
                    {isUserSummary
                        ? `${pointsHistory[currentRound]} + ${returnUserPoints()} pkt`
                        : `${aiData?.pointsHistory[currentRound]} + ${returnAiPoints()} pkt`}
                </Points>
            </div>
            <RangeWrapper>
                <RangeTrack distanceBetween={isUserSummary ? distanceBetween : aiData?.distance} />
                <p>{isUserSummary ? (distanceBetween ? distanceBetween : '-') : aiData?.distance} m</p>
            </RangeWrapper>
        </Wrapper>
    ) : (
        <Wrapper isUserSummary={isUserSummary}>
            <Name>{isUserSummary ? user.displayName : aiData?.name}</Name>
            <Spacer />
            <RangeWrapper>
                <RangeTrack distanceBetween={isUserSummary ? distanceBetween : aiData?.distance} />
                <p>{isUserSummary ? (distanceBetween ? distanceBetween : '-') : aiData?.distance} m</p>
            </RangeWrapper>
            <Spacer />
            <Points>
                {isUserSummary
                    ? `${pointsHistory[currentRound]} + ${returnUserPoints()} pkt`
                    : `${aiData?.pointsHistory[currentRound]} + ${returnAiPoints()} pkt`}
            </Points>
        </Wrapper>
    );
};

export const GameSummaryItem = ({ points, isUserSummary, aiData }) => {
    const { rounds } = useGameCtx();
    const { user } = useUserAuth();
    const isMobile = useMediaQuery({ query: '(max-width: 910px)' });

    return isMobile ? (
        <Wrapper isUserSummary={isUserSummary}>
            <div>
                <Name>{isUserSummary ? user.displayName : aiData?.name}</Name>
                <Points>{isUserSummary ? points : aiData?.points} pkt</Points>
            </div>
            <RangeWrapper>
                <GameRangeTrack points={isUserSummary ? points : aiData?.points} rounds={rounds} />
            </RangeWrapper>
        </Wrapper>
    ) : (
        <Wrapper isUserSummary={isUserSummary}>
            <Name>{isUserSummary ? user.displayName : aiData?.name}</Name>
            <RangeWrapper>
                <GameRangeTrack points={isUserSummary ? points : aiData?.points} rounds={rounds} />
            </RangeWrapper>
            <Points>{isUserSummary ? points : aiData?.points} pkt</Points>
        </Wrapper>
    );
};
