import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.lg};

    h1 {
        font-size: ${({ theme }) => theme.typography.fontSize.xxl};
        font-weight: ${({ theme }) => theme.typography.fontWeight.black};
        color: ${({ theme }) => theme.colors.accent};
        text-transform: uppercase;
        letter-spacing: -0.03em;
        text-shadow: 4px 4px 0px ${({ theme }) => theme.colors.shadow};
        text-align: center;
        margin: 0;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.typography.fontSize.xl};
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: ${({ theme }) => theme.spacing.md};
        padding: ${({ theme }) => theme.spacing.md};
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    border: 4px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    color: ${({ theme }) => theme.colors.surface};
    background: ${({ theme }) => theme.colors.success};
    box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.shadow};
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    min-width: 250px;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 9px 9px 0px ${({ theme }) => theme.colors.shadow};
        background: ${({ theme }) => theme.colors.accent};
    }

    &:active {
        transform: translateY(0);
        box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.shadow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 80%;
        font-size: ${({ theme }) => theme.typography.fontSize.md};
        padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    }
`;

export const SummaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    width: 100%;
    max-width: 600px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        gap: ${({ theme }) => theme.spacing.sm};
    }
`;
