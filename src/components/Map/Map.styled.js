import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 2px solid #000000;
    border-radius: 7px;
    min-width: 350px;
    min-height: 350px;
    @media (max-width: 1366px) {
        min-width: 280px;
        min-height: 280px;
    }

    .leaflet-container {
        border-radius: 7px;
        width: 100%;
        height: 100%;
    }

    .userMarker {
        .leaflet-marker-icon {
            filter: hue-rotate(290deg) brightness(1.2);
        }
    }
`;
