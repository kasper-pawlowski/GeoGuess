import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    width: 100%;
    max-width: 400px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        gap: ${({ theme }) => theme.spacing.sm};
    }
`;
