import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 768px) {
        width: 80%;
        gap: 5px;
    }
`;
