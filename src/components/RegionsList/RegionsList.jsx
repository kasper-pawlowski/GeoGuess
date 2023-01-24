import React from 'react';
import { useGameConfigCtx } from '../../contexts/GameConfigContext';
import Region from '../Region/Region';
import { Wrapper } from './RegionsList.styled';

const RegionsList = () => {
    const { selectedRegion, setSelectedRegion } = useGameConfigCtx();
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
