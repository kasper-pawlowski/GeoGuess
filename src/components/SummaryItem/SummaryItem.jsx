import React from 'react';
import { Name, Points, RangeTrack, RangeWrapper, Wrapper } from './SummaryItem.styles';

const SummaryItem = ({ distanceBetween }) => {
    return (
        <Wrapper>
            <Name>Kasper Pawłowski</Name>
            <RangeWrapper>
                <RangeTrack />
                <p>-{distanceBetween.toFixed(0)} m</p>
            </RangeWrapper>
            <Points>0 + 8 pkt</Points>
        </Wrapper>
    );
};

export default SummaryItem;
