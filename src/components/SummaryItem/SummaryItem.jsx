import React from 'react';
import { useUserAuth } from '../../contexts/AuthContext';
import { useGameCtx } from '../../contexts/GameContext';
import { Name, RangeTrack, RangeWrapper, Wrapper, GameRangeTrack, Spacer } from './SummaryItem.styles';

const SummaryItem = ({ distanceBetween, pointsHistory, currentRound }) => {
    const { user } = useUserAuth();

    return (
        <Wrapper>
            <Name>{user.displayName}</Name>
            <Spacer />
            <RangeWrapper>
                <RangeTrack distanceBetween={distanceBetween} />
                <p>{distanceBetween} m</p>
            </RangeWrapper>
            <Spacer />
            <p>
                {pointsHistory[currentRound]} + {distanceBetween >= 5000 ? -5000 : 5000 - distanceBetween} pkt
            </p>
        </Wrapper>
    );
};

export const MobileSummaryItem = ({ distanceBetween, pointsHistory, currentRound }) => {
    const { user } = useUserAuth();
    return (
        <Wrapper>
            <div>
                <Name>{user.displayName}</Name>
                <p>
                    {pointsHistory[currentRound]} + {distanceBetween >= 5000 ? -5000 : 5000 - distanceBetween} pkt
                </p>
            </div>
            <RangeWrapper>
                <RangeTrack distanceBetween={distanceBetween} />
                <p>{distanceBetween} m</p>
            </RangeWrapper>
        </Wrapper>
    );
};

export const GameSummaryItem = ({ points }) => {
    const { rounds } = useGameCtx();
    const { user } = useUserAuth();

    return (
        <Wrapper>
            <Name>{user.displayName}</Name>
            <RangeWrapper>
                <GameRangeTrack points={points} rounds={rounds} />
            </RangeWrapper>
            <p>{points} pkt</p>
        </Wrapper>
    );
};

export const MobileGameSummaryItem = ({ points }) => {
    const { rounds } = useGameCtx();
    const { user } = useUserAuth();

    return (
        <Wrapper>
            <div>
                <Name>{user.displayName}</Name>
                <p>{points} pkt</p>
            </div>
            <RangeWrapper>
                <GameRangeTrack points={points} rounds={rounds} />
            </RangeWrapper>
        </Wrapper>
    );
};

export default SummaryItem;
