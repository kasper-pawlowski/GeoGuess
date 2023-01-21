import styled from 'styled-components';
import { BiTime } from 'react-icons/bi';

export const Wrapper = styled.div`
    display: flex;
    max-height: 100%;
    align-items: center;
    gap: 10px;
    margin-top: auto;
    padding-top: 10px;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    @media (max-width: 1366px) {
        font-size: 1rem;
    }
    @media (max-width: 768px) {
        margin-top: 1rem;
    }
`;

export const StyledIcon = styled(BiTime)`
    color: ${({ warning }) => (warning ? 'red' : null)};
`;

export const StyledSpan = styled.span`
    color: ${({ warning }) => (warning ? 'red' : null)};
`;
