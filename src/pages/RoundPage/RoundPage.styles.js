import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
`;

const animation = keyframes`
    0%{opacity: 0}
    100%{ opacity: 1}
`;

export const RightContainer = styled.div`
    animation: ${animation} 0.2s linear;
    display: flex;
    height: 100%;
    flex-direction: column;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        width: 100%;
    }
`;

export const Ranking = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 2px solid #000000;
    border-radius: 7px;
    gap: 10px;
    min-width: 340px;
    background-color: #ffffff;
    padding: 5px;
    @media (max-width: 1366px) {
        gap: 6px;
    }
`;

export const RankingItem = styled.div`
    padding: 10px 22px 10px 14px;
    background-color: #f4f4f4;
    border-radius: 7px;
    display: flex;
    position: relative;
    font-size: 1.3rem;
    @media (max-width: 1366px) {
        font-size: 1.1rem;
        padding: 5px 22px 5px 14px;
    }

    span {
        text-align: center;
        margin-left: auto;
    }
`;

export const UserRankingItem = styled(RankingItem)`
    border: 1px solid ${({ theme }) => theme.colors.accent};
`;
