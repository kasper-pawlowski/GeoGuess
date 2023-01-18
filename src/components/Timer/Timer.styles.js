import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    max-height: 100%;
    align-items: center;
    gap: 10px;
    margin-top: auto;
    padding-top: 10px;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    @media screen and (max-width: 1366px) {
        font-size: 1rem;
    }
    @media screen and (max-width: 768px) {
        margin-top: 1rem;
    }
`;
