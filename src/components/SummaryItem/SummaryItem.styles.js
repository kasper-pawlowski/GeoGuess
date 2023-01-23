import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    gap: 30px;
    padding: 12px 20px;
    background-color: #f4f4f4;
    border: 1px solid ${({ isUserSummary, theme }) => (isUserSummary ? theme.colors.accent : '#f4f4f4')};
    border-radius: 7px;
    font-size: 1.1rem;
    @media (max-width: 768px) {
        font-size: 0.8rem;
        gap: 15px;
        flex-direction: column;

        div:nth-child(1) {
            display: flex;
            justify-content: space-between;

            @media (max-width: 768px) {
                font-size: 0.9rem;
            }
        }
    }
`;

export const Name = styled.div`
    width: 120px;
`;

export const Spacer = styled.div`
    width: 1px;
    height: 100%;
    background-color: black;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const RangeWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 30px;

    @media (min-width: 768px) {
        width: 400px;
    }
    @media (max-width: 910px) {
        flex: 1;
    }
`;

export const RangeTrack = styled.div`
    height: 1px;
    flex: 1;
    background-color: black;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        height: 10px;
        width: ${({ distanceBetween }) => (distanceBetween ? 100 - (distanceBetween / 5000) * 100 : 0)}%;

        background-color: ${({ theme }) => theme.colors.accent};
        top: 50%;
        translate: 0 -50%;
        left: 0;
        border-radius: 100vw;
    }
`;

export const GameRangeTrack = styled(RangeTrack)`
    &::after {
        width: ${({ points, rounds }) => (points / (rounds * 5000)) * 100}%;
    }
`;

export const Points = styled.p`
    display: flex;
    align-items: center;
    margin-left: auto;
`;
