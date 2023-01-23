import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0%{opacity: 0}
    100%{ opacity: 1}
`;

export const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    animation: ${animation} 0.2s linear;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border: 2px solid #000000;
    border-radius: 7px;
    max-height: calc(100vh - 60px - 4rem);
    @media (max-width: 1366px) {
        max-height: calc(100vh - 60px - 4rem);
    }
`;
