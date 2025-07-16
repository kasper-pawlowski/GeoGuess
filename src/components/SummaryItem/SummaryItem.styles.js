import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    background: ${({ isUserSummary, theme }) => (isUserSummary ? theme.colors.accent : theme.colors.surface)};
    color: ${({ isUserSummary, theme }) => (isUserSummary ? theme.colors.surface : theme.colors.text)};
    border: 4px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.shadow};
    transition: all 0.2s ease;
    align-items: center;
    justify-content: space-between;
    min-height: 60px;
    width: 100%;
    max-width: 100%;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.shadow};
    }

    .left-section {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing.sm};
        flex: 0 0 200px;
    }

    .center-section {
        flex: 1;
        display: flex;
        align-items: center;
        margin: 0 ${({ theme }) => theme.spacing.lg};
    }

    .right-section {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing.sm};
        flex: 0 0 240px;
        justify-content: flex-end;

        p {
            width: 120px;
            display: flex;
            justify-content: center;
            font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
            background: ${({ theme }) => theme.colors.warning};
            color: ${({ theme }) => theme.colors.text};
            padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
            border: 2px solid ${({ theme }) => theme.colors.border};
            margin: 0;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        gap: ${({ theme }) => theme.spacing.sm};
        flex-direction: column;
        padding: ${({ theme }) => theme.spacing.sm};
        align-items: stretch;
        min-height: 50px;

        .left-section {
            flex: none;
            justify-content: flex-start;
        }

        .center-section {
            flex: none;
            margin: ${({ theme }) => theme.spacing.sm} 0;
        }

        .right-section {
            flex: none;
            justify-content: space-between;

            p {
                width: 100px;
                padding: ${({ theme }) => theme.spacing.xs};
            }
        }
    }
`;

export const Name = styled.div`
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    flex: 1;
`;

export const Spacer = styled.div`
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.border};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`;

export const RangeTrack = styled.div`
    height: 6px;
    width: 100%;
    background: ${({ theme }) => theme.colors.border};
    position: relative;
    border: 2px solid ${({ theme }) => theme.colors.border};

    &::after {
        content: '';
        position: absolute;
        height: 100%;
        width: ${({ distanceBetween }) => (distanceBetween ? 100 - (distanceBetween / 5000) * 100 : 0)}%;
        background: linear-gradient(
            90deg,
            ${({ theme }) => theme.colors.success} 0%,
            ${({ theme }) => theme.colors.warning} 50%,
            ${({ theme }) => theme.colors.error} 100%
        );
        top: 0;
        left: 0;
        border-radius: 0;
        transition: width 0.5s ease;
    }
`;

export const GameRangeTrack = styled(RangeTrack)`
    &::after {
        width: ${({ points, rounds }) => (points / (rounds * 5000)) * 100}%;
        background: linear-gradient(
            90deg,
            ${({ theme }) => theme.colors.error} 0%,
            ${({ theme }) => theme.colors.warning} 50%,
            ${({ theme }) => theme.colors.success} 100%
        );
    }
`;

export const Points = styled.p`
    display: flex;
    align-items: center;
    margin-left: auto;
    background: ${({ theme }) => theme.colors.success} !important;
    color: ${({ theme }) => theme.colors.surface} !important;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold} !important;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md} !important;
    border: 3px solid ${({ theme }) => theme.colors.border} !important;
    box-shadow: 2px 2px 0px ${({ theme }) => theme.colors.shadow};
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const PlayerIcon = styled.div`
    width: 36px;
    height: 36px;
    background: ${({ theme }) => theme.colors.success};
    border: 3px solid ${({ theme }) => theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.surface};
    font-size: 1.1rem;
    flex-shrink: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 32px;
        height: 32px;
        font-size: 1rem;
    }
`;

export const BotIcon = styled.div`
    width: 36px;
    height: 36px;
    background: ${({ theme }) => theme.colors.warning};
    border: 3px solid ${({ theme }) => theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    flex-shrink: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 32px;
        height: 32px;
        font-size: 1rem;
    }
`;
