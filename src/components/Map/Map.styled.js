import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 5px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    min-width: 380px;
    min-height: 380px;
    box-shadow: 8px 8px 0px ${({ theme }) => theme.colors.shadow};
    position: relative;
    background: ${({ theme }) => theme.colors.surface};

    &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        background: ${({ theme }) => theme.colors.success};
        z-index: -1;
        transform: rotate(2deg);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        min-width: 320px;
        min-height: 320px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        min-width: 280px;
        min-height: 280px;
    }

    .leaflet-container {
        border-radius: 0;
        width: 100%;
        height: 100%;
        border: 2px solid ${({ theme }) => theme.colors.border};
    }

    .leaflet-marker-icon {
        filter: hue-rotate(290deg) brightness(1.2) saturate(1.5);
        border: 2px solid ${({ theme }) => theme.colors.border} !important;
        border-radius: 0 !important;
        box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.shadow} !important;
    }

    .leaflet-popup-content-wrapper {
        background: ${({ theme }) => theme.colors.surface};
        border: 3px solid ${({ theme }) => theme.colors.border};
        border-radius: 0;
        box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.shadow};
    }

    .leaflet-popup-tip {
        background: ${({ theme }) => theme.colors.surface};
        border: 2px solid ${({ theme }) => theme.colors.border};
        border-radius: 0;
    }
`;
