import styled from 'styled-components';

export const Img = styled.img`
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
