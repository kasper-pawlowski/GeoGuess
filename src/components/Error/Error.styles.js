import styled from 'styled-components';
import { MdError } from 'react-icons/md';

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.surface};
    display: flex;
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.lg};
    border: 4px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    min-width: ${({ region }) => (region ? 'auto' : '320px')};
    margin-top: ${({ theme }) => theme.spacing.lg};
    box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.shadow};
    transform: rotate(-1deg);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 90%;
        transform: rotate(0deg);
    }

    div {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    p {
        line-height: 1.6;
        font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
        font-size: ${({ theme }) => theme.typography.fontSize.md};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: ${({ theme }) => theme.spacing.sm};

        &:last-child {
            margin-bottom: 0;
        }

        &:nth-child(2) {
            position: relative;
            margin-top: ${({ theme }) => theme.spacing.md};

            &::after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: -${({ theme }) => theme.spacing.sm};
                width: 100%;
                height: 3px;
                background: ${({ theme }) => theme.colors.surface};
                border-radius: 0;
            }
        }
    }
`;

export const Icon = styled(MdError)`
    color: ${({ theme }) => theme.colors.surface};
    font-size: 2.5rem;
    flex-shrink: 0;
`;
