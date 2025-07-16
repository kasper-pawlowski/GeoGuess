import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.xl};
    min-height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.lg};
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    border: 5px solid ${({ theme }) => theme.colors.border};
    box-shadow: 8px 8px 0px ${({ theme }) => theme.colors.shadow};
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        background: ${({ theme }) => theme.colors.accent};
        z-index: -1;
        transform: rotate(-2deg);
    }
`;

const animation = keyframes`
    0% { 
        opacity: 0;
        transform: translateX(20px);
    }
    100% { 
        opacity: 1;
        transform: translateX(0);
    }
`;

export const RightContainer = styled.div`
    animation: ${animation} 0.3s ease-out;
    display: flex;
    height: 100%;
    flex-direction: column;
    min-width: 450px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column-reverse;
        width: 100%;
        min-width: auto;
    }
`;

export const Ranking = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.md};
    border: 4px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    gap: ${({ theme }) => theme.spacing.sm};
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.shadow};
    position: relative;

    &::before {
        content: 'RANKING';
        position: absolute;
        top: -15px;
        left: ${({ theme }) => theme.spacing.md};
        background: ${({ theme }) => theme.colors.warning};
        color: ${({ theme }) => theme.colors.text};
        padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
        border: 3px solid ${({ theme }) => theme.colors.border};
        font-weight: ${({ theme }) => theme.typography.fontWeight.black};
        font-size: ${({ theme }) => theme.typography.fontSize.xs};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transform: rotate(-2deg);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        gap: ${({ theme }) => theme.spacing.xs};
        padding: ${({ theme }) => theme.spacing.sm};
    }
`;

export const RankingItem = styled.div`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.colors.background};
    border: 3px solid ${({ theme }) => theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.shadow};
    transition: all 0.2s ease;
    gap: ${({ theme }) => theme.spacing.sm};
    min-height: 45px;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.shadow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
        min-height: 40px;
        gap: ${({ theme }) => theme.spacing.xs};
    }

    p {
        flex: 1;
        margin: 0;
        text-align: left;
    }

    span {
        color: ${({ theme }) => theme.colors.accent};
        font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
        background: ${({ theme }) => theme.colors.surface};
        padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
        border: 2px solid ${({ theme }) => theme.colors.border};
        margin-left: auto;
    }
`;

export const UserRankingItem = styled(RankingItem)`
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.border};

    span {
        background: ${({ theme }) => theme.colors.surface};
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export const PlayerIcon = styled.div`
    width: 32px;
    height: 32px;
    background: ${({ theme }) => theme.colors.success};
    border: 2px solid ${({ theme }) => theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.surface};
    font-size: 1rem;
    flex-shrink: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 28px;
        height: 28px;
        font-size: 0.9rem;
    }
`;

export const BotIcon = styled.div`
    width: 32px;
    height: 32px;
    background: ${({ theme }) => theme.colors.warning};
    border: 2px solid ${({ theme }) => theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    flex-shrink: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 28px;
        height: 28px;
        font-size: 0.9rem;
    }
`;
