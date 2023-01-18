import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 768px) {
        width: 70%;
        gap: 5px;
    }
`;
