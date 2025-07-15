import styled from 'styled-components';

export const Wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    border: 4px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    background: ${({ active, theme }) => (active ? theme.colors.accent : theme.colors.surface)};
    color: ${({ active, theme }) => (active ? theme.colors.surface : theme.colors.text)};
    box-shadow: ${({ active, theme }) => (active ? `inset 4px 4px 0px ${theme.colors.shadow}` : `4px 4px 0px ${theme.colors.shadow}`)};
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    width: 100%;

    &:hover {
        transform: ${({ active }) => (active ? 'none' : 'translateY(-2px)')};
        box-shadow: ${({ active, theme }) => (active ? `inset 4px 4px 0px ${theme.colors.shadow}` : `6px 6px 0px ${theme.colors.shadow}`)};
        background: ${({ active, theme }) => (active ? theme.colors.accent : theme.colors.warning)};
    }

    &:active {
        transform: translateY(0);
        box-shadow: ${({ theme }) => `2px 2px 0px ${theme.colors.shadow}`};
    }

    p {
        margin: 0;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
        font-size: ${({ theme }) => theme.typography.fontSize.md};
    }
`;
