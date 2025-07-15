import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xxl};
    min-height: 100vh;
    text-align: center;

    h1 {
        font-size: ${({ theme }) => theme.typography.fontSize.huge};
        font-weight: ${({ theme }) => theme.typography.fontWeight.black};
        color: ${({ theme }) => theme.colors.error};
        text-transform: uppercase;
        letter-spacing: -0.03em;
        text-shadow: 4px 4px 0px ${({ theme }) => theme.colors.shadow};
        margin: 0;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.typography.fontSize.xxl};
        }
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
    background: ${({ theme }) => theme.colors.accent};
    box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.shadow};
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    min-width: 250px;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 9px 9px 0px ${({ theme }) => theme.colors.shadow};
        background: ${({ theme }) => theme.colors.success};
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
