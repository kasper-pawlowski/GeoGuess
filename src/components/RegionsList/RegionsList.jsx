import React, { useState } from 'react';
import { useGameCtx } from '../../contexts/GameContext';
import Region from '../Region/Region';
import { Wrapper } from './RegionsList.styled';

const RegionsList = () => {
    const { selectedRegion, setSelectedRegion } = useGameCtx();
    const regions = ['Polska', 'Francja', 'Niemcy', 'Hiszpania', 'Włochy'];

    return (
        <Wrapper>
            {regions.map((region) => (
                <Region key={region} active={region === selectedRegion} region={region} setSelectedRegion={setSelectedRegion} />
            ))}
        </Wrapper>
    );
};

export default RegionsList;
