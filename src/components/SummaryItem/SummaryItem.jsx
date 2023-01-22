import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useUserAuth } from '../../contexts/AuthContext';
import { useGameCtx } from '../../contexts/GameContext';
import { Name, RangeTrack, RangeWrapper, Wrapper, GameRangeTrack, Spacer, Points } from './SummaryItem.styles';

export const SummaryItem = ({ isUserSummary, distanceBetween, pointsHistory, currentRound, aiData }) => {
    const { user } = useUserAuth();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return isMobile ? (
        <Wrapper isUserSummary={isUserSummary}>
            <div>
                <Name>{isUserSummary ? user.displayName : aiData?.name}</Name>
                <Points>
                    {isUserSummary
                        ? `${pointsHistory[currentRound]} + ${distanceBetween >= 5000 ? -5000 : 5000 - distanceBetween} pkt`
                        : `${aiData?.pointsHistory[currentRound]} + ${aiData?.distance >= 5000 ? -5000 : 5000 - aiData?.distance} pkt`}
                </Points>
            </div>
            <RangeWrapper>
                <RangeTrack distanceBetween={isUserSummary ? distanceBetween : aiData?.distance} />
                <p>{isUserSummary ? distanceBetween : aiData?.distance} m</p>
            </RangeWrapper>
        </Wrapper>
    ) : (
        <Wrapper isUserSummary={isUserSummary}>
            <Name>{isUserSummary ? user.displayName : aiData?.name}</Name>
            <Spacer />
            <RangeWrapper>
                <RangeTrack distanceBetween={isUserSummary ? distanceBetween : aiData?.distance} />
                <p>{isUserSummary ? distanceBetween : aiData?.distance} m</p>
            </RangeWrapper>
            <Spacer />
            <Points>
                {isUserSummary
                    ? `${pointsHistory[currentRound]} + ${distanceBetween >= 5000 ? -5000 : 5000 - distanceBetween} pkt`
                    : `${aiData?.pointsHistory[currentRound]} + ${aiData?.distance >= 5000 ? -5000 : 5000 - aiData?.distance} pkt`}
            </Points>
        </Wrapper>
    );
};

export const GameSummaryItem = ({ points, isUserSummary, aiData }) => {
    const { rounds } = useGameCtx();
    const { user } = useUserAuth();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
