import styled from 'styled-components';
import { BiTime } from 'react-icons/bi';

export const Wrapper = styled.div`
    display: flex;
    max-height: 100%;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    margin-top: auto;
    padding: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    background: ${({ theme }) => theme.colors.surface};
    border: 3px solid ${({ theme }) => theme.colors.border};
    box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.shadow};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: ${({ theme }) => theme.typography.fontSize.md};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: ${({ theme }) => theme.spacing.lg};
        padding: ${({ theme }) => theme.spacing.md};
    }
`;

export const StyledIcon = styled(BiTime)`
    color: ${({ warning, theme }) => (warning ? theme.colors.error : theme.colors.accent)};
    font-size: 1.5em;
    animation: ${({ warning }) => (warning ? 'pulse 0.5s infinite' : 'none')};

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;

export const StyledSpan = styled.span`
    color: ${({ warning, theme }) => (warning ? theme.colors.error : theme.colors.text)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    text-shadow: ${({ warning, theme }) => (warning ? `2px 2px 0px ${theme.colors.shadow}` : 'none')};
`;
