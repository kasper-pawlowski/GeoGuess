import React from 'react';
import { Wrapper } from './Region.styles';

const Region = ({ region, active, setSelectedRegion }) => {
    const handleRegionClick = (region) => {
        setSelectedRegion(region);
    };

    return (
        <Wrapper active={active} onClick={() => handleRegionClick(region)}>
            <p>{region}</p>
        </Wrapper>
    );
};

export default Region;
